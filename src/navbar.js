import { mainDiv } from "./index.js";

let createNavBar = () => {
    let navBar = document.createElement("nav");
    mainDiv.appendChild(navBar);

    let contactButton = document.createElement("button");
    contactButton.innerHTML = "Contact"
    navBar.appendChild(contactButton);

    let brandLogo = document.createElement("svg");

    let menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu"
    navBar.appendChild(menuButton)
}

export {createNavBar}