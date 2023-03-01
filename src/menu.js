let menuMainDiv = document.createElement("table");
menuMainDiv.className = "table";

let createMenuHeader = (mainDiv) => {
    mainDiv.appendChild(menuMainDiv);

    let section = document.createElement("tr");
    menuMainDiv.appendChild(section);

    let vintage = document.createElement("th");
    vintage.innerHTML = "Vintage";
    section.appendChild(vintage);

    let wineName = document.createElement("th");
    wineName.innerHTML = "Wine";
    section.appendChild(wineName);

    let price = document.createElement("th");
    price.innerHTML = "Price";
    section.appendChild(price);
}

let createTable = (vintage, name, price) => {
    let tr = document.createElement("tr");
    menuMainDiv.appendChild(tr);

    let td1 = document.createElement("td");
    td1.innerHTML = `${vintage}`;
    tr.appendChild(td1)

    let td2 = document.createElement("td");
    td2.innerHTML = `${name}`;
    tr.appendChild(td2)

    let td3 = document.createElement("td");
    td3.innerHTML = `${price}`;
    tr.appendChild(td3)
}

let createWineMenu = (mainDiv) => {
    createMenuHeader(mainDiv);
    createTable("2017", "Rathfinny Brut Rose", "£49");
    createTable("2014", "Sauska Brut, Tokaj, Hungary", "£69");
    createTable("NV", "Veuve Clicquot", "£90");
    createTable("2020","Muscadet Sèvre et Maine Jean François Baron,  Loire, France", "£45");
    createTable("2012","Bourgogne Blanc, Domaine LeFlavie, Burgundy, France", "£187");
    createTable("2015", "L’Esprit de Chevalier Domaine De Chevalier, Bordeaux, France", "£98");
    createTable("2021", "Fritz Haag Riesling Trocken, Mosel, Germany", "£29");
    createTable("2918", "Szepsy Furmint, Tokaj, Hungary", "£63");
    createTable("2005", "Grossett Polish Hill, Clare Valley, Australia", "£158");
    createTable("2018", "Yvon Metras Beaujolais, France", "£61");
    createTable("2013", "Drouhin Laroze Gevrey Chambertin Lieux Dits, Burgundy, France", "£120");
    createTable("2017", "Weninger Blaufrankish, Burgenland, Austria", "£49");
    createTable("2014", "Dingis Plavac Mali, Croatia", "£89");
    createTable("2005", "Chateau Lynch Bages, Bordeaux, France", "£499");
    createTable("2018", "Sine Qua Non Profuga Grenache, Central Coast AVA, California", "£475");
    createTable("2006", "Abreu Capella, California, USA", "£572");
    createTable("2015", "Gizella Szamorodni, Tokaj, Hungary", "£39");
    createTable("1999", "Szepsy 6 Puttonyos Aszu, Tokaj, Hungary", "£399");

}

export {createWineMenu}