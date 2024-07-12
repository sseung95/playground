import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url('https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png');
  background-size: cover;
  background-position: center;
`;

interface StarProps {
  id: number;
  x: number;
  y: number;
  duration: number;
}

const generateStars = (numStars: number): StarProps[] => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push({
      id: i,
      x: Math.random() * 100, // Random position in percentage
      y: Math.random() * 100, // Random position in percentage
      duration: 5 + Math.random() * 15 // Random duration between 5 and 20 seconds
    });
  }
  return stars;
};

const HoverEffect: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    setStars(generateStars(20)); // Generate 20 stars
  }, []);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && stars.map((star) => (
        <Star
          key={star.id}
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          animate={isHovered ? { y: -2000, opacity: 1 } : { y: star.y, opacity: 0 }}
          initial={{ opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            ease: 'linear'
          }}
        />
      ))}
      <p style={{ color: '#fff' }}>Hover me!</p>
    </Container>
  );
};

export default HoverEffect;


// 

