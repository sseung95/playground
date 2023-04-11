import React, { useEffect, useState } from 'react';

const Parent = () => {
  console.log('렌더링 시작!');

  const [state, setState] = useState(() => {
    console.log('useState 초기화');
    return false;
  });

  console.log(`state 값 => ${state}`);

  useEffect(() => {
    console.log('의존성 없는 useEffect');
  });

  useEffect(() => {
    console.log('의존성 [] useEffect');
  }, []);

  useEffect(() => {
    console.log('의존성 [state] useEffect');
  }, [state]);

  console.log('렌더링 끝');

  return <div>Parent</div>;
};

export default Parent;
