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
import { IProject } from '../../constants/types';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface IProjectCardProps {
  projectCard: IProject;
}

const ProjectCard: FC<IProjectCardProps> = ({ projectCard }) => {
  return (
    <Card
      sx={{ maxWidth: 500 }}
      className="bg-dark-color text-white h-full flex flex-col p-1 md:p-2 rounded-2xl"
    >
      <CardContent className="text-white flex-col flex-1 flex p-2 md:p-4">
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          className="text-3xl md:text-4xl font-[Ubuntu] text-center mb-6"
        >
          {projectCard.title}
        </Typography>
        <div className="h-full">
          <iframe
            src={projectCard.linkToWebpage}
            title={`${projectCard.title} preview`}
            loading="lazy"
            height="100%"
            width="100%"
          />
        </div>
      </CardContent>
      <CardActions className="flex justify-center">
        <Button
          variant="outlined"
          size="small"
          className="card-action-button"
          href={projectCard.linkToGithub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="text-main-green" />
          <span className="card-action-button-label ml-2">Open GitHub</span>
        </Button>
        <Button
          className="card-action-button"
          variant="outlined"
          size="small"
          href={projectCard.linkToWebpage}
          target="_blank"
          rel="noopener noreferrer"
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
