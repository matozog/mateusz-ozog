import ReactVerticalTimeline, {
    ITimelineElementProps,
} from '../../components/vertical-timeline/react-vertical-timeline';

const Experience = () => {
    const timeElements: Array<ITimelineElementProps> = [
        {
            date: '10.2023 - present',
            content: <div>Software engineer</div>,
        },
        {
            date: '02.2022 - 07.2023',
            content: <div>Frontend developer</div>,
        },
        {
            date: '09.2020 - 01.2022',
            content: <div>Junior Software Engineer</div>,
        },
        {
            date: '03.2020 - 08.2020',
            content: <div>Intern</div>,
        },
    ];

    return (
        <div id="experience-container">
            <span className="w-100 flex justify-center text-3xl mb-6">
                Experience
            </span>
            <ReactVerticalTimeline timelineElements={timeElements} />
        </div>
    );
};

export default Experience;
