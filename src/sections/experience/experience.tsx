import ReactVerticalTimeline from '../../components/vertical-timeline/react-vertical-timeline';
import { timeElements } from './constants';
import useIntersectionHook from '../../hooks/useIntersectionHook';
import { useRef } from 'react';

const Experience = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const { isVisible } = useIntersectionHook(headerRef);

  return (
    <section id="experience" className="scroll-mt-20">
      <h2
        ref={headerRef}
        className={`w-full flex justify-center section-title ${
          isVisible ? 'animate__pulse' : ''
        } animate__animated`}
      >
        Experience
      </h2>
      <ReactVerticalTimeline timelineElements={timeElements} />
    </section>
  );
};

export default Experience;
