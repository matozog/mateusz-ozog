import { FC, MouseEventHandler } from 'react';

import { Switch } from '@mui/material';

interface IMuiSwitch {
  value: boolean;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const MuiSwitch: FC<IMuiSwitch> = ({ value, onClick }) => {
  return (
    <div>
      <span>PL</span>
      <Switch value={value} onClick={onClick} />
      <span>ENG</span>
    </div>
  );
};

export default MuiSwitch;
