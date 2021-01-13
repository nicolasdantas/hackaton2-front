import React from 'react';
import '../style/Footer.scss'

const Footer = () => {
    return(
        <div className="container-footer">
            <div className="social">
                <h2>Réseaux sociaux</h2>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
            <div className="">
                <h2>Nom de l'entreprise</h2>
                <p>A propos</p>
                <p>Contact</p>
                <p>Mentions légales</p>
            </div>
            <div className="languages">
                <h2>Langues</h2>
                <p>Francais</p>
                <p>Anglais</p>
            </div>
        </div>
    )
}

export default Footer;