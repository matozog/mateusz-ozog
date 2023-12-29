import {
    BootstrapTech,
    FETechStack,
    JavaTech,
    JenkinsTech,
    ViteTech,
    WebComponentTech,
    WebpackTech,
} from '../../constants/icons';
import ExperienceCard, {
    IExperienceCard,
} from './experience-card/experience-card';

import { ITimelineElementProps } from '../../components/vertical-timeline/react-vertical-timeline';

interface IWorkExperienceData extends IExperienceCard {
    date: string;
}

const workExperienceData: IWorkExperienceData[] = [
    {
        company: 'PIT-RADWAR',
        position: 'Software Engineer',
        responsibilities: 'Creating mainly client side for web application.',
        date: '10.2023 - present',
        technologies: [...FETechStack, BootstrapTech, ViteTech, JenkinsTech],
    },
    {
        company: 'Makolab',
        position: 'Front-end Developer',
        responsibilities:
            'Creating web components used on Toyota and Lexus pages.',
        date: '02.2022 - 07.2023',
        technologies: [...FETechStack, WebComponentTech, WebpackTech],
    },
    {
        company: 'Capgemini',
        position: 'Junior Software Engineer',
        responsibilities:
            'Creating a new system used for planning shift work. My main responsibilities were creating client application and maintenance work as a tech lead.',
        date: '09.2020 - 01.2022',
        technologies: [...FETechStack, JavaTech, WebpackTech],
    },
    {
        company: 'Capgemini',
        position: 'Intern',
        responsibilities:
            'Maintenance work and development of new features to existing applications which support the employee internal system (salaries, holidays etc.).',
        date: '03.2020 - 08.2020',
        technologies: [...FETechStack, JavaTech],
    },
];

const timeElements: Array<ITimelineElementProps> = workExperienceData.map(
    (exp) => ({
        date: exp.date,
        content: (
            <ExperienceCard
                company={exp.company}
                position={exp.position}
                responsibilities={exp.responsibilities}
                technologies={exp.technologies}
            />
        ),
    })
);

export { timeElements };
