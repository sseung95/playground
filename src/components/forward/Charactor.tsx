import { memo, useEffect, useState } from 'react';
import HeadFront from '@/public/images/forward/ilbuni_head_front.png';
import HeadBack from '@/public/images/forward/ilbuni_head_back.png';
import BodyFront from '@/public/images/forward/ilbuni_body_front.png';
import BodyBack from '@/public/images/forward/ilbuni_body_back.png';
import ArmRight from '@/public/images/forward/ilbuni_arm_0.png';
import ArmLeft from '@/public/images/forward/ilbuni_arm_1.png';
import LegRight from '@/public/images/forward/ilbuni_leg_0.png';
import LegLeft from '@/public/images/forward/ilbuni_leg_1.png';
import * as SC from '@/styles/components/interactive/Forward.styles';

const Charactor = () => {
  // const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState<number | NodeJS.Timeout>(0);

  const handleScroll = () => {
    if (timer) return;

    // setTimer(() => setTimeout(() => {}, 500));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(timer);
  }, [timer]);

  return (
    <SC.Charactor>
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
      <SC.CharactorArm direction={'left'}>
        <img src={ArmLeft.src} alt="left arm" />
        <img className={'back'} src={ArmLeft.src} alt="left arm" />
      </SC.CharactorArm>

      {/* 팔 (오른쪽) */}
      <SC.CharactorArm direction={'right'}>
        <img src={ArmRight.src} alt="left arm" />
        <img className={'back'} src={ArmRight.src} alt="left arm" />
      </SC.CharactorArm>

      {/* 다리 (왼쪽) */}
      <SC.CharactorLeg direction={'left'}>
        <img src={LegLeft.src} alt="left leg" />
        <img className={'back'} src={LegLeft.src} alt="left leg" />
      </SC.CharactorLeg>

      {/* 다리 (오른쪽) */}
      <SC.CharactorLeg direction={'right'}>
        <img src={LegRight.src} alt="right leg" />
        <img className={'back'} src={LegRight.src} alt="right leg" />
      </SC.CharactorLeg>
    </SC.Charactor>
  );
};

export default Charactor;
