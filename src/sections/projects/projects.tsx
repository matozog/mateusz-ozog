import { IProjectCard } from '../../components/project-card/project-card';
import ReactCarusel from '../../components/react-carusel/react-carusel';

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
    return (
        <div className="flex justify-center flex-col" id="projects-container">
            <span className="w-100 flex justify-center section-title">
                Projects
            </span>
            {/* <div className="justify-center w-full flex"> */}
            <ReactCarusel projectCards={projects} />
            {/* <ProjectCard /> */}
            {/* </div> */}
        </div>
    );
};

export default Projects;
