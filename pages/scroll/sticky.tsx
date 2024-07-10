import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Sticky = () => {
  const [section, setSection] = useState(1)
  const [inViewRef1, inView1] = useInView({ threshold: 1, triggerOnce: false })
  const [inViewRef2, inView2] = useInView({ threshold: 1, triggerOnce: false })
  const [inViewRef3, inView3] = useInView({ threshold: 1, triggerOnce: false })

  useEffect(() => {
    if (inView1) setSection(1)
  }, [inView1])

  useEffect(() => {
    if (inView2) setSection(2)
  }, [inView2])

  useEffect(() => {
    if (inView3) setSection(3)
  }, [inView3])


  return (
    <>
      <ScrollWrapper>
        <LeftWrapper>
          <div className='box' ref={inViewRef1}>
            <div className="inner-box"></div>
          </div>
          <div className='box' ref={inViewRef2}>
            <div className="inner-box"></div>
          </div>
          <div className='box' ref={inViewRef3}>
            <div className="inner-box"></div>
          </div>
        </LeftWrapper>
        <RightWrapper>
          <div className='box'>
            {section === 1 && <p>section 1</p>}
            {section === 2 && <p>section 2</p>}
            {section === 3 && <p>section 3</p>}
          </div>
        </RightWrapper>
      </ScrollWrapper>

      <ScrollWrapper></ScrollWrapper>
    </>
  )
}

export default Sticky

const ScrollWrapper = styled.div`
  position: relative;
  height: 1580px;
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  padding: 30px;
`

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 200px; */

  .box {
    width: 400px;
    height: 500px;
    border: 1px solid green;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .inner-box {
    width: 100%;
    height: 100px;
    border: 1px solid pink;
  }
`

const RightWrapper = styled.div`
  height: 100%;

  .box {
    position: sticky;
    top: 20px;

    width: 800px;
    height: 500px;
    border: 1px solid red;
  }
`



