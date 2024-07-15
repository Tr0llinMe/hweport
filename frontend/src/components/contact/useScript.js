import { useEffect } from 'react';

const useScript = (src, onLoad) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = onLoad;
    script.onerror = () => {
      console.error(`Failed to load script: ${src}`);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src, onLoad]);
};

export default useScript;
