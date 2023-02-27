let homePageIntroduction = document.createElement("div");

export let createHomePage = (mainDiv) => {
    homePageIntroduction.className = "home-page-introduction"
    mainDiv.append(homePageIntroduction);

    let introductionHeader = document.createElement("h2");
    introductionHeader.className = "intro-header";
    introductionHeader.innerHTML = "Cosy & Convivial. That’s us in a nutshell.";
    homePageIntroduction.appendChild(introductionHeader);

    let introductionText = document.createElement("p");
    introductionText.innerHTML = "Created by Aniko Buday, former sommelier with a serious passion for food and wine. She wanted to create a cozy and relaxed place where people could discover great food with beautiful wine-and so the bar was born.";
    homePageIntroduction.appendChild(introductionText);
}



export let createFrame = (mainDiv, className, image, header, paragraph) => {
    let frame = document.createElement("div");
    frame.className = `${className}`;
    mainDiv.appendChild(frame);

    let imgHolder = document.createElement("img");
    imgHolder.src = `${image}`;
    imgHolder.className = "home-page-pictures"
    frame.appendChild(imgHolder);

    let textHolder = document.createElement("div");
    textHolder.className = "text-holder"
    frame.appendChild(textHolder);

    let textHeader = document.createElement("h2");
    textHeader.innerHTML = `${header}`;
    textHolder.appendChild(textHeader);

    let textParagraph = document.createElement("p");
    textParagraph.innerHTML = `${paragraph}`;
    textHolder.appendChild(textParagraph);
}

let footer = document.createElement("footer");

export let createFooter = (mainDiv) => {
    mainDiv.append(footer);

    let map = document.createElement("div");
    map.innerHTML = `<div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="198" id="gmap_canvas" src="https://maps.google.com/maps?q=london%20long%20acre&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-i.net">123movies .net</a><br><style>.mapouter{position:relative;text-align:right;height:198px;width:600px;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:198px;width:600px;}</style></div></div>`
    footer.appendChild(map);

    let anchor1 = document.createElement("a");
    anchor1.innerHTML = "My GitHub";
    anchor1.href = "https://github.com/Annie1790";
    footer.appendChild(anchor1)
}
