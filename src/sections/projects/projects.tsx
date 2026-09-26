import ReactCarusel from '../../components/react-carusel/react-carusel';
import { projects } from '../../data/projects';
import useIntersectionHook from '../../hooks/useIntersectionHook';
import { useRef } from 'react';

const Projects = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const { isVisible } = useIntersectionHook(headerRef);

  return (
    <section
      className="flex justify-center flex-col scroll-mt-20"
      id="projects"
    >
      <h2
        ref={headerRef}
        className={`w-full flex justify-center section-title ${
          isVisible ? 'animate__pulse' : ''
        } animate__animated`}
      >
        Projects
      </h2>
      <ReactCarusel projectCards={projects} />
    </section>
  );
};

export default Projects;
