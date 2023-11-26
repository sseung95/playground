import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color, colorPalette } from '@/styles/color';
import { bounceAnimation, outerCircleAnimation } from '@/styles/animation';

export const Stage = styled.div`
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
  /* TODO: isStart 가 true 되면서 맨 처음 공이 움직일 때 부드럽게 움직이지 않고 뚝 끊기면서 움직임
    -> animation은 transition 적용이 되지 않는다고 함. 어떻게 부드럽게 움직일 수 있는지 고민해보기
  */
  animation: ${({ isStart }) =>
    !isStart &&
    css`
      ${bounceAnimation} 1s ease infinite
    `};
`;

export const Guide = styled.div`
  /* TODO: position: absolute 였을 때 공의 x, y 포지션이 이상하게 동작했다. 이유가 뭘까 */
  position: relative;
  top: -30%;
  left: 20%;
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
