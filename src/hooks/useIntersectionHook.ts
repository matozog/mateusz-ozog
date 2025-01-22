import { MutableRefObject, Ref, useEffect, useRef, useState } from 'react';

const INTERSECTION_OPTIONS = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3,
};

const useIntersectionHook = (
  elementToObserve: MutableRefObject<HTMLElement | null>
) => {
  const [isVisible, setVisible] = useState<boolean>(false);

  // For now hook can process only one element at once
  const intersectionCallbackFn = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => setVisible(entry.isIntersecting));
  };

  const observerRef: Ref<IntersectionObserver> = useRef(
    new IntersectionObserver(intersectionCallbackFn, INTERSECTION_OPTIONS)
  );

  useEffect(() => {
    if (elementToObserve.current)
      observerRef.current?.observe(elementToObserve.current);
  }, [elementToObserve]);

  return {
    isVisible,
  };
};

export default useIntersectionHook;
