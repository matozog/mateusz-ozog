import Chip from '@mui/material/Chip';
import { FC } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

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
  return (
    <Chip
      className={`w-fit py-5 text-white bg-dark-color font-[Ubuntu] text-xs md:text-sm ${
        withoutLabelOnMobile ? 'pl-3 sm:px-2' : 'px-2'
      }`}
      avatar={<Icon className="text-white" icon={icon} />}
      // On mobile the label is only visually hidden, so screen readers still announce it
      label={
        <span className={withoutLabelOnMobile ? 'sr-only sm:not-sr-only' : ''}>
          {label}
        </span>
      }
      variant="outlined"
    />
  );
};

export default MuiChip;
