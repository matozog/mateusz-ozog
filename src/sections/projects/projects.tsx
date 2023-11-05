import ProjectCard from '../../components/project-card/project-card';

const Projects = () => {
    return (
        <div className="flex justify-center flex-col">
            <span className="w-100 flex justify-center text-3xl mb-6">
                Projects
            </span>
            <div className="justify-center w-full flex">
                <ProjectCard />
            </div>
        </div>
    );
};

export default Projects;
