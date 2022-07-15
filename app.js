//This is a global variable that contains or house the navigation bar list
const navList = document.querySelector('#navbar__list');
//I call this the section container that contains all the section on the landing page
const landSect = Array.from(document.querySelectorAll('section'));
//I created a function that makes the navigation bar touch to respond to clicks 
function clickLink(){
    // This is the loop that the sections are run through that creates the list at the navbar
    for (j = 0; j <= landSect.length - 1; j++){
        //Attribute are gotten from the sections id
        let touch = landSect[j].getAttribute('id');      
        //Section ID are attributed to the hanger
        let hanger = document.createElement('j');
        //The hanger gets a value
        hanger.innerText = landSect[j].getAttribute('data-nav');
        //The hanger create a class called link_menu
        hanger.setAttribute('class', 'link_menu ');             
        //My items are created in a list form
        var itemList = document.createElement('li');
        //we will first of all give the list a data_link attribute
        itemList.setAttribute('data_touch', touch);
        //Then we also give the list a class attribute
        itemList.setAttribute('class', touch);
        //I appendChild the hanger to the itemList
        itemList.appendChild(hanger);
        //I also appendChild the itemList to the ul unordered list
        navList.appendChild(itemList);  
        // This is a whenScroll event listener for the window scrolling and navigation
        document.addEventListener('scroll', function() {
            whenScroll();
        });
    }
    //A container for the menuList is created
    let menuLists = Array.from(document.querySelectorAll('li'))
    console.log(menuLists);
    //A scrolling function
    let whenScroll = function(hanger) {      
        //The menu link is set active
        menuLists.forEach(itemList => {
        //This is an empty active menu
        let activeMenu = "";
        if (itemList.classList.contains(activeMenu)) {
            itemList.classList.add('menu__active');
        }
        // Event Listener is added to the list item when to Scrolling each section
        itemList.addEventListener('click', () => {
            const activeScrol = document.getElementById(itemList.getAttribute('data_touch'));
            activeScrol.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' });
            });
        });
        //This checks if the section is in viewport
        landSect.forEach(section => {
            //Another variable that house the rect
            let clientiele = section.getBoundingClientRect();            
            //If this conditions are met
            if (clientiele.bottom <= window.innerHeight && clientiele.top >= -25 && clientiele.left >= 0 && clientiele.right <= window.innerWidth){
            //The section is visible to the active menu
            activeMenu = section.getAttribute('id')
            } 
            else { 
                section.classList.remove('your-active-class')
            }
        });     
    }
}
//This function responds when the link is being clicked
clickLink();