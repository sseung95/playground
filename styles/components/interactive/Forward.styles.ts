import styled from '@emotion/styled';

export const ForwardContainer = styled.div`
  width: 1200px;
  height: 600px;
  background: beige;
  perspective: 1000px;
`;

export const Stage = styled.div`
  width: 1200px;
  height: 600px;
  transform-style: preserve-3d;
`;

export const House = styled.div`
  position: relative;
  width: 1200px;
  height: 600px;
  transform-style: preserve-3d;
  transform: translateZ(-4800px);
`;

export const Wall = styled.div<{ position?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: ${({ position }) => (position ? '3000px' : '1200px')};
  height: 600px;
  background: #fff;
  /* border: 1px solid blue; */

  transform: ${({ position }) =>
    position === 'left' || position === 'right'
      ? `rotateY(90deg) translateZ(-1500px)`
      : 'none'};

  transform: ${({ position }) =>
    `rotateY(${
      position === 'left' || position === 'right' ? 90 : 0
    }deg) translateZ(${
      position === 'left' ? -1500 : position === 'right' ? -300 : 0
    }px)`};
`;
