import { color } from '@/styles/color';
import { typography } from '@/styles/typography';
import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';

const useGetHeight = () => {
  const [height, setHeight] = useState<number | null>(null);
  const ref = useRef<HTMLElement | null>(null);

  // 마치 ref.current 가 업데이트되면 useEffect 실행될 것 같지만, 그렇지 않다.
  // ref 는 업데이트 되어도 렌더링이 되지않으므로, 렌더링이 되지 않으면 변경된 ref 값을 볼 수 없다.
  useEffect(() => {
    if (!ref.current) return;
    setHeight(ref.current.getBoundingClientRect().height);
  }, [ref.current]);

  return [ref, height];
};

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  // 컴포넌트 마운트 시 loading false로 업데이트
  useEffect(() => setLoading(false), []);
  return loading;
};

const CallbackRefExam = () => {
  const loading = useLoading();

  const [ref, height] = useGetHeight();
  const [lazyRef, lazyHeight] = useGetHeight();

  return (
    <Container>
      <Title>✅ callback ref</Title>
      <SubTitle>1) useEffect 의존성에 ref.current 걸었을 때</SubTitle>

      <Description>
        <p>2번은 처음에 렌더링이 되지 않아서 ref 가 걸리지 않음</p>
        <p>
          state 변경 후에 ref가 걸리지만 ref 가 변경되어도 렌더링되지 않아서 ref
          걸린 후의 height 출력되지 않음
        </p>
      </Description>

      <Body>
        <div
          ref={ref}
        >{`1️⃣ 첫 렌더링 때 ref 걸림 [ height: ${height}px ]`}</div>
        {!loading && (
          <div ref={lazyRef}>
            2️⃣ state 변경 후에 ref 걸림 [ height: {lazyHeight}px ]
          </div>
        )}
      </Body>
    </Container>
  );
};

export default CallbackRefExam;

const Container = styled.div`
  ${typography.body2.medium};
`;

const Title = styled.h2`
  ${typography.heading3}
  margin-bottom: 2.4rem;
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
