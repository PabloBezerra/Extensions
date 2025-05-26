// imports bundles
import '../sass/main.scss';

// imports modules
import { Controller } from "./Controller.js";
import { View } from "./View.js";
import { Server } from "./Server.js";

//DOM elements
const body = document.querySelector('body');
const main = document.querySelector('main');
const head = document.querySelector('#head');
const nav = document.querySelector('nav');
const extensions = document.querySelector('#extension-list');

//instantiations
export const controller = new Controller();
export const view = new View(extensions, nav.querySelectorAll('li'));
export const server = new Server();

//initialization
document.addEventListener('DOMContentLoaded', e => {
    controller.init();//send command to controller for application to be initialized
})

//Event Listeners

// change theme
head.addEventListener('click', e  => {
    if (e.currentTarget.id) controller.switchTheme(body, main); //check button clicked and send to controller
})

// extensions active filter
nav.addEventListener('click', e => {
    if(e.target.id) controller.filterExtensions(e.target); //check button clicked and send to controller
})

nav.addEventListener('input', e => {
    controller.search(e.target.value); //send inputs to controller
})

// 
extensions.addEventListener('click', e => {
    if(e.target.parentElement.className === "actions") controller.editExtensions(e.target); //check button clicked and send to controller
})
