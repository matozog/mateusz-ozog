import { FC, useState } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface IExperienceCard {
    position: string;
    company: string;
    responsibilities: string;
}

const ExperienceCard: FC<IExperienceCard> = ({
    company,
    position,
    responsibilities,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleOnExpandCard = () => setIsExpanded(!isExpanded);

    return (
        <div className="flex flex-col gap-3 h-full">
            <div className="flex items-center justify-between w-full">
                <span className="font-bold text-2xl md:text-3xl mr-3">
                    {position}
                </span>
                <KeyboardArrowDownIcon
                    fontSize="large"
                    className={`hover:cursor-pointer ${
                        isExpanded ? 'rotate-180' : ''
                    } transition duration-500 `}
                    onClick={handleOnExpandCard}
                />
            </div>
            <div
                className={`transition-max-height ease-in-out duration-500 h-auto`}
                style={{
                    maxHeight: isExpanded ? '350px' : 0,
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
            </div>
        </div>
    );
};

export default ExperienceCard;
