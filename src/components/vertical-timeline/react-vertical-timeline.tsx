import 'react-vertical-timeline-component/style.min.css';

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
                    className="vertical-timeline-element--work"
                    contentStyle={{
                        background: '#000',
                        color: '#fff',
                    }}
                    contentArrowStyle={{
                        borderRight: '7px solid  #000',
                    }}
                    iconStyle={{
                        background: '#000',
                        color: '#fff',
                    }}
                    icon={<WorkIcon />}
                    date={element.date}
                >
                    {element.content}
                </VerticalTimelineElement>
            ))}
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                }}
                contentArrowStyle={{
                    borderRight: '7px solid  rgb(33, 150, 243)',
                }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Creative Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Miami, FL
                </h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                }}
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Art Director
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                </h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO,
                    Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                }}
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    Los Angeles, CA
                </h4>
                <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff',
                }}
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<WorkIcon />}
            >
                <h3 className="vertical-timeline-element-title">
                    Web Designer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                    San Francisco, CA
                </h4>
                <p>User Experience, Visual Design</p>
            </VerticalTimelineElement> */}
        </VerticalTimeline>
    );
};

export default ReactVerticalTimeline;
