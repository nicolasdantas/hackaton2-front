import React from 'react';
import { useLocation } from "react-router-dom";
import '../style/Footer.scss';

const Footer = () => {
    const location = useLocation();
    return(
        location.pathname !== "/" &&
        <footer>
            <div className="container-footer">
                <div>
                    <h3>Nom du site</h3>
                    <p className="logo">Logo</p>
                </div>
                <div className="social">
                    <h3>Réseaux sociaux</h3>
                    <a target="_blank" rel="noreferrer" href='https://www.facebook.com/ApsideGroupe'>
                    <p>Facebook</p>
                    </a>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/p/B9ZgkDgFJGQ/'>
                    <p>Instagram</p>
                    </a>
                    <a target="_blank" rel="noreferrer" href='https://twitter.com/apsidegroupe?lang=fr'>
                    <p>Twitter</p>
                    </a>
                </div>
                <div className="a-propos">
                    <h3>Nom du site</h3>
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
                    <h3>Langues</h3>
                    <p>Francais</p>
                    <p>Anglais</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;