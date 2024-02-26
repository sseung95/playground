import useThrottle from '@/src/hooks/useThrottle';
import { ChangeEvent, useEffect, useState } from 'react';

const Throttle = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const throttle = useThrottle(() => {
    console.log(value);
  }, 500);

  useEffect(() => {
    throttle();
  }, [value])

  return (
    <div>
    <input type="text" value={value} onChange={handleChange} />
  </div>
  )
}

export default Throttle