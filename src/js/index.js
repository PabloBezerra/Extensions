// imports bundles
import '../sass/main.scss';

// imports modules
import { Controller } from "./Controller.js";
import { View } from "./View.js";
import { Server } from "./Server.js";

export const controller = new Controller();
export const view = new View();
export const server = new Server();

//DOM elements
const head = document.querySelector('#head');
const nav = document.querySelector('nav');
const extensions = document.querySelector('#extension-list');

//initialization
document.addEventListener('DOMContentLoaded', e => {
    controller.init();
})

//event listeners
head.addEventListener('click', e  => {
    view.print(e.target.id);
})

nav.addEventListener('click', e => {
    view.print(e.target)
})

extensions.addEventListener('click', e => {
    view.print(e.target.id);
})
