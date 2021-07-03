import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import { Button } from './Button';
import "./NavBar.css";



function NavBar() {
    const [click,setClick] = useState(false); 
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960 ){
            setButton(false);
        }else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener("resize",showButton)
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                   Mon site <i className="fab fa-typo3" />
                </Link>
            <div className="menu-icon" onClick={handleClick}>
                {/* 
                - fas fa-times; fas fa-bars vient de font awesome. Je l'ai intégré grâc eà son CDN"
                - La balise i permet d'ajouter une logo ou un autre type de contenu  dans du texte
                  */}
                <i className= {click ? "fas fa-times":"fas fa-bars"} />
            </div>

    {/* 
    Fonctionnement d'un menu responsive :
        - nav-menu active et nav-menu permettrent d'affiche et de desafficher le menu sur un ecran mobile lorsqu'on click sur le l'icone du menu
        - Au niveau du css, lorsque l'ecran est < 960px alors on change l'arrangement du menu
    */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    {/*
                     - Le composant Link est equivalent à une balise <a> sans rechargement de page
                    */}
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Accueil
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                        Produits
                    </Link>
                </li>
                 

            </ul>
            {button && <Button>S'inscrire</Button>}
        </div>

        </nav>
    )
}

export default NavBar
