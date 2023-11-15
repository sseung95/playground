import { useState } from 'react';
import { color } from '@/styles/color';
import styled from '@emotion/styled';
import ChickImg from '@/public/images/chick.png';

const Door = () => {
  const [active, setActive] = useState(false);

  return (
    <StyledDoor
      active={active}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      <div className="back">
        <div className="img-wrapper" />
      </div>
      <div className="front"></div>
    </StyledDoor>
  );
};

export default Door;

const StyledDoor = styled.div<{ active: boolean }>`
  position: relative;
  width: 150px;
  height: 200px;
  background-color: ${color.bg.base};
  cursor: pointer;

  .front {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${color.primary};
    transition: 0.5s;
    transform-origin: 0%;

    ${({ active }) =>
      active &&
      `
      transform: perspective(500px) rotateY(-120deg);
    `}
  }
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    overflow: hidden;

    .img-wrapper {
      width: 100%;
      height: 100%;
      background-image: url(${ChickImg.src});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 50% 100%;
      transform: translateX(100%);
      transition: 0.5s 0.5s;

      ${({ active }) =>
        active &&
        `
        transform: translateX(0%);
      `}
    }
  }
`;
