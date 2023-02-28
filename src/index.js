export let mainDiv = document.querySelector("#content");

import { createNavBar } from "./navbar.js";
import { createHomePage, createFrame, createFooter } from "./home_page.js";
import "./style.scss";

createNavBar()
createHomePage(mainDiv)
createFrame(mainDiv,"frame-left", "../assets/venue.jpg","The Bar","Something in the style of the Continental enotecas and neighbourhood bistros we know and love.")
createFrame(mainDiv,"frame-right", "../assets/wine.jpg","Selection","A sip of sophistication. By the glass selection changes every week. ")
createFooter(mainDiv)


