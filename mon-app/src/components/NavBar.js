import React,{useState} from 'react';
import {Link} from "react-router-dom";
import { Button } from './Button';
import "./NavBar.css";



function NavBar() {
    const [click,setClick] = useState(false); 
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                   Mon site <i className="fab fa-typo3" />
                </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className= {click ? "fas fa-times":"fas fa-bars"} />
            </div>

            <ul className="nav_item">
                <li>
                    <Link to="/" className="nav_link">
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/Services" className="nav_link">
                        Services
                    </Link>
                </li>
                <li>
                    <Link to="/Product" className="nav_link">
                        Produits
                    </Link>
                </li>
                 <li>
                    <Link to="/SignUp" className="nav_link">
                        S'incrire
                    </Link>
                </li>

            </ul>
            {button && <Button>SIGN UP</Button>}
        </div>

        </nav>
    )
}

export default NavBar
