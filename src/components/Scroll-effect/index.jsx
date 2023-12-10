import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Définition du composant Scroll
const ScrollAnimatedComponent = ({ children }) => {
  // Référence pour l'élément à observer
  const ref = useRef();
  
  // Contrôles d'animation de Framer Motion
  const controls = useAnimation();
  
  // État pour déterminer si l'élément est dans la vue
  const [isInView, setIsInView] = useState(false);

  // Variants pour les animations
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Utilisation de l'effet useEffect pour observer l'élément lorsque le composant est monté
  useEffect(() => {
    // Création d'un observateur d'intersection
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Ajustez ce seuil en fonction de vos besoins
    );
  
    // Stockez la référence actuelle dans une variable
    const currentRef = ref.current;
  
    // Si l'élément actuel existe, observez-le
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    // Fonction de nettoyage pour cesser d'observer l'élément lorsque le composant est démonté
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Utilisation d'un effet pour démarrer l'animation lorsque l'élément est dans la vue
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  // Rendu du composant avec animation Framer Motion
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimatedComponent;
