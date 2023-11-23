import { MouseEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { BoxSC } from '@/styles/components/common';
import * as SC from '@/styles/components/interactive/Ball.styles';
import { color, colorPalette } from '@/styles/color';

const BALL_SIZE = 30;

const BallContainer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isStart, setIsStart] = useState(false);
  const stageRef = useRef(null);
  const ballRef = useRef(null);

  const handleClickStage = (e: MouseEvent<HTMLElement>) => {
    if (!ballRef.current || !stageRef.current) return;

    setIsStart(true);

    const ballEl = ballRef.current as HTMLElement;
    const stageEl = stageRef.current as HTMLElement;

    let x = e.clientX - ballEl.offsetLeft - BALL_SIZE / 2;
    let y = e.clientY - ballEl.offsetTop - BALL_SIZE / 2;

    const maxXRange = stageEl.clientWidth / 2 - BALL_SIZE / 2;
    const maxYRange = stageEl.clientHeight / 2 - BALL_SIZE / 2;

    if (x > maxXRange) x = maxXRange;
    if (x < -maxXRange) x = -maxXRange;
    if (y > maxYRange) y = maxYRange;
    if (y < -maxYRange) y = -maxYRange;

    setPosition({ x, y });
  };

  return (
    <BoxSC.Box>
      <BoxSC.BoxTitle>클릭해서 공을 움직여 보세요!</BoxSC.BoxTitle>
      <BoxSC.BoxBody>
        <SC.Stage ref={stageRef} onClick={handleClickStage}>
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
