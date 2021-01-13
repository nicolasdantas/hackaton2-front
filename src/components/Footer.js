import React from 'react';
import '../style/Footer.scss';
import {
    BrowserRouter as 
    Link
  } from "react-router-dom";

const Footer = () => {
    return(
        <div>
            <div className="container-footer">
                <div>
                    <h2>Nom de l'entreprise</h2>
                    <p>Logo</p>
                </div>
                <div className="social">
                    <h2>Réseaux sociaux</h2>
                    <Link to='https://www.facebook.com/ApsideGroupe'>
                    <p>Facebook</p>
                    </Link>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
                <div className="a-propos">
                    <h2>Nom de l'entreprise</h2>
                    <Link to='/team'>
                        <p>A propos</p>
                    </Link>
                    <Link to='/contact'>
                        <p>Contact</p>
                    </Link>
                    <Link to='/mentionslegales'>
                        <p>Mentions légales</p>
                    </Link>
                </div>
                <div className="languages">
                    <h2>Langues</h2>
                    <p>Francais</p>
                    <p>Anglais</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;