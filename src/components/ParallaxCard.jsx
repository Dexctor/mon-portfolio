import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/ParallaxCard.scss';

function ParallaxCard({ title, description, imageUrl }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 1, tension: 500, friction: 50 },
  }));

  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: [(y - window.innerHeight / 1) / 100, -(x - window.innerWidth / 2) / 500, 1] })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate((x, y, s) => `perspective(350px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`)
      }}
    >
      <div className="card-content">
        <div className='card-picture'>
          <img src={imageUrl} alt='travaux'></img>
        </div>
        <div className='details_card'>
            <h2>{title}</h2>
            <p>{description}</p>
            </div>
      </div>
    </animated.div>
  );
}

export default ParallaxCard;
