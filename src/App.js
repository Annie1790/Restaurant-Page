import { useState } from 'react';

//SASS
import './App.scss';

//Components
import HomePageIntro from './HomePageIntro';
import Card from './Card';
import Navbar from './Navbar';
import Footer from './Footer';
import Menu from './Menu';
import Contact from './contact';

//Assets
import venue from "./assets/venue.jpg";
import wine from "./assets/wine.jpg";
import charcuterie from "./assets/charcuterie.jpg"

const App = () => {
  let content;

  const [whichPage, setWhichPage] = useState("home");

  if (whichPage === "home") {
    content = <>
      <HomePageIntro></HomePageIntro>
      <Card className="frame-left" src={venue} header="The Bar" paragraph="Upon entering, you'll be greeted by the warm glow of dimmed lights and the welcoming aroma of a wood-burning fireplace. The interior is adorned with rustic wood paneling and tasteful art, creating an ambiance that's both elegant and relaxed."></Card>
      <Card className="frame-right" src={wine} header="Selection" paragraph="The extensive wine list features a carefully curated selection of wines from around the world, with a particular emphasis on small-batch, artisanal producers. The knowledgeable staff are always on hand to guide you through the menu, offering recommendations and insights on each wine's unique qualities."></Card>
      <Card className="frame-left" src={charcuterie} header="The Food" paragraph="In addition to the wine, La Vigna also offers a selection of light bites and small plates, designed to complement the wine and enhance your overall experience. You might try the artisanal charcuterie board, featuring a variety of cured meats and cheeses, or the roasted beet salad with goat cheese and pistachios."></Card>
    </>
  } else if (whichPage === "menu") {
    content = <Menu></Menu>
  } else if (whichPage === "contact") {
    content = <Contact></Contact>
  }


  let contactEvent = () => {
    setWhichPage("contact")
  }

  let menuEvent = () => {
    setWhichPage("menu")
  }

  let homeEvent = () => {
    setWhichPage("home")
  }

  return (
    <>
      <Navbar contactButton={contactEvent} homeButton={homeEvent} menuButton={menuEvent}></Navbar>
      {content}
      <Footer></Footer>
    </>
  )

}

export default App;