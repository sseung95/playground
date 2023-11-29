import styled from '@emotion/styled';

export const ForwardContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: beige;
  perspective: 1000px;
`;

export const Stage = styled.div`
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
`;

export const House = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  transform: translateZ(-500vw);
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
