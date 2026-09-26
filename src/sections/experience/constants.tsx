import ExperienceCard from './experience-card/experience-card';
import { ITimelineElementProps } from '../../components/vertical-timeline/react-vertical-timeline';
import { workExperienceData } from '../../data/experience';

const timeElements: Array<ITimelineElementProps> = workExperienceData.map(
  ({ date, ...experience }) => ({
    date,
    content: <ExperienceCard {...experience} />,
  })
);

export { timeElements };
