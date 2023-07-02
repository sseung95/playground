import { useRef, useState } from 'react';
import styled from '@emotion/styled';

const ContentEditableTextarea = () => {
  const [text, setText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <Background>
      <EditableTextareaContainer>
        <EditableDiv
          ref={divRef}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onBlur={(e) => {
            console.log(e.currentTarget.innerHTML);
          }}
          onPaste={(e) => {
            console.log(e);
          }}
        >
          {text}
        </EditableDiv>
      </EditableTextareaContainer>
    </Background>
  );
};

export default ContentEditableTextarea;

const Background = styled.div`
  /* border: 1px solid red; */
`;

const EditableTextareaContainer = styled.div`
  font-size: 14px;
`;

const EditableDiv = styled.div`
  width: 400px;
  height: 76px;
  max-height: 76px;
  padding: 8px;

  border: 1px solid #e0e0e0;
  border-radius: 4px;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all;

  cursor: text;

  :focus {
    height: auto;
    min-height: 76px;
    max-height: 300px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    overflow: visible;
    white-space: normal;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-line-clamp: unset;
    -webkit-box-orient: vertical;
    word-break: keep-all;
  }
`;
