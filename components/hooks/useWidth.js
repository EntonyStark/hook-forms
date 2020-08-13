import { useEffect, useState } from 'react';

export const useWidth = () => {
  const [w, setW] = useState(window.innerWidth);

  const setWidth = () => setW(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, []);

  return w;
};
