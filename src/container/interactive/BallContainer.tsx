import { MouseEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { BoxSC } from '@/styles/components/common';
import * as SC from '@/styles/components/interactive/Ball.styles';
import { color, colorPalette } from '@/styles/color';

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
        <SC.Stage onClick={handleClickStage}>
          <SC.Ball
            ref={ballRef}
            size={BALL_SIZE}
            x={position.x}
            y={position.y}
            isStart={isStart}
          />
          {!isStart && (
            <SC.Guide>
              <SC.GuideComment>클릭해보세요!</SC.GuideComment>
              <SC.GuideCircle />
            </SC.Guide>
          )}
        </SC.Stage>
      </BoxSC.BoxBody>
    </BoxSC.Box>
  );
};

export default BallContainer;
