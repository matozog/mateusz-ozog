import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@mui/material';

import { FC } from 'react';

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
    return (
        <Card sx={{ maxWidth: 345 }} className="bg-black text-white">
            <CardContent className="text-white">
                <Typography gutterBottom variant="h5" component="div">
                    {projectCard.title}
                </Typography>
                <Typography variant="body2" className="text-white">
                    {projectCard.description}
                </Typography>
                <div className="flex gap-4">
                    {projectCard.technologies.map((technique, index) => (
                        <Typography
                            key={`${projectCard.title}_${technique}-${index}`}
                            variant="body2"
                            className="text-white"
                        >
                            {technique}
                        </Typography>
                    ))}
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Open in browser</Button>
                <Button size="small">Open GitHub</Button>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
