import styled from '@emotion/styled'
import Link from 'next/link'

const GlowButton = () => {
  return (
    <Button>
      <Link href={'#'}>사이트 만들기</Link>
      <div className="animated-border-box-glow"></div>
      <div className="animated-border-box"></div>
    </Button>
  )
}

export default GlowButton

const Button = styled.div`
  position: relative;
  width: 200px;
  height: 60px;
  
  .animated-border-box,
  .animated-border-box-glow {
    max-height: 60px;
    max-width: 250px;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: 0;
    /* Border Radius */
    border-radius: 12px;
  }

  .animated-border-box-glow {
    overflow: hidden;
    /* Glow Blur */
  /*   filter: blur(20px); */
  }

  .animated-border-box:before,
  .animated-border-box-glow:before {
    content: '';
    z-index: -2;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(0deg);
    position: absolute;
    width: 99999px;
    height: 99999px;
    background-repeat: no-repeat;
    background-position: 0 0;
    /*border color, change middle color*/
    background-image: conic-gradient(rgba(0, 0, 0, 0), #00cc99, rgba(0, 0, 0, 0) 25%);
    /* change speed here */
    animation: rotate 3s linear infinite;
  }

  .animated-border-box:after {
    content: '';
    position: absolute;
    z-index: -1;
    /* border width */
    left: 1px;
    top: 1px;
    /* double the px from the border width left */
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    /*bg color*/
    background: #292a2e;
    /*box border radius*/
    border-radius: 12px;
  }

  @keyframes rotate {
    100% {
      transform: translate(-50%, -50%) rotate(1turn);
    }
  }

  a {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;

    color: #fff;
    font-size: 1.4rem;
    transform: translate(-50%, -50%) rotate(0deg);
    z-index: 10;
  }
`