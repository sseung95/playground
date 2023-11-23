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
