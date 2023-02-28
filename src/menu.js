import { mainDiv } from ".";

let menuMainDiv = document.createElement("table");


export let createMenuHeader = () => {
    mainDiv.appendChild(menuMainDiv);

    let section = document.createElement("tr");
    menuMainDiv.appendChild(section);

    let wineName = document.createElement("th");
    wineName.innerHTML = "Wine";
    section.appendChild(wineName);

    let wineColor = document.createElement("th");
    wineColor.innerHTML = "Color";
    section.appendChild(wineColor);

    let price = document.createElement("th");
    price.innerHTML = "Price";
    section.appendChild(price);
}