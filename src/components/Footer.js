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
                    <a href='https://www.facebook.com/ApsideGroupe'>
                    <p>Facebook</p>
                    </a>
                    <a href='https://www.instagram.com/p/B9ZgkDgFJGQ/'>
                    <p>Instagram</p>
                    </a>
                    <a href='https://twitter.com/apsidegroupe?lang=fr'>
                    <p>Twitter</p>
                    </a>
                </div>
                <div className="a-propos">
                    <h2>Nom de l'entreprise</h2>
                    <a href='/team'>
                        <p>A propos</p>
                    </a>
                    <a href='/contact'>
                        <p>Contact</p>
                    </a>
                    <a href='/mentionslegales'>
                        <p>Mentions légales</p>
                    </a>
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