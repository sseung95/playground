import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px; // To apply 3D perspective
`;

const Wrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  button {
    padding: 40px 100px;
    background: #333333;
    font-size: 60px;
    border-radius: 100px;
    z-index: 2;
    transition: transform .3s ease-in-out;
  }
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  background-image: url('https://cdn-www.dora.run/__dora__/morpheus/static/images/ai/bg-star.png');
  background-size: cover;
  background-position: center;
  z-index: 1;
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
      duration: 50 + Math.random() * 1 // Random duration
    });
  }
  return stars;
};

const HoverEffect: React.FC = () => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  const mouseX = useMotionValue(0);
  const rotateY = useTransform(mouseX, [0, windowWidth], [-80, 80]);

  const handleMouseMove = (event: React.MouseEvent) => {
    mouseX.set(event.clientX);
  };

  useEffect(() => {
    setStars(generateStars(30)); // Generate 30 stars
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  return (
    <Container>
      <Wrapper
        className="wrapper"
        style={{ rotateY: isHovered ? rotateY : 0 }}
      >
        {isHovered && stars.map((star) => (
          <Star
            key={star.id}
            style={{ left: `${star.x}%`, top: `${star.y}%` }}
            animate={isHovered ? { y: -1000, opacity: 1 } : { y: star.y, opacity: 0 }}
            initial={{ opacity: 0.2 }}
            transition={{
              repeat: Infinity,
              duration: star.duration,
              ease: 'linear'
            }}
          />
        ))}
        <button style={{ color: '#fff', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>Hover me!</button>
      </Wrapper>
    </Container>
  );
};

export default HoverEffect;
