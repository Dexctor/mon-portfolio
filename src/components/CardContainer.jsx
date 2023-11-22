import React from 'react';
import ParallaxCard from './ParallaxCard'; // Importez le bon composant
import '../styles/ParallaxCard.scss'; 
import '../styles/cardContainer.scss';
import bookieImage from '../assets/images/booki.webp';

const CardsContainer = () => {
  const cardsData = [
    { title: "Bookie", description: "HTML & CSS", imageUrl:bookieImage },
    { title: "Card 2", description: "Description for card 2", imageUrl: "path_to_image2.jpg" },
    { title: "Card 3", description: "Description for card 3", imageUrl: "path_to_image3.jpg" },
   
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <ParallaxCard
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
