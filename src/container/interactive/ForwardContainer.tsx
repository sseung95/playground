import * as SC from '@/styles/components/interactive/Forward.styles';

const ForwardContainer = () => {
  return (
    <SC.ForwardContainer>
      <SC.Stage>
        <SC.House>
          <SC.Wall position={'left'}></SC.Wall>
          <SC.Wall position={'right'}></SC.Wall>
          <SC.Wall order={1}>안녕하세요 1</SC.Wall>
          <SC.Wall order={2}>안녕하세요 2</SC.Wall>
          <SC.Wall order={3}>안녕하세요 3</SC.Wall>
          <SC.Wall order={4}>안녕하세요 4</SC.Wall>
        </SC.House>
      </SC.Stage>
    </SC.ForwardContainer>
  );
};

export default ForwardContainer;
