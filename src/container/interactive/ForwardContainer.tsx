import {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as SC from '@/styles/components/interactive/Forward.styles';
import Charactor from '@/src/components/forward/Charactor';

const INITIAL_HOUSE_Z_MOVE = -500;

const ForwardContainer = () => {
  const [houseZMove, setHouseZMove] = useState<number>(INITIAL_HOUSE_Z_MOVE);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [charactorXPositionList, setCharactorXPositionList] = useState<
    number[]
  >([]);

  const bodyRef = useRef<HTMLDivElement>(null);
  const scrollPercentage = useRef<number>(0);

  const handleScroll = () => {
    if (!bodyRef.current) return;

    const maxScrollRange = bodyRef.current.offsetHeight - window.innerHeight;
    const scrollRate = window.scrollY / maxScrollRange;

    setHouseZMove(scrollRate * 980 + INITIAL_HOUSE_Z_MOVE);
    scrollPercentage.current = scrollRate * 100;
  };

  const handleMouseMove = (e: MouseEvent) => {
    const x = -1 + (e.clientX / window.innerWidth) * 2;
    const y = 1 - (e.clientY / window.innerHeight) * 2;

    setMousePosition({ x: x * 2, y: y * 2 });
  };

  const handleHouseClick = (e: MouseEvent) => {
    const clickedXPercentage = (e.clientX / window.innerWidth) * 100;
    setCharactorXPositionList((prevXPositionList) => [
      ...prevXPositionList,
      clickedXPercentage,
    ]);
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
      <SC.Body ref={bodyRef} onMouseMove={handleMouseMove}>
        <SC.ForwardContainer>
          <SC.Stage position={mousePosition} onClick={handleHouseClick}>
            {/* 집 */}
            <SC.House zMove={houseZMove}>
              <SC.Wall position={'left'}></SC.Wall>
              <SC.Wall position={'right'}></SC.Wall>
              <SC.Wall zMove={300}>안녕하세요 1</SC.Wall>
              <SC.Wall zMove={50}>안녕하세요 2</SC.Wall>
              <SC.Wall zMove={-200}>안녕하세요 3</SC.Wall>
              <SC.Wall zMove={-500}>안녕하세요 4</SC.Wall>
            </SC.House>

            {/* 캐릭터 */}
            {charactorXPositionList.map((xPosition, index) => (
              <Charactor key={index} xPositionPercentage={xPosition} />
            ))}
          </SC.Stage>
        </SC.ForwardContainer>
      </SC.Body>
    </>
  );
};

export default ForwardContainer;
