import { memo, UIEvent, useEffect, useState } from 'react';
import HeadFront from '@/public/images/forward/ilbuni_head_front.png';
import HeadBack from '@/public/images/forward/ilbuni_head_back.png';
import BodyFront from '@/public/images/forward/ilbuni_body_front.png';
import BodyBack from '@/public/images/forward/ilbuni_body_back.png';
import ArmRight from '@/public/images/forward/ilbuni_arm_0.png';
import ArmLeft from '@/public/images/forward/ilbuni_arm_1.png';
import LegRight from '@/public/images/forward/ilbuni_leg_0.png';
import LegLeft from '@/public/images/forward/ilbuni_leg_1.png';
import * as SC from '@/styles/components/interactive/Forward.styles';

const Charactor = ({
  xPositionPercentage,
}: {
  xPositionPercentage: number;
}) => {
  const [isRunning, setIsRunning] = useState(false);
  const [charactorDirection, setCharactorDirection] =
    useState<string>('forward');
  const [xPosition, setXPosition] = useState(xPositionPercentage);
  const speed = 0.2;

  // TODO: useState 로 하게 되면 의도한대로 동작이 잘되지 않음. 이유 찾아보기
  // const [prevScrollY, setPrevScrollY] = useState<number>(0);
  // const [timer, setTimer] = useState<number | NodeJS.Timeout>(0);
  let timer: NodeJS.Timeout | null = null;
  let requestAnimationFrameId: number;
  let prevScrollY: number = 0;

  const runOnScroll = () => {
    if (timer) {
      clearTimeout(timer);
    }

    if (!timer) {
      setIsRunning(true);
    }

    timer = setTimeout(() => {
      timer = null;
      setIsRunning(false);
    }, 500);
  };

  const changeCharacterDirection = () => {
    const curScrollY = window.scrollY;

    const isScrollUp = prevScrollY > curScrollY;

    if (isScrollUp) {
      setCharactorDirection('forward');
    } else {
      setCharactorDirection('backward');
    }

    prevScrollY = curScrollY;
  };

  const handleScroll = () => {
    runOnScroll();
    changeCharacterDirection();
  };

  const moveCharactor = (e: KeyboardEvent) => {
    if (requestAnimationFrameId) {
      cancelAnimationFrame(requestAnimationFrameId);
    }

    const pressedKey = e.key;

    const minLeftPercentage = 0;
    const maxLeftPercentage = 88;

    if (pressedKey === 'ArrowLeft') {
      setCharactorDirection('left');
      setXPosition((prevXPosition) => {
        const curXPosition = prevXPosition - speed;
        const isLessThanMinPercentage = curXPosition <= minLeftPercentage;
        return isLessThanMinPercentage ? minLeftPercentage : curXPosition;
      });
    } else if (pressedKey === 'ArrowRight') {
      setCharactorDirection('right');
      setXPosition((prevXPosition) => {
        const curXPosition = prevXPosition + speed;
        const isMoreThanMinPercentage = curXPosition >= maxLeftPercentage;
        return isMoreThanMinPercentage ? maxLeftPercentage : curXPosition;
      });
    }

    const keyboardArrowList = [
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown',
    ];
    const isRunning = keyboardArrowList.includes(pressedKey);

    if (isRunning) {
      setIsRunning(true);
    }

    // moveCharactor 함수는 e 인자가 필요하므로 반드시! e 를 인자로 전달해주어야 된다.
    requestAnimationFrameId = requestAnimationFrame(() => moveCharactor(e));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    moveCharactor(e);
  };

  const handleKeyUp = () => {
    cancelAnimationFrame(requestAnimationFrameId);
    setIsRunning(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <SC.Charactor
      direction={charactorDirection}
      xPositionPercentage={xPosition}
    >
      {/* 머리 */}
      <SC.CharactorHead>
        <img src={HeadFront.src} alt="head" />
        <img className={'back'} src={HeadBack.src} alt="head" />
      </SC.CharactorHead>

      {/* 몸통 */}
      <SC.CharactorBody>
        <img src={BodyFront.src} alt="body" />
        <img className={'back'} src={BodyBack.src} alt="body" />
      </SC.CharactorBody>

      {/* 팔 (왼쪽) */}
      <SC.CharactorArm direction={'left'} running={isRunning}>
        <img src={ArmLeft.src} alt="left arm" />
        <img className={'back'} src={ArmRight.src} alt="left arm" />
      </SC.CharactorArm>

      {/* 팔 (오른쪽) */}
      <SC.CharactorArm direction={'right'} running={isRunning}>
        <img src={ArmRight.src} alt="left arm" />
        <img className={'back'} src={ArmLeft.src} alt="left arm" />
      </SC.CharactorArm>

      {/* 다리 (왼쪽) */}
      <SC.CharactorLeg direction={'left'} running={isRunning}>
        <img src={LegLeft.src} alt="left leg" />
        <img className={'back'} src={LegRight.src} alt="left leg" />
      </SC.CharactorLeg>

      {/* 다리 (오른쪽) */}
      <SC.CharactorLeg direction={'right'} running={isRunning}>
        <img src={LegRight.src} alt="right leg" />
        <img className={'back'} src={LegLeft.src} alt="right leg" />
      </SC.CharactorLeg>
    </SC.Charactor>
  );
};

export default Charactor;
