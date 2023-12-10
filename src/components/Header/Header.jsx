// Importation des dépendances nécessaires depuis les bibliothèques
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./index.scss";
import { Link } from "react-scroll";

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

// Définition du composant Header
const Header = () => {
  // Déclaration d'un état pour gérer le menu mobile
  const [mobileMenu, setMobileMenu] = useState(false);

  // Utilisation de useEffect pour ajouter un gestionnaire de scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const scrollY = window.scrollY;

      // Si la position de défilement est inférieure à 70 pixels, retire la classe "onscreen" du header, sinon l'ajoute
      if (scrollY < 70) {
        header.classList.remove('onscreen');
      } else {
        header.classList.add('onscreen');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Fonction de nettoyage pour retirer le gestionnaire de scroll.
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour basculer le menu mobile
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  // Fonction pour masquer le menu mobile
  const hideMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    }
  };

  // Rendu du composant Header
  return (
    <header className="header">
      <div className="content container">
        
        {/* Menu de navigation */}
        <nav className="menu" style={{ top: mobileMenu ? "0" : "-100%" }}>
          <div className="menu__content">
            <button type="button" className="hideMenu">
              <FontAwesomeIcon icon={faClose} onClick={toggleMobileMenu} />
            </button>

            {/* Liens de navigation */}
            <Link
              to="info"
              activeClass="active"
              spy
              smooth
              offset={-150}
              isDynamic
              className="menu-link"
              onClick={hideMobileMenu}
            >
              <span>A propos</span>
              <span className="link-underline"></span>
            </Link>

            <Link
              to="projects"
              activeClass="active"
              smooth
              spy
              offset={-450}
              isDynamic
              className="menu-link"
              onClick={hideMobileMenu}
            >
              <span>Portfolio</span>
              <span className="link-underline"></span>
            </Link>
            <Link
              to="services"
              activeClass="active"
              smooth
              spy
              offset={-150}
              isDynamic
              className="menu-link"
              onClick={hideMobileMenu}
            >
              <span>Services</span>
              <span className="link-underline"></span>
            </Link>
            <Link
              to="contact-section"
              activeClass="active"
              smooth
              spy
              offset={-450}
              isDynamic
              className="menu-link"
              onClick={hideMobileMenu}
            >
              <span>Contact</span>
              <span className="link-underline"></span>
            </Link>
          </div>
        </nav>
        
        {/* Liens vers les réseaux sociaux */}
        <nav className="social">
          <a href="https://github.com/dexctor">
            <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} />
          </a>
          <a href="https://www.linkedin.com/in/antoine-dewas-640a191a1/">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} />
          </a>
          <a href="https://www.facebook.com/dewas.antoine">
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
          </a>
        </nav>
        
        {/* Bouton pour afficher le menu mobile */}
        <button type="button" className="buttonShowMenu" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};


export default Header;
