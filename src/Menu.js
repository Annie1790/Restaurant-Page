const wineList = [
    {
        name: "Rathfinny Brut Rose",
        vintage: "2017",
        price: "£49"
    },
    {
        name: "Sauska Brut, Tokaj, Hungary",
        vintage: "2014",
        price: "£69"
    },
    {
        name: "Veuve Clicquot",
        vintage: "NV",
        price: "£90"
    },
    {
        name: "Muscadet Sèvre et Maine Jean François Baron,  Loire, France",
        vintage: "2020",
        price: "£45"
    },
    {
        name: "Bourgogne Blanc, Domaine LeFlavie, Burgundy, France",
        vintage: "2012",
        price: "£187"
    },
    {
        name: "L’Esprit de Chevalier Domaine De Chevalier, Bordeaux, France",
        vintage: "2015",
        price: "£98"
    },
    {
        name: "Fritz Haag Riesling Trocken, Mosel, Germany",
        vintage: "2021",
        price: "£29"
    },
    {
        name: "Szepsy Furmint, Tokaj, Hungary",
        vintage: "2018",
        price: "£63"
    },
    {
        name: "Grossett Polish Hill, Clare Valley, Australia",
        vintage: "2005",
        price: "£158"
    },
    {
        name: "Yvon Metras Beaujolais, France",
        vintage: "2018",
        price: "£61"
    },
    {
        name: "Drouhin Laroze Gevrey Chambertin Lieux Dits, Burgundy, France",
        vintage: "2013",
        price: "£120"
    },
    {
        name: "Weninger Blaufrankish, Burgenland, Austria",
        vintage: "2017",
        price: "£49"
    },
    {
        name: "Dingis Plavac Mali, Croatia",
        vintage: "2014",
        price: "£89"
    },
    {
        name: "Chateau Lynch Bages, Bordeaux, France",
        vintage: "2005",
        price: "£499"
    },
    {
        name: "Sine Qua Non Profuga Grenache, Central Coast AVA, California",
        vintage: "2018",
        price: "£475"
    },
    {
        name: "Abreu Capella, California, USA",
        vintage: "2006",
        price: "£572"
    },
    {
        name: "Gizella Szamorodni, Tokaj, Hungary",
        vintage: "2015",
        price: "£39"
    },
    {
        name: "Szepsy 6 Puttonyos Aszu, Tokaj, Hungary",
        vintage: "1999",
        price: "£399"
    }
];

const MenuHeader = () => {
    return (
        <tr>
                <th>Vintage</th>
                <th>Wine</th>
                <th>Price</th>
            </tr>
    )
}

const Menu = () => {
    let wineListContent = wineList.map((element) => {
        return (<tr key={element.name}>
            <td>{element.vintage}</td>
            <td>{element.name}</td>
            <td>{element.price}</td>
        </tr>)
    });

    return (
        <table className="table">
            <MenuHeader></MenuHeader>
            {wineListContent}
        </table>
    )
};

export default Menu;