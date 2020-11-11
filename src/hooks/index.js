import { useState } from 'react';

export function useLoadingSimulator(duration = 500) {
  const [isLoading, setIsLoading] = useState(false);
  let timer = null;

  const stop = () => {
    clearTimeout(timer);
    setIsLoading(false);
  };

  const start = () => {
    if (timer) return;
    setIsLoading(true);
    timer = setTimeout(stop, duration);
  };

  return [isLoading, start, stop];
}
