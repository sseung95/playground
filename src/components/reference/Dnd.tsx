import { useRef, useState } from 'react';
import { motion, useDragControls } from 'framer-motion';
import styled from '@emotion/styled';

const Dnd = () => {
  const constraintsRef = useRef(null);
  const dragControls = useDragControls();

  // TODO: 요소 선택하면 선택한 요소의 zIndex 가 제일 최상위로 변경되게

  return (
    <DndWrapper
      className="area"
      ref={constraintsRef}
      onPointerDown={(event) => dragControls.start(event)}
    >
      <motion.div
        className="box"
        drag
        dragConstraints={constraintsRef}
        dragControls={dragControls}
        dragElastic={0}
        dragMomentum={false}
      />
      <motion.div
        className="box2"
        drag
        dragConstraints={constraintsRef}
        dragControls={dragControls}
        dragElastic={0}
        dragMomentum={false}
      />
    </DndWrapper>
  )
}

export default Dnd

const DndWrapper = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 10px;
  background-color: #1199ee;
  display: flex;
  place-items: center;
  place-content: center;
  cursor: grab;
  overflow: hidden;
  

  .box, .box2 {
    width: 200px;
    height: 200px;
    background-color: #B9DFFB;
    border-radius: 10px;
  }

  .box2 {
    background-color: #FFF6DF;
  }
`