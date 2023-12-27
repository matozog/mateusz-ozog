import 'react-vertical-timeline-component/style.min.css';
import './react-vertical-timeline.css';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { FC } from 'react';
import WorkIcon from '@mui/icons-material/Work';

export interface ITimelineElementProps {
    date: string;
    content: JSX.Element;
}

interface IReactVerticalTimelineProps {
    timelineElements: Array<ITimelineElementProps>;
}

const ReactVerticalTimeline: FC<IReactVerticalTimelineProps> = ({
    timelineElements,
}) => {
    return (
        <VerticalTimeline>
            {timelineElements.map((element, index) => (
                <VerticalTimelineElement
                    key={index}
                    dateClassName="timeline-date"
                    className="vertical-timeline-element--work text-xl"
                    contentStyle={{
                        background: '#1a1a1a',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  #1a1a1a',
                    }}
                    iconStyle={{
                        background: '#185f28',
                        color: '#fff',
                    }}
                    icon={<WorkIcon />}
                    date={element.date}
                >
                    {element.content}
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
};

export default ReactVerticalTimeline;
