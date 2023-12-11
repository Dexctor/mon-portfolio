import bookiImage from './assets/booki.webp';
import sophieBluelImage from './assets/sophie-bluel.webp';
import ninaCarducciImage from './assets/nina.webp';
import kasaImage from './assets/kasa.webp';
import grimoireImage from './assets/grimoire.webp';
import leclosImage from './assets/leclos.webp';

const projects = [
    {
        categories: ['Projet Formation'],
        technology: 'HTML / CSS',
        title: 'Booki',
        image: bookiImage,
        link: 'https://github.com/Dexctor/Booki_OP',
        description:'Crée un site grace à une maquette qui permet aux usagers de trouver des hébergements et des activités dans une ville choisie.',
        problematique: "Pas de soucis majeurs dans ce projet. Il faut suivre les cours sur flex-box"
    },
    {
        categories: ['Projet Formation'],
        technology: 'HTML / CSS / JavaScript',
        title: 'Sophie Bluel ',
        image: sophieBluelImage,
        link: 'https://github.com/Dexctor/Portfolio-architecte-sophie-bluel',
        description: 'Rendre un site statique, dynamique grace à Javascript, Ajout de filtres pour les travaux, crée la page de connexion, créée une authentification utilisateur, ajouter, supprimer, modifier des travaux.',
        problematique: "J'ai rencontré plusieurs problèmes avec Visual Studio Code et le serveur Node.js, ce qui provoquait un problème de rafraîchissement lors de l'ajout d'un travail. Heureusement, j'ai pu résoudre cette erreur grâce à des recherches approfondies et en partageant mes problèmes avec d'autres étudiants.."
    },

    {
        categories: ['Projet Formation'],
        technology: 'HTML / CSS / JavaScript',
        title: 'Nina Carducci',
        image: ninaCarducciImage,
        link: 'https://github.com/Dexctor/Nina-Carducci-P5',
        description: 'Améliorer un site photographe en optimisant les images, en utilisant les bonnes pratique du web et du SEO pour un meilleur référencement.',
        problematique: "Ce projet ne m'a pas posé de problèmes majeurs. Il a simplement fallu suivre les cours sur l'optimisation et améliorer le code en respectant les bonnes pratiques du web, en le rendant plus sémantique."
    },
    {
        categories: ['Projet Formation'],
        technology: 'React',
        title: 'Kasa',
        image: kasaImage,
        link: 'https://github.com/Dexctor/P6',
        description:"Création du premier projet React et NodeJS, maquette figma avec des défis en design et fonctionnalités.",
        problematique:"Pas de soucis majeurs dans ce projet. Il faut apprendre les fondamentaux de React."
    },
    {
        categories: ['Projet Formation'],
        technology: 'Express.js',
        title: 'Mon Vieux Grimoir',
        image: grimoireImage,
        link: 'https://github.com/Dexctor/P7-web-livres',
        description: "Premier projet en Backend avec Express.js. Création d'une application CRUD : CREATE, READ, UPDATE, DELETE d'un site de notation de livres.",
        problematique:"J'ai rencontré des difficultés pour comprendre le fonctionnement du backend et des contrôleurs. Heureusement, suivre les cours m'a beaucoup aidé, tout comme la mise en pratique avec des exemples concrets sous la guidance de mon mentor."
    },
    {
        categories: ['Projet Alternance '],
        technology: 'Wordpress / Elementor',
        title: 'Le Clos Des Mauves',
        image: leclosImage,
        link: 'https://www.leclosdesmauves.com/',
        description:" Projet d'alternance, création d'un site de réservation pour 4 gîtes en Ardèche avec l'aide du CMS wordpress et Elémentor Pro",
        problematique:"J'ai fait face à divers défis lors de la réalisation de ce projet. Étant relativement peu familier avec WordPress, j'ai dû acquérir des compétences dans son utilisation, ainsi que dans l'utilisation d'Elementor Pro. Cependant, grâce à plusieurs tutoriels et à mon sens du débrouillardise, j'ai réussi à concevoir ce site tout en suivant ma formation."
    },
    

];

export default projects;