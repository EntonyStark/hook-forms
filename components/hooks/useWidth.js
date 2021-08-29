import { useEffect, useState } from 'react';

const width = process.browser ? window.innerWidth : 10000;

export const useWidth = () => {
  const [w, setW] = useState(width);

  const setWidth = () => setW(width);

  useEffect(() => {
    window.addEventListener('resize', setWidth);
    return () => {
      window.removeEventListener('resize', setWidth);
    };
  }, []);

  return w;
};
