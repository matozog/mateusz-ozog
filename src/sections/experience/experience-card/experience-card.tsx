import { FC, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiChip from '../../../components/chip/mui-chip';

export interface ITechnology {
    label: string;
    icon: string;
}

export interface IExperienceCard {
    position: string;
    company: string;
    responsibilities: string;
    technologies?: ITechnology[];
}

const ExperienceCard: FC<IExperienceCard> = ({
    company,
    position,
    responsibilities,
    technologies,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOnExpandCard = () => setIsExpanded(!isExpanded);

    return (
        <div className="flex flex-col gap-3 h-full">
            <div
                className="flex items-center justify-between w-full hover:cursor-pointer"
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
            </div>
            <div
                className={`transition-max-height ease-in-out duration-500 h-auto font-[Ubuntu] gap-3 flex flex-col`}
                style={{
                    maxHeight: isExpanded ? '450px' : 0,
                    overflow: 'hidden',
                }}
            >
                <div>
                    <span className="font-bold text-lg md:text-xl mr-2">
                        Company:
                    </span>
                    <span className="text-xl md:text-2xl font-bold">
                        {company}
                    </span>
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
    );
};

export default ExperienceCard;
