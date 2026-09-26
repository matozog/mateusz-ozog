import { FC } from 'react';
import Link from '@mui/material/Link';

interface IMenuItemsProps {
  menuClass?: string;
  changeMenuState: (value: boolean) => void;
}

const MENU_ITEMS = [
  { text: 'Education', href: '#education' },
  { text: 'Experience', href: '#experience' },
  { text: 'Projects', href: '#projects' },
];

const MenuItems: FC<IMenuItemsProps> = ({ menuClass, changeMenuState }) => {
  const handleOnClickMenuItem = () => changeMenuState(false);

  return (
    <div className={`${menuClass}`}>
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          underline="hover"
          color="inherit"
          className="text-xl hover:text-main-green focus-visible:text-main-green focus-visible:underline"
          onClick={handleOnClickMenuItem}
        >
          {item.text}
        </Link>
      ))}
    </div>
  );
};

export default MenuItems;
