import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import { FC } from 'react';

interface IFooterProps {
  onOpenCookieSettings: () => void;
}

const Footer: FC<IFooterProps> = ({ onOpenCookieSettings }) => {
  return (
    <footer className="relative flex justify-center items-center bg-dark-color py-4 px-14">
      <span className="text-lg md:text-xl">
        © {new Date().getFullYear()} M@teusz Ożóg
      </span>
      <button
        type="button"
        className="absolute right-4 top-1/2 -translate-y-1/2 flex text-white/40 hover:text-white/80 focus-visible:text-white/80 transition-colors"
        aria-label="Cookie settings"
        title="Cookie settings"
        onClick={onOpenCookieSettings}
      >
        <CookieOutlinedIcon />
      </button>
    </footer>
  );
};

export default Footer;
