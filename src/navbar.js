import { mainDiv } from "./index.js";

let createNavBar = () => {
    let navBar = document.createElement("nav");
    navBar.className = "navigation-bar"
    mainDiv.appendChild(navBar);

    let contactButton = document.createElement("button");
    contactButton.innerHTML = "Contact";
    navBar.appendChild(contactButton);

    let brandLogo = document.createElement("img");
    brandLogo.src = "/assets/brand_logo.svg";
    brandLogo.className = "brand-name"
    navBar.appendChild(brandLogo);

    let menuButton = document.createElement("button");
    menuButton.innerHTML = "Menu";
    navBar.appendChild(menuButton);

    let barName = document.createElement("h1");
    barName.className = "bar-name"
    barName.innerHTML = "Annie's Winebar";
    mainDiv.appendChild(barName);
}

export {createNavBar}