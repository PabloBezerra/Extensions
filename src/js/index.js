// imports bundles
import '../sass/main.scss';

// imports modules
import { Controller } from "./Controller.js";
import { View } from "./View.js";
import { Server } from "./Server.js";

//DOM elements
const main = document.querySelector('main');
const head = document.querySelector('#head');
const nav = document.querySelector('nav');
const extensions = document.querySelector('#extension-list');

//instantiations
export const controller = new Controller();
export const view = new View(extensions, nav.querySelectorAll('li'), main);
export const server = new Server();

//initialization
document.addEventListener('DOMContentLoaded', e => {
    controller.init();
})

//Event Listeners

// change theme
head.addEventListener('click', e  => {
    if (e.currentTarget.id) controller.switchTheme();
})

// extensions active filter
nav.addEventListener('click', e => {
    if(e.target.id) controller.filterExtensions(e.target.id);
})

// 
extensions.addEventListener('click', e => {
    if(e.target.parentElement.className === "actions") controller.editExtensions(e.target);
})
