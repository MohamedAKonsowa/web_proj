// TopSection.js
import React from "react";
import './Nav.css'
import titleImage from "./WebLogo.png";
export default function TopSection({ toggleSections, toggleHomeSearchSections, toggleCartSection ,toggleContactSection}) {
    const handleSearchButtonClick = ()=> {
        toggleSections(true); // Show both search and product sections
    };

    const handleHomeButtonClick = () => {
        toggleHomeSearchSections(true); // Hide both search and product sections
    };
    const handleCartButtonClick = () => {
        toggleCartSection(true); // Hide both search and product sections
    };
    const handleContactusButtonClick = () => {
        toggleContactSection(true);
    };

    return (
        <>
    <nav>
    <div className={"nav-container"}>
        <div className={"nav-display-flex justify-content align-center" }>
            <div className={"nav-display-flex align-center"}>
                <a href={"#.com"} onClick={handleHomeButtonClick}>
                <img src={titleImage} alt="Placeholder Logo"/>
                </a>

            </div>
            <ul className={"nav-display-flex align-center justify-content"}>
                <li><a href={"#.com"} onClick={handleSearchButtonClick}>Search</a></li>
                <li><a href={"#.com"} onClick={handleCartButtonClick}>Cart</a></li>
                <li><a href={"#.com"} onClick={handleContactusButtonClick}>Contact us</a></li>
            </ul>
        </div>
    </div>
    </nav>


        </>
    );
}
