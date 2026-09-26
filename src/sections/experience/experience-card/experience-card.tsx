import { FC, useId, useState } from 'react';

import { IWorkExperience } from '../../../constants/types';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiChip from '../../../components/chip/mui-chip';

type IExperienceCard = Omit<IWorkExperience, 'date'>;

const ExperienceCard: FC<IExperienceCard> = ({
  company,
  position,
  responsibilities,
  technologies,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  const handleOnExpandCard = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex flex-col gap-3 h-full">
      <h3>
        <button
          type="button"
          className="flex items-center justify-between w-full text-left"
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          onClick={handleOnExpandCard}
        >
          <span className="font-bold text-2xl md:text-3xl mr-3 font-[Ubuntu]">
            {position}
          </span>
          <KeyboardArrowDownIcon
            fontSize="large"
            className={`${
              isExpanded ? 'rotate-180' : ''
            } transition duration-500 `}
          />
        </button>
      </h3>
      <div
        id={detailsId}
        aria-hidden={!isExpanded}
        // Animating grid rows 0fr -> 1fr expands to the real content height (no fixed max-height)
        className={`grid transition-[grid-template-rows] ease-in-out duration-500 ${
          isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden min-h-0 font-[Ubuntu] gap-3 flex flex-col">
          <div>
            <span className="font-bold text-lg md:text-xl mr-2">Company:</span>
            <span className="text-xl md:text-2xl font-bold">{company}</span>
          </div>
          <div>
            <span className="flex font-bold text-lg md:text-xl mr-2 mb-1">
              Responsibilities:
            </span>
            <span className="text-lg md:text-xl flex tracking-normal">
              {responsibilities}
            </span>
          </div>
          <div className="flex gap-2 mt-3 flex-wrap overflow-hidden">
            {technologies?.map((technology) => (
              <MuiChip
                label={technology.label}
                icon={technology.icon}
                key={`${company}_${technology.label}`}
                withoutLabelOnMobile
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
