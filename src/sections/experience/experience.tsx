import ReactVerticalTimeline from '../../components/vertical-timeline/react-vertical-timeline';
import { timeElements } from './constants';
import useIntersectionHook from '../../hooks/useIntersectionHook';
import { useRef } from 'react';

const Experience = () => {
    const headerRef = useRef<HTMLElement | null>(null);
    const { isVisible } = useIntersectionHook(headerRef);

    return (
        <div id="experience-container">
            <span
                ref={headerRef}
                id="experience-title"
                className={`w-100 flex justify-center section-title ${
                    isVisible ? 'animate__jackInTheBox' : ''
                } animate__animated`}
            >
                Experience
            </span>
            <ReactVerticalTimeline timelineElements={timeElements} />
        </div>
    );
};

export default Experience;
