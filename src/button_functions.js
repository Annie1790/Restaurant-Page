import { mainDiv } from "./index.js";
import { removeHomeDom } from "./home_page.js";
import { createMenuHeader } from "./menu.js";

export let navBarFunc = (menuBut, contactBut) => {
    menuBut.addEventListener("click", () => {
        removeNavBar(mainDiv)
        removeHomeDom(mainDiv);
        createMenuHeader();
    })
    contactBut.addEventListener("click", () => {
    })
}