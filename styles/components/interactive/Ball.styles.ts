import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color, colorPalette } from '@/styles/color';
import { bounceAnimation, outerCircleAnimation } from '@/styles/animation';

export const Stage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 30vw;
  background-color: ${color.gray.gray50};
  border-radius: 20px;
  cursor: pointer;
`;

export const Ball = styled.div<{
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
  /* animation: ${({ isStart }) =>
    !isStart &&
    css`
      ${bounceAnimation} 1s ease infinite
    `}; */
`;

export const Guide = styled.div`
  position: absolute;
  left: 72%;
  top: 25%;
`;

export const GuideComment = styled.div`
  position: absolute;
  left: -35px;
  top: -60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  padding: 10px 14px;
  background: ${color.gray.gray10};
  border-radius: 8px;
  color: ${color.text.white};
  font-size: 14px;
`;

export const GuideCircle = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 30px;
  height: 30px;
  border: 2px solid ${colorPalette.red.red30};
  border-radius: 50%;
  animation: ${outerCircleAnimation} 1s ease infinite;
`;
