import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiHtml5, DiCss3, DiJavascript1, DiWordpress,  DiCode } from 'react-icons/di';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/styles.scss';

function HomePage() {
    // Variantes pour l'animation du texte
    const textVariants = {
        offscreen: {
            x: -100,
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
    const cardVariants = {
        offscreen: { opacity: 0 },
        onscreen: {
            opacity: 1,
            transition: { type: "spring", duration: 1 }
        }
    };

     // State pour suivre la position de défilement
     const [offsetY, setOffsetY] = useState(0);
     const handleScroll = () => setOffsetY(window.pageYOffset);
 
     useEffect(() => {
         window.addEventListener('scroll', handleScroll);
 
         return () => window.removeEventListener('scroll', handleScroll);
     }, []);

// Style pour l'effet de parallaxe
const parallaxStyle = {
    transform: `translateY(${offsetY * 100.5}px)`,
};

    return (
        <div id="content">

            <div className="parallax__layer parallax__layer--base">
                <main className="main fillHeight counter">
                    <section className="introduction salut eEjAsd parallax">
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            custom={0} // Pas de délai pour la première partie
                            variants={textVariants}
                            style={parallaxStyle}
                        >
                            <div>
                                <h1>
                                    <span className="chevron"><i className="fa fa-angle-left"></i></span>
                                    Hey! Je m'appelle
                                    <span className="chevron"><i className="fa fa-angle-right"></i></span>
                                </h1>
                            </div>
                            <div>
                                <h2 className="big-heading light">Antoine Dewas.</h2>
                            </div>
                            <div>
                                <h3 className="big-heading">
                                    Je suis developpeur web <span className='cursor'></span>
                                </h3>
                            </div>
                        </motion.div>
                        <motion.div
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.8 }}
                            custom={1} // Un délai pour le paragraphe
                            variants={textVariants}
                        >
                            <div>
                                <p>
                                    Je suis un développeur passionné par la création de sites web fonctionnels et esthétiques.
                                    Je maîtrise les langages de programmation basiques tels que <span className="spanColor">HTML</span>, <span className="spanColor2">CSS</span>, <span className="spanColor3">JavaScript</span>,
                                    ainsi que les outils et les frameworks les plus récents comme <span className="spanColor">React</span>, <span className="spanColor">Node.js</span>, <span className="spanColor">Vue.js</span>, <span className="spanColor">Boostrap</span> et d'autres pour offrir des expériences utilisateur uniques.
                                </p>
                            </div>
                            <div>
                                <a className="email-link" href="https://www.linkedin.com/in/antoine-dewas-640a191a1/">Check my Linkedin !</a>
                            </div>
                        </motion.div>
                    </section>
                    <section className="skills-section">
                        <h2 className="skills-title">
                            <span className="chevron"><i className="fa fa-angle-left"></i></span>
                            Mes Compétences
                            <span className="chevron"><i className="fa fa-angle-right"></i></span>
                        </h2>
                        <div className="skills">

                            <div className="skills-container">
                                <motion.div
                                    className="skill-card"
                                    variants={cardVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    <h3>Frontend</h3>
                                    <div className="tech-grid">
                                        <div><DiHtml5 color="#E34F26" size="3em" /><span>HTML 5</span></div>
                                        <div><DiCss3 color="#1572B6" size="3em" /><span>CSS</span></div>
                                        <div><DiJavascript1 color="#F7DF1E" size="3em" /><span>JavaScript</span></div>
                                        <div><FaReact color="#61DAFB" size="3em" /><span>React</span></div>
                                    </div>
                                </motion.div>
                               
                            </div>
                            <div className="skills-container">
                                <motion.div
                                    className="skill-card"
                                    variants={cardVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    <h3>Backend</h3>
                                    <div className="tech-grid">
                                        <div><FaNodeJs color="#539E43" size="3em" /><span>Node.js</span></div>
                                    </div>
                                </motion.div>
                              
                            </div>
                            <div className="skills-container">
                                <motion.div
                                    className="skill-card"
                                    variants={cardVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    <h3>CMS</h3>
                                    <div className="tech-grid">
                                        <div><DiWordpress color="#FFF" size="3em" /><span>WordPress</span></div>

                                    </div>
                                </motion.div>
                          
                            </div>
                            <div className="skills-container">
                                <motion.div
                                    className="skill-card"
                                    variants={cardVariants}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    <h3>UX/UI</h3>
                                    <div className="tech-grid">
                                        <div><DiCode color="#539E43" size="3em" /><span>Node.js</span></div>

                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
