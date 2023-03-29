import { color } from '@/styles/color';
import { typography } from '@/styles/typography';
import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const useGetHeightByCallbackRef = () => {
  const [height, setHeight] = useState<number | null>(null);

  // 해당 node에서 callback ref가 붙을 때 콜백함수가 실행
  const ref = useCallback((node: HTMLElement) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return [ref, height];
};

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 loading false로 업데이트
  useEffect(() => setLoading(false), []);
  return loading;
};

const CallbackRefExam2 = () => {
  const loading = useLoading();

  const [ref2, height2] = useGetHeightByCallbackRef();
  const [lazyRef2, lazyHeight2] = useGetHeightByCallbackRef();

  return (
    <Container>
      <SubTitle>2) callback ref 만들어서 걸었을 때</SubTitle>
      <Description>
        <p>
          useCallback을 ref 로 만들면 해당 노드에 ref가 붙을때 콜백을 실행하게
          됨
        </p>
        <p>
          노드를 인자로 받는 콜백이 실행되면 node의 정보를 받아와서 height 값을
          가져올 수 있게 됨
        </p>
      </Description>
      <Body>
        <div
          ref={ref2}
        >{`1️⃣ 첫 렌더링 때 ref 걸림 [ height: ${height2}px ]`}</div>
        {!loading && (
          <div ref={lazyRef2}>
            2️⃣ state 변경 후에 ref 걸림 [ height: {lazyHeight2}px ]
          </div>
        )}
      </Body>
    </Container>
  );
};

export default CallbackRefExam2;

const Container = styled.div`
  ${typography.body2.medium};
`;

const SubTitle = styled.h3`
  ${typography.subheading}
  margin-bottom: 2rem;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 4rem;

  div {
    display: flex;
    align-items: center;
    height: 4rem;
    padding: 10px;
    background-color: ${color.bg.transaprent};
  }
`;

const Description = styled.div`
  margin-bottom: 12px;
  p {
    padding: 8px 0;
  }
`;
