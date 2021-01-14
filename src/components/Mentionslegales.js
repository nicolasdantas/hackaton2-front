import React from 'react';
import '../style/Mentionslegales.scss'

const MentionLegale = () => {
  return (
    <div className="page-mentions-légales">
      <div className="container-mentions-legales">
        <div className="h1-hr">
          <h1 className="titre-mentions-legales">Mentions légales</h1>
          <p>_______</p>
        </div>
        <h3 className="catégories-mentions-légales">Données personnelles</h3>
        <p className="paragraphes-mentions-légales">Aucune donnée personnelle n'est recueillie sur ce site.</p>
        <h3>Droits d'auteur- Copyright</h3>
        <p>
          Les éléments figurant sur ce site relèvent de la législation française
          et internationale et sont protégés par le droit de la propriété
          intellectuelle. Aucune représentation ou reproduction intégrale ou
          partielle ou aucune utilisation ne peut être faite sans avoir obtenu
          l'accord préalable de leurs propriétaires respectifs.
        </p>
        <h3>Liens hypertextes</h3>
        <p>
          Les liens hypertextes proposés sur ce site en direction d'autres
          ressources existantes sur internet n'engagent pas la responsabilité du
          ou des propriétaires de ce site. Pour toute insertion de lien vers ce
          site ou échange de lien, nous contacter par courrier à l'adresse
          ci-dessus.
        </p>      
      </div>
    </div>
  );
};

export default MentionLegale;