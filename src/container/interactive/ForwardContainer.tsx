import { useEffect, useRef, useState } from 'react';
import * as SC from '@/styles/components/interactive/Forward.styles';

const INITIAL_HOUSE_Z_MOVE = -500;

const ForwardContainer = () => {
  const [houseZMove, setHouseZMove] = useState<number>(INITIAL_HOUSE_Z_MOVE);
  const bodyRef = useRef<HTMLDivElement>(null);
  const scrollPercentage = useRef<number>(0);

  const handleScroll = () => {
    if (!bodyRef.current) return;

    const maxScrollRange = bodyRef.current.offsetHeight - window.innerHeight;
    const scrollRate = window.scrollY / maxScrollRange;

    setHouseZMove(scrollRate * 980 + INITIAL_HOUSE_Z_MOVE);
    scrollPercentage.current = scrollRate * 100;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <SC.ScrollBar percentage={scrollPercentage.current || 0} />
      <SC.Body ref={bodyRef}>
        <SC.ForwardContainer>
          <SC.Stage>
            <SC.House zMove={houseZMove}>
              <SC.Wall position={'left'}></SC.Wall>
              <SC.Wall position={'right'}></SC.Wall>
              <SC.Wall zMove={300}>안녕하세요 1</SC.Wall>
              <SC.Wall zMove={50}>안녕하세요 2</SC.Wall>
              <SC.Wall zMove={-200}>안녕하세요 3</SC.Wall>
              <SC.Wall zMove={-500}>안녕하세요 4</SC.Wall>
            </SC.House>
          </SC.Stage>
        </SC.ForwardContainer>
      </SC.Body>
    </>
  );
};

export default ForwardContainer;
