import { IProjectCard } from '../../components/project-card/project-card';
import ReactCarusel from '../../components/react-carusel/react-carusel';

const projects: IProjectCard[] = [
    {
        description: 'This is project description',
        linkToGithub: 'https://github.com/',
        linkToWebpage: 'https://github.com/matozog/',
        technologies: ['react', 'typescript', 'java', 'mysql'],
        title: 'Code snippet management',
    },
    {
        description: 'This is project description',
        linkToGithub: 'https://github.com/',
        linkToWebpage: 'https://github.com/matozog/',
        technologies: ['react', 'typescript', 'java', 'mysql'],
        title: 'Code snippet management',
    },
    {
        description: 'This is project description',
        linkToGithub: 'https://github.com/',
        linkToWebpage: 'https://github.com/matozog/',
        technologies: ['react', 'typescript', 'java', 'mysql'],
        title: 'Code snippet management',
    },
    {
        description: 'This is project description',
        linkToGithub: 'https://github.com/',
        linkToWebpage: 'https://github.com/matozog/',
        technologies: ['react', 'typescript', 'java', 'mysql'],
        title: 'Code snippet management',
    },
];

const Projects = () => {
    return (
        <div className="flex justify-center flex-col" id="projects-container">
            <span className="w-100 flex justify-center text-3xl mb-6">
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
