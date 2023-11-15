import Door from '@/src/components/door/Door';
import { color } from '@/styles/color';
import { BoxSC } from '@/styles/components/common';
import styled from '@emotion/styled';

const DoorContainer = () => {
  return (
    <BoxSC.Box>
      <BoxSC.BoxTitle>클릭해서 문을 열고 닫아보세요!</BoxSC.BoxTitle>
      <BoxSC.BoxBody>
        <Stage>
          <Door />
        </Stage>
      </BoxSC.BoxBody>
    </BoxSC.Box>
  );
};

export default DoorContainer;

const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 30vw;
  background-color: ${color.gray.gray10};
`;
