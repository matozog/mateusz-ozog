import {
  BootstrapTech,
  FETechStack,
  JavaTech,
  JenkinsTech,
  SpringBootTech,
  ViteTech,
  WebComponentTech,
  WebpackTech,
} from '../constants/icons';

import { IWorkExperience } from '../constants/types';

// Used by the introduction to keep "years of experience" up to date
export const FRONTEND_CAREER_START = new Date(2020, 2); // 03.2020
export const BACKEND_CAREER_START = new Date(2023, 9); // 10.2023

export const workExperienceData: IWorkExperience[] = [
  {
    company: 'PIT-RADWAR',
    position: 'Software Engineer',
    responsibilities:
      'Building and maintaining a React-based web application with an emphasis on scalable and maintainable frontend architecture. Developing Java backend services using Spring Boot.',
    date: '10.2023 - present',
    technologies: [
      ...FETechStack,
      JavaTech,
      SpringBootTech,
      BootstrapTech,
      ViteTech,
      JenkinsTech,
    ],
  },
  {
    company: 'Makolab',
    position: 'Front-end Developer',
    responsibilities: 'Creating web components used on Toyota and Lexus pages.',
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
