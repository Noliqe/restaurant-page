import './style.css';
import header from './header.js';
import homeScreen from './home.js';
import menuScreen from './menu.js';
import contactScreen from './contact.js'
//import topNavi from './nav.js';
//import homeScreen from './home.js'

const screen = () => {
    let standard = homeScreen.home();
    
    let loadMenu = document.querySelector('.menuLink');
    loadMenu.addEventListener('click', () => {
        let x = document.body.querySelector('#content');
        let y = document.querySelector('#background');
        x.removeChild(y);
        standard = menuScreen.menu();
    })
    let loadHome = document.querySelector('.homeLink');
    loadHome.addEventListener('click', () => {
        let x = document.body.querySelector('#content');
        let y = document.querySelector('#background');
        x.removeChild(y);
        standard = homeScreen.home();
    })
    let loadContact = document.querySelector('.contactLink');
    loadContact.addEventListener('click', () => {
        let x = document.body.querySelector('#content');
        let y = document.querySelector('#background');
        x.removeChild(y);
        standard = contactScreen.form();
    })
    return standard
}

screen();
