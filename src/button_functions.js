import { removeHomeDoms } from "./home_page.js";
import { createWineMenu } from "./menu.js";
import { mainDiv } from "./index.js";

let navBarFunc = (menuBut, contactBut) => {
    menuBut.addEventListener("click", () => {
        console.log(`${menuBut} works!`)
        removeHomeDoms(mainDiv)
        createWineMenu(mainDiv)
    })
    contactBut.addEventListener("click", () => {
        console.log(`${contactBut} works!`)
    })
}

export {navBarFunc};

