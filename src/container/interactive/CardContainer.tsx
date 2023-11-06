import { colorPalette } from '@/styles/color';
import { BoxSC } from '@/styles/components/common';
import styled from '@emotion/styled';

const CardContainer = () => {
  return (
    <BoxSC.Box>
      <BoxSC.BoxTitle>카드 뒤집기</BoxSC.BoxTitle>
      <BoxSC.BoxBody>
        <CardWorld>
          <Card>
            <div className="front">
              <span>🧡</span>
            </div>
            <div className="back">🖤</div>
          </Card>
          <Card>
            <div className="front">
              <span>🧡</span>
            </div>
            <div className="back">🖤</div>
          </Card>
          <Card>
            <div className="front">
              <span>🧡</span>
            </div>
            <div className="back">🖤</div>
          </Card>
        </CardWorld>
      </BoxSC.BoxBody>
    </BoxSC.Box>
  );
};

export default CardContainer;

const CardWorld = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  width: 700px;
  height: 500px;
  background-color: ${colorPalette.red.red5};
  border-radius: 12px;
  border: 2px solid ${colorPalette.red.red20};

  perspective: 500px;
`;

const Card = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
  transform-style: preserve-3d;
  transition: 1s;
  cursor: pointer;

  :hover {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    backface-visibility: hidden;
  }

  .front {
    z-index: 1;
    background-color: ${colorPalette.yellow.yellow50};
    transform: rotateY(0deg);
  }
  .back {
    background-color: ${colorPalette.gray.gray20};
    transform: rotateY(180deg);
  }
`;
