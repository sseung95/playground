import { useRef } from 'react';

function useThrottle(callback: () => void, limit: number) {
  const lastRun = useRef(Date.now());

  return function () {
    if (Date.now() - lastRun.current >= limit) {
      callback();
      lastRun.current = Date.now();
    }
  };
}

export default useThrottle;