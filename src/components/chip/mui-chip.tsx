import { FC, useMemo } from 'react';

import Chip from '@mui/material/Chip';
import { Icon } from '@iconify/react/dist/iconify.js';
import useResizeHook from '../../hooks/useResizeHook';

interface IMuiChipProps {
    label: string;
    icon: string;
    withoutLabelOnMobile?: boolean;
}

const MuiChip: FC<IMuiChipProps> = ({
    label,
    icon,
    withoutLabelOnMobile = false,
}) => {
    const { isSMBreakpoint } = useResizeHook();

    const withoutLabel = useMemo(
        () => isSMBreakpoint && withoutLabelOnMobile,
        [isSMBreakpoint, withoutLabelOnMobile]
    );
    return (
        <>
            {withoutLabel ? (
                <Chip
                    className="w-fit py-5 text-white bg-dark-color font-[Ubuntu] text-xs md:text-sm pl-3"
                    avatar={<Icon className="text-white" icon={icon} />}
                    variant="outlined"
                />
            ) : (
                <Chip
                    className="w-fit px-2 py-5 text-white bg-dark-color font-[Ubuntu] text-xs md:text-sm"
                    avatar={<Icon className="text-white" icon={icon} />}
                    label={label}
                    variant="outlined"
                />
            )}
        </>
    );
};

export default MuiChip;
