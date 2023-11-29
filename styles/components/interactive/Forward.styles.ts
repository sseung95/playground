import { color } from '@/styles/color';
import styled from '@emotion/styled';

export const ScrollBar = styled.div<{ percentage: number }>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 5px;
  background: ${color.gray.gray30};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ percentage }) => `${percentage}%`};
    height: 100%;
    background: ${color.primary};
  }
`;

export const Body = styled.div`
  height: 500vh;
`;

export const ForwardContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: beige;
  perspective: 1000px;
`;

export const Stage = styled.div<{ position: { x: number; y: number } }>`
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  transform: ${({ position: { x, y } }) => `rotateX(${y}deg) rotateY(${x}deg)`};
`;

export const House = styled.div<{ zMove: number }>`
  position: relative;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  transform: ${({ zMove }) => `translateZ(${zMove}vw)`};
`;

export const Wall = styled.div<{ position?: string; zMove?: number }>`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ position }) => (position ? '1000vw' : '100vw')};
  height: 100vh;

  background: ${({ position }) => (position ? '#f8f8f8' : '#fff')};
  opacity: ${({ position }) => (position ? 1 : 0.7)};

  font-size: 15rem;

  transform: ${({ position, zMove }) =>
    `rotateY(${
      position === 'left' || position === 'right' ? 90 : 0
    }deg) translateZ(${
      position === 'left'
        ? -500
        : position === 'right'
        ? -400
        : zMove
        ? `${zMove}`
        : 0
    }vw)`};
`;
