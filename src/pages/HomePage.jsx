// Importation des dépendances nécessaires
import { motion } from 'framer-motion';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';
import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "../particules.js";



// Composant Home
const Home = () => {


    const particlesInit = useCallback(main => {
        loadFull(main);
    }, []);
    // Variantes pour l'animation du texte
    const textVariants = {
        offscreen: {
            x: 50,
            opacity: 0
        },
        onscreen: (delay) => ({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
                delay: delay
            }
        })
    };

    return (<div className="home">
        
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            custom={0}
            variants={textVariants}
        >
            <div className="content container">
            <Particles options={particlesOptions} init={particlesInit} />
                <span className="secondary-text">Hello World <span className='enderscore'>__</span></span>
                <h1 className="title">Je suis Antoine Dewas,</h1>
                <h2 className="title">
                    <span className='web'>Developpeur Frontend </span>    </h2>
                <h2 className="title">  <span className='web2'>À la conquête du web.</span></h2>

                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    custom={1} // Un délai pour le paragraphe
                    variants={textVariants}
                >
                    <div className='container-link'>
                        <a className="email-link" href="https://www.linkedin.com/in/antoine-dewas-640a191a1/">Voir mon Linkedin </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </div>)
};

export default Home;