import useDebounce from '@/src/hooks/useDebounce';
import { ChangeEvent, useEffect, useState } from 'react'

const Debounce = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const debouncedValue = useDebounce(value);

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue])

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default Debounce