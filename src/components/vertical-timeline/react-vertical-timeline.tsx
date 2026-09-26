import 'react-vertical-timeline-component/style.min.css';
import './react-vertical-timeline.css';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { DARK_COLOR, MAIN_GREEN } from '../../constants/colors';

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
            background: DARK_COLOR,
            color: '#fff',
          }}
          contentArrowStyle={{
            borderRight: `7px solid ${DARK_COLOR}`,
          }}
          iconStyle={{
            background: MAIN_GREEN,
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
