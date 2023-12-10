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

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const scrollY = window.scrollY;

      if (scrollY < 70) {
        header.classList.remove('onscreen');
      } else {
        header.classList.add('onscreen');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean-up function
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const hideMobileMenu = () => {
    if (mobileMenu) {
      setMobileMenu(false);
    }
  };

  return (<header className="header">
    <div className="content container">

      <nav className="menu" style={{ top: mobileMenu ? "0" : "-100%" }}>
        <div className="menu__content">
          <button type="button" className="hideMenu">
            <FontAwesomeIcon icon={faClose} onClick={toggleMobileMenu} />
          </button>

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
            offset={-150}
            isDynamic
            className="menu-link"
            onClick={hideMobileMenu}
          >
            <span>Contact</span>
            <span className="link-underline"></span>
          </Link>
        </div>
      </nav>
      <nav className="social">
        <a href="https://github.com/dexctor">
          <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} />
        </a>
        <a href="https://www.linkedin.com/in/antoine-dewas-640a191a1/" >
          <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} />
        </a>
        <a href="https://www.facebook.com/dewas.antoine">
          <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
        </a>
      </nav>
      <button type="button" className="buttonShowMenu" onClick={toggleMobileMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  </header>)
};

export default Header;