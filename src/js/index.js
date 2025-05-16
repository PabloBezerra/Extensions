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
    console.log(e.currentTarget.id);
})

nav.addEventListener('click', e => {
    controller.filter(e.target.id);
})

extensions.addEventListener('click', e => {
    console.log(e.target.id);
})
