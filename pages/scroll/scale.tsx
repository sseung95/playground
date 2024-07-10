import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react';

const Scale = () => {
  const [isAtTop, setIsAtTop] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.querySelector('main')?.scrollTop || 0;

      // TODO: 지금은 헤더 높이만큼 스크롤했을 때를 기준으로 하고 있음. 추후에는 요소의 위치를 계산해서 할 것.
      if (scrollTop >= 56) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    document.querySelector('main')?.addEventListener('scroll', handleScroll);

    return () => {
      document.querySelector('main')?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <SectionHeader ref={elementRef}></SectionHeader>
      <div style={{ position: 'relative', width: '100%' }}>
        <SectionBody>
          <motion.div 
            className="box"
            animate={isAtTop ? { height: 460 } : { height: 360 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
          <motion.div 
            className="box"
            animate={isAtTop ? { height: 460 } : { height: 360 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
          <motion.div
            className="box center"
            initial={{ width: 315, height: 360 }}
            animate={isAtTop ? { width: 1280, height: 460 } : { width: 206, height: 360 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
          <motion.div 
            className="box"
            animate={isAtTop ? { height: 460 } : { height: 360 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
          <motion.div 
            className="box"
            animate={isAtTop ? { height: 460 } : { height: 360 }}
            transition={{ duration: 0.5 }}
          >
          </motion.div>
        </SectionBody>
      </div>
    </div>
  )
}

export default Scale

const SectionHeader = styled.div`
  height: calc(55vh - 80px);
  width: 100%;
  background-color: beige;
  margin-bottom: 20px;
`

const SectionBody = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;

  .box {
    width: 206px;
    height: 360px;
    border: 1px solid blue;
    border-radius: 32px;
    margin-bottom: 500px;

    &.center {
      width: 315px;
    }
  }
`