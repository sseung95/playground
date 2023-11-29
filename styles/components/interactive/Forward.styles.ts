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

export const Wall = styled.div<{ position?: string; order?: number }>`
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ position }) => (position ? '400vw' : '100vw')};
  height: 100vh;

  background: #fff;
  border: 1px solid blue;
  opacity: ${({ position }) => (position ? 1 : 0.7)};

  font-size: 15rem;

  transform: ${({ position, order }) =>
    `rotateY(${
      position === 'left' || position === 'right' ? 90 : 0
    }deg) translateZ(${
      position === 'left'
        ? -200
        : position === 'right'
        ? -100
        : order
        ? `${order * 100 - 200}`
        : 0
    }vw)`};
`;
