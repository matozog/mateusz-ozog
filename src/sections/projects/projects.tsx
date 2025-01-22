import { IProjectCard } from '../../components/project-card/project-card';
import ReactCarusel from '../../components/react-carusel/react-carusel';
import useIntersectionHook from '../../hooks/useIntersectionHook';
import { useRef } from 'react';

const projects: IProjectCard[] = [
  {
    description: 'This is project description',
    linkToGithub: 'https://github.com/matozog/code-snippets-manager-fe',
    linkToWebpage: 'https://matozog.github.io/code-snippets-manager-fe/#/',
    technologies: ['react', 'typescript', 'java', 'mysql'],
    title: 'Code snippet manager',
  },
];

const Projects = () => {
  const headerRef = useRef<HTMLElement | null>(null);
  const { isVisible } = useIntersectionHook(headerRef);

  return (
    <div className="flex justify-center flex-col" id="projects-container">
      <span
        ref={headerRef}
        className={`w-100 flex justify-center section-title ${
          isVisible ? 'animate__pulse' : ''
        } animate__animated`}
      >
        Projects
      </span>
      <ReactCarusel projectCards={projects} />
    </div>
  );
};

export default Projects;
