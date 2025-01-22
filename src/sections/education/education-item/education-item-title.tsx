import './education-item.css';

import { FC } from 'react';
import { IEducationData } from '../../../constants/types';
import Typography from '@mui/material/Typography';

interface IEducationItemTitleProps {
  educationData: IEducationData;
}

const EducationItemTitle: FC<IEducationItemTitleProps> = ({
  educationData,
}) => {
  return (
    <div className="flex">
      <Typography className="education-title-date whitespace-nowrap">
        {educationData.date}
      </Typography>
      <Typography className="education-title">
        {educationData.studentTitle}
      </Typography>
    </div>
  );
};

export default EducationItemTitle;
