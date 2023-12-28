import ReactVerticalTimeline from '../../components/vertical-timeline/react-vertical-timeline';
import { timeElements } from './constants';

const Experience = () => {
    return (
        <div id="experience-container">
            <span
                id="experience-title"
                className="w-100 flex justify-center section-title"
            >
                Experience
            </span>
            <ReactVerticalTimeline timelineElements={timeElements} />
        </div>
    );
};

export default Experience;
