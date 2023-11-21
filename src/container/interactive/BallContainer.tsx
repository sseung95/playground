import { MouseEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { BoxSC } from '@/styles/components/common';
import { color } from '@/styles/color';

const BALL_SIZE = 30;

const BallContainer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isStart, setIsStart] = useState(false);
  const ballRef = useRef(null);

  const handleClickStage = (e: MouseEvent<HTMLElement>) => {
    if (!ballRef.current) return;

    setIsStart(true);

    const ballEl = ballRef.current as HTMLElement;

    const x = e.clientX - ballEl.offsetLeft - BALL_SIZE / 2;
    const y = e.clientY - ballEl.offsetTop - BALL_SIZE / 2;

    setPosition({ x, y });
  };

  return (
    <BoxSC.Box>
      <BoxSC.BoxTitle>클릭해서 공을 움직여 보세요!</BoxSC.BoxTitle>
      <BoxSC.BoxBody>
        <Stage onClick={handleClickStage}>
          <Ball
            ref={ballRef}
            size={BALL_SIZE}
            x={position.x}
            y={position.y}
            isStart={isStart}
          />
        </Stage>
      </BoxSC.BoxBody>
    </BoxSC.Box>
  );
};

export default BallContainer;

const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 30vw;
  background-color: ${color.gray.gray50};
  border-radius: 20px;
  cursor: pointer;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Ball = styled.div<{
  size: number;
  x: number;
  y: number;
  isStart: boolean;
}>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  background: ${color.primary};
  border-radius: 50%;
  transition: 0.5s;
  transform: ${({ x, y }) => `translate3d(${x}px, ${y}px, 0)`};
  animation: ${({ isStart }) =>
    !isStart &&
    css`
      ${bounce} 1s ease infinite
    `};
`;
