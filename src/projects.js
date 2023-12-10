import bookiImage from './assets/booki.png';
import sophieBluelImage from './assets/sophie-bluel.png';
import ninaCarducciImage from './assets/nina.png';
import kasaImage from './assets/kasa.png';
import grimoireImage from './assets/grimoire.png';
import leclosImage from './assets/leclos.png';

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
        problematique: "Plusieurs soucis rencontraient avec visual code et le serveur Node js qui causait un souci de rafraichissement lors de l'ajout d'un travail. La recherche et le partage entre étudiants m’ont permis de trouver l'erreur."
    },

    {
        categories: ['Projet Formation'],
        technology: 'HTML / CSS / JavaScript',
        title: 'Nina Carducci',
        image: ninaCarducciImage,
        link: 'https://github.com/Dexctor/Nina-Carducci-P5',
        description: 'Améliorer un site photographe en optimisant les images, en utilisant les bonnes pratique du web et du SEO pour un meilleur référencement.',
        problematique: "Pas de soucis majeurs dans ce projet, il suffit de suivre les cours sur l'optimisation et améliorer le code de manière sémantique avec les bonnes pratique du web"
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
        problematique:"Des soucis rencontraient pour la compréhension du backend et des contrôlé. Suivre les cours m'a aidé, ainsi que des exemples concrets avec mon mentor"
    },
    {
        categories: ['Projet Alternance '],
        technology: 'Wordpress / Elementor',
        title: 'Le Clos Des Mauves',
        image: leclosImage,
        link: 'https://www.leclosdesmauves.com/',
        description:" Projet d'alternance, création d'un site de réservation pour 4 gîtes en Ardèche avec l'aide du CMS wordpress et Elémentor Pro",
        problematique:"Pas mal de soucis rencontrer pour ce projet. ne connaissant pas vraiment Wordpress j'ai du le prendre en main ainsi que Elémentor Pro. Plusieur tutoriel ainsi que du bon sens m'on permis de réaliser ce site pendant ma formation"
    },
    

];

export default projects;