import * as SC from '@/styles/components/interactive/Forward.styles';

const ForwardContainer = () => {
  return (
    <SC.ForwardContainer>
      <SC.Stage>
        <SC.House>
          <SC.Wall position={'left'}></SC.Wall>
          <SC.Wall position={'right'}></SC.Wall>
          <SC.Wall zMove={300}>안녕하세요 1</SC.Wall>
          <SC.Wall zMove={50}>안녕하세요 2</SC.Wall>
          <SC.Wall zMove={-200}>안녕하세요 3</SC.Wall>
          <SC.Wall zMove={-500}>안녕하세요 4</SC.Wall>
        </SC.House>
      </SC.Stage>
    </SC.ForwardContainer>
  );
};

export default ForwardContainer;
