import { FC } from 'react';
import { IEducationData } from '../../../constants/types';

interface IEducationItemDetailsProps {
  educationData: IEducationData;
}

const EducationItemDetails: FC<IEducationItemDetailsProps> = ({
  educationData,
}) => {
  return (
    <div className="flex flex-col text-lg md:text-xl mx-4 gap-3 border-t">
      <span className="pt-4 text-xl md:text-2xl font-bold">
        {educationData.university}
      </span>
      <div className="gap-3 flex md:items-center">
        <span className="text-lg md:text-xl font-bold whitespace-nowrap">
          Field of study:
        </span>
        <span>{educationData.fieldOfStudy}</span>
      </div>
      <div className="flex gap-3 md:items-center">
        <span className="text-lg md:text-xl font-bold whitespace-nowrap">
          Thesis topic:
        </span>
        <span>{educationData.thesisTopic}</span>
      </div>
    </div>
  );
};

export default EducationItemDetails;
