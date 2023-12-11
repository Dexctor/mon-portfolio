import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'

const Footer = () => {
    return (
    <footer className="footer">
        <div className="container">
        <nav className="social">
          <a href="https://github.com/dexctor" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} />
          </a>
          <a href="https://www.linkedin.com/in/antoine-dewas-640a191a1/" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} />
          </a>
          <a href="https://www.facebook.com/dewas.antoine" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'white' }} />
          </a>
        </nav>
          <span className="rights">&copy; All rights reserved 2023.</span>
        </div>
    </footer>)
};

export default Footer;