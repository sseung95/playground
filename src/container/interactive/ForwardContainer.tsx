import * as SC from '@/styles/components/interactive/Forward.styles';

const ForwardContainer = () => {
  return (
    <SC.ForwardContainer>
      <SC.Stage>
        <SC.House>
          <SC.Wall position={'left'} />
          <SC.Wall position={'right'} />
          <SC.Wall />
          <SC.Wall />
          <SC.Wall />
          <SC.Wall />
        </SC.House>
      </SC.Stage>
    </SC.ForwardContainer>
  );
};

export default ForwardContainer;
