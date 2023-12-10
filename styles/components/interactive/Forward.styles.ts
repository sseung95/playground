import { color } from '@/styles/color';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { armAnimation, headAnimation, legAnimation } from '@/styles/animation';

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

const setCharactorDirection = (direction: string) => {
  switch (direction) {
    case 'left':
      return 'rotateY(-90deg)';
    case 'right':
      return 'rotateY(90deg)';
    case 'backward':
      return 'rotateY(180deg)';
    default:
      return 'rotateY(0deg)';
  }
};

export const Charactor = styled.div<{ direction: string }>`
  position: absolute;
  left: 20%;
  bottom: 3%;

  width: 10vw;
  height: 15.58vw;

  transform-style: preserve-3d;
  transform: ${({ direction }) => `${setCharactorDirection(direction)}`};
`;

// 캐릭터의 몸 요소 공통 스타일
const CharctorBodyPart = styled.div`
  position: absolute;
  /* 앞, 뒷면을 감싸고 있는 컨테이너에도 preserve-3d 를 주어야 backface-visibility 효과가 제대로 먹힌다! */
  transform-style: preserve-3d;

  img {
    position: absolute;
    left: 0;
    top: 0;
    backface-visibility: hidden;

    &.back {
      transform: rotateY(180deg);
    }
  }
`;

export const CharactorHead = styled(CharctorBodyPart)`
  left: calc(43 / 856 * 100%);
  top: 0;
  width: calc(770 / 856 * 100%);
  height: calc(648 / 1334 * 100%);

  /* 요소의 변환 기준점을 변경 */
  transform-origin: bottom center;
  animation: ${headAnimation} 1s infinite alternate linear;
`;

export const CharactorBody = styled(CharctorBodyPart)`
  left: calc(208 / 856 * 100%);
  top: calc(647 / 1334 * 100%);
  width: calc(428 / 856 * 100%);
  height: calc(385 / 1334 * 100%);
`;

export const CharactorArm = styled(CharctorBodyPart)<{
  direction: string;
  running?: boolean;
}>`
  left: calc(600 / 856 * 100%);
  top: calc(648 / 1334 * 100%);
  width: calc(244 / 856 * 100%);
  height: calc(307 / 1334 * 100%);

  /* 요소의 변환 기준점을 변경 */
  transform-origin: left top;

  ${({ running }) =>
    running &&
    css`
      animation: ${armAnimation} 0.2s infinite alternate linear;
    `}

  ${({ direction }) =>
    direction === 'right' &&
    `
      left: 0;
      top: calc(648 / 1334 * 100%);
      width: calc(244 / 856 * 100%);
      height: calc(307 / 1334 * 100%);
      transform-origin: right top;
  `};
`;

export const CharactorLeg = styled(CharctorBodyPart)<{
  direction: string;
  running?: boolean;
}>`
  left: calc(414 / 856 * 100%);
  top: calc(1031 / 1334 * 100%);
  width: calc(230 / 856 * 100%);
  height: calc(300 / 1334 * 100%);

  /* 요소의 변환 기준점을 변경 */
  transform-origin: top;

  ${({ running }) =>
    running &&
    css`
      animation: ${legAnimation} 0.2s infinite alternate linear;
    `}

  ${({ direction }) =>
    direction === 'right' &&
    `
      left: calc(200 / 856 * 100%);
      top: calc(1031 / 1334 * 100%);
      width: calc(230 / 856 * 100%);
      height: calc(300 / 1334 * 100%);
      animation-direction: alternate-reverse;
  `}
`;
