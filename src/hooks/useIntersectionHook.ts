import { MutableRefObject, useEffect, useState } from 'react';

const INTERSECTION_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const useIntersectionHook = (
  elementToObserve: MutableRefObject<HTMLElement | null>
) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = elementToObserve.current;
    if (!element) return;

    // For now hook can process only one element at once
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    }, INTERSECTION_OPTIONS);

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementToObserve]);

  return {
    isVisible,
  };
};

export default useIntersectionHook;
