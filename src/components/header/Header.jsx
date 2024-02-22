import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add ("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Hi Visitor!</a>

            <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_items">
                        <a href="#home" onClick={() => {
                            setActiveNav('#home');
                            showMenu(false);
                        }} 
                           className={activeNav === "#home" ? "nav_links active-link" : 
                                      "nav_links"}>
                            <i className="uil uil-estate nav_icons"></i> Home
                        </a>
                    </li>

                    <li className="nav_items">
                        <a href="#about" onClick={() => {
                            setActiveNav('#about');
                            showMenu(false);
                        }} 
                           className={activeNav === "#about" ? "nav_links active-link" : 
                                      "nav_links"}>
                            <i className="uil uil-user nav_icons"></i> About
                        </a>
                    </li>

                    <li className="nav_items">
                        <a href="#skills" onClick={() => {
                            setActiveNav('#skills');
                            showMenu(false);
                        }} 
                           className={activeNav === "#skills" ? "nav_links active-link" : 
                                      "nav_links"}>
                            <i className="uil uil-arrow nav_icons"></i> Skills
                        </a>
                    </li>

        

                    <li className="nav_items">
                        <a href="#portfolio" onClick={() => {
                            setActiveNav('#portfolio');
                            showMenu(false);
                        }} 
                           className={activeNav === "#portfolio" ? "nav_links active-link" : 
                                      "nav_links"}>
                            <i className="uil uil-bookmark nav_icons"></i> Projects
                        </a>
                    </li>

                    {/* <li className="nav_items">
                        <a href="#contact" onClick={() => {
                            setActiveNav('#contact');
                            showMenu(false);
                        }} 
                           className={activeNav === "#contact" ? "nav_links active-link" : 
                                      "nav_links"}>
                            <i className="uil uil-message nav_icons"></i> Contact
                        </a>
                    </li>                  */}
                </ul>

                <i class="uil uil-times nav_close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  );
};

export default Header;
