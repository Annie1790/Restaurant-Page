export let mainDiv = document.querySelector("#content");

import { createNavBar } from "./navbar.js";
import { createHomePage, createFrame, createFooter } from "./home_page.js";
import "./style.scss";

createNavBar()
createHomePage(mainDiv)
createFrame(mainDiv, "frame-left", "../assets/venue.jpg","The Bar","something in the style of the Continental enotecas and neighbourhood bistros we know and love.")
createFrame(mainDiv, "frame-right", "../assets/venue.jpg","The Bar","something in the style of the Continental enotecas and neighbourhood bistros we know and love.")

createFooter(mainDiv)
