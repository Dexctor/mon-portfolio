import { motion } from 'framer-motion';
import '../styles/styles.scss';

function Header() {
    // Variantes pour l'animation des éléments de menu
    const listItemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    };

    // Variantes pour l'animation du bouton
    const buttonVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1 }
    };

    return (
        <header>
            <div className="navbar">
                <div className="logo"></div>
                <div className="nav-links">
                    {/* Animation sur chaque élément li */}
                    {["À propos", "Expérience", "Réalisations", "Contact"].map((link, index) => (
                        <motion.li 
                            key={link}
                            data-tooltip={link}
                            variants={listItemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: index * 0.1 }}
                        >
                            {link}
                        </motion.li>
                    ))}
                    <div className="button">
                        {/* Animation sur le bouton */}
                        <motion.button 
                            id="resume"
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.4 }}
                        >
                            Resume
                        </motion.button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
