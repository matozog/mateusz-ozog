import './project-card.css';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';

import { FC } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export interface IProjectCard {
    title: string;
    description: string;
    technologies: string[];
    linkToGithub: string;
    linkToWebpage: string;
}

interface IProjectCardProps {
    projectCard: IProjectCard;
}

const ProjectCard: FC<IProjectCardProps> = ({ projectCard }) => {
    const handleOnClickGithub = () => {
        window.open(projectCard.linkToGithub, '_blank');
    };

    const handleOnClickOpenInNew = () => {
        window.open(projectCard.linkToWebpage, '_blank');
    };

    return (
        <Card
            sx={{ maxWidth: 500 }}
            className="bg-dark-color text-white h-full flex flex-col p-1 md:p-2 rounded-2xl"
        >
            <CardContent className="text-white flex-col flex-1 flex p-2 md:p-4">
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-3xl md:text-4xl font-[Ubuntu] text-center mb-6"
                >
                    {projectCard.title}
                </Typography>
                <div className="h-full">
                    <iframe
                        src="https://matozog.github.io/code-snippets-manager-fe/#/"
                        height="100%"
                        width="100%"
                    />
                </div>
                {/* <Typography
                    variant="body2"
                    className="text-white text-2xl font-[Ubuntu]"
                >
                    {projectCard.description}
                </Typography>
                <div className="flex gap-4">
                    {projectCard.technologies.map((technique, index) => (
                        <Typography
                            key={`${projectCard.title}_${technique}-${index}`}
                            variant="body2"
                            className="text-white text-lg font-[Ubuntu]"
                        >
                            {technique}
                        </Typography>
                    ))}
                </div> */}
            </CardContent>
            <CardActions className="flex justify-center">
                <Button
                    variant="outlined"
                    size="small"
                    className="card-action-button"
                    onClick={handleOnClickGithub}
                >
                    <GitHubIcon className="text-main-green" />
                    <span className="card-action-button-label ml-2">
                        Open GitHub
                    </span>
                </Button>
                <Button
                    className="card-action-button"
                    variant="outlined"
                    size="small"
                    onClick={handleOnClickOpenInNew}
                >
                    <span className="card-action-button-label mr-2 ">
                        Open in browser
                    </span>
                    <OpenInNewIcon className="text-main-green" />
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
