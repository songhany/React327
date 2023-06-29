import { useState, useEffect } from 'react';

export function useTimer() {
  const [time, setTime] = useState(0);
  
  useEffect(() => {
    const id = setInterval(() => {
      setTime(c => c + 1);
    }, 1000);
    
    return () => clearInterval(id);
  }, []);

  return time;
}