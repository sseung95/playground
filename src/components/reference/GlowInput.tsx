import { glowInputSpin } from '@/styles/animation'
import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

const GlowInput = () => {
  const [isShowPlaceholder, setIsShowPlaceholder] = useState(true)
  const placeholderList  = ['Lorem ipsum dummy text blabla.', 'Lorem ipsum dummy text blabla 2.']


  return (
    <Form onSubmit={(e) => {
      e.preventDefault()
    }}>
      {isShowPlaceholder && (
        <Typewriter texts={placeholderList} speed={80} delayBetweenTexts={2000} />
      )}
      <input type="placeholder" onChange={(e) => {
        const isEmptyText = e.target.value.length == 0
        setIsShowPlaceholder(isEmptyText)
      }} />
      <button>Generate</button>
    </Form>
  )
}

export default GlowInput


const Typewriter = ({ texts = [''], speed = 100, delayBetweenTexts = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (index < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const delayTimeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, delayBetweenTexts);
      return () => clearTimeout(delayTimeout);
    }
  }, [index, textIndex, texts, speed, delayBetweenTexts]);

  return <span className={'placeholder'}>{displayedText}</span>;
};

const rotate = '132deg';
const colorOne = '#4b2fa4';
const colorTwo = '#c18fff';
const colorThree = '#33a9ff';

const Form = styled.form`
  display: flex;
  align-items: center;
  
  background: #090b0e;
  border-radius: 14px;
  color: #58c7fa00;
  cursor: pointer;
  font-size: 17px;
  height: 64px;
  margin-bottom: 20px;
  padding: 2px 0 2px 2px;
  position: relative;
  text-align: center;
  /* width: 100%; */
  width: 800px;
  min-width: 200px;

  &::before {
    animation: ${glowInputSpin} 5s linear infinite;
    background-image: linear-gradient(${rotate}, ${colorOne}, ${colorTwo} 43%, ${colorThree});
    border-radius: 16px;
    content: "";
    inset: -3px;
    position: absolute;
    z-index: -1;
  }

  &::after {
    animation: ${glowInputSpin} 6s linear infinite;
    background-image: conic-gradient(from ${rotate}, ${colorOne}, ${colorTwo}, ${colorThree}, ${colorTwo}, ${colorOne});
    content: "";
    filter: blur(12.8px);
    inset: -6px -60px;
    margin: 0 auto;
    opacity: 1;
    position: absolute;
    transform: scale(.84);
    transition: opacity .8s;
    z-index: -1;
  }

  .placeholder {
    position: absolute;
    left: 18px;
    width: 100%;
    text-align: left;
    color: #959595;
    font-weight: 400;
    opacity: .7;
    pointer-events: none;
    position: absolute;
    -webkit-user-select: none;
    user-select: none;
  }

  input {
    background: none;
    border: none;
    box-sizing: border-box;
    color: #fefefe;
    font: inherit;
    height: 100%;
    outline: none;
    padding: 0 14px;
    flex-grow: 1;
    
  }

  button {
    align-items: center;
    background-color: #7b0fff;
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    display: flex;
    font: inherit;
    font-size: 17px;
    font-weight: 500;
    justify-content: center;
    margin-right: 10px;
    outline: inherit;
    padding: 12px 18px;
    text-align: center;
    transition: .5s;
    white-space: nowrap;
  }
`