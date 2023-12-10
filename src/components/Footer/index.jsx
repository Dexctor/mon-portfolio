import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss'

const Footer = () => {
    return (
    <footer className="footer">
        <div className="container">
            <nav className="social">
                <a href="https://github.com/dexctor" >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/antoine-dewas-640a191a1/" >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.facebook.com/dewas.antoine" >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
          </nav>
          <span className="rights">&copy; All rights reserved 2023.</span>
        </div>
    </footer>)
};

export default Footer;