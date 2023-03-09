import brand_logo from "./assets/brand_logo.svg";

const Navbar = ({ contactButton, homeButton, menuButton }) => {
    return (
        <nav>
            <div>
                <button onClick={contactButton}>Contact</button>
                <div onClick={homeButton}>
                    <img src={brand_logo} alt="brand logo" />
                </div>
                <button onClick={menuButton}>Menu</button>
            </div>
            <div>
                <h1>Annie's Winebar</h1>
            </div>
        </nav>
    )
};

export default Navbar;