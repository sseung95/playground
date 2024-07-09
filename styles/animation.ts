import { css, keyframes } from '@emotion/react';

export const bounceAnimation = keyframes`
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

export const outerCircleAnimation = keyframes`
  0% {
    transform: scale3d(0.8, 0.8, 0.8);
    opacity: 1;
  }
  100% {
    transform: scale3d(1.3,1.3,1.3);
    opacity: 0;
  }
`;

export const headAnimation = keyframes`
  to {
    transform: rotateX(-10deg);
  }
`;

export const armAnimation = keyframes`
  to {
    transform: rotateY(-30deg);
  }
  from {
    transform: rotateY(30deg);
  }
`;

export const legAnimation = keyframes`
  to {
    transform: rotateX(-30deg);
  }
  from {
    transform: rotateX(30deg);
  }
`;

export const glowInputSpin = keyframes`
  0% {
    --rotate: 0deg;
  }
  25% {
      --rotate: 150deg;
  }
  50% {
      --rotate: 180deg;
  }
  75% {
      --rotate: 240deg;
  }
  100% {
      --rotate: 360deg;
  }
`