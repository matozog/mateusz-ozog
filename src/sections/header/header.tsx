import './header.css';

import { GITHUB_URL, LINKED_IND_URL } from '../../constants/constants';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItems from './menu-items/menu-items';
import { useState } from 'react';

const EMAIL_URL = 'mailto:mateusz.ozog.dev@gmail.com?subject=Hello';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleOnClickMenuButton = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="flex flex-col sticky bg-dark-color z-50 top-0">
      <div className="flex flex-row justify-between p-3 h-16 items-center">
        <div className="flex gap-x-5">
          <a
            className="contact-button"
            href={LINKED_IND_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon fontSize="large" />
          </a>
          <a
            className="contact-button"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            className="contact-button"
            href={EMAIL_URL}
            aria-label="Send email"
          >
            <EmailIcon fontSize="large" />
          </a>
        </div>
        <nav aria-label="Main" className="flex items-center gap-x-6 mr-3">
          <MenuItems
            menuClass="hidden md:flex gap-x-6"
            changeMenuState={setMenuOpen}
          />
          <button
            type="button"
            className="flex md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={handleOnClickMenuButton}
          >
            <MenuIcon
              className={`${
                isMenuOpen ? 'rotate-90' : ''
              } transition duration-500`}
            />
          </button>
        </nav>
      </div>
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`md:hidden flex flex-col absolute top-16 bg-dark-color
                     w-full transition-[height,visibility] ease-in-out duration-500 overflow-hidden ${
                       isMenuOpen ? 'mobile-menu-open' : 'mobile-menu-hidden'
                     }`}
      >
        <MenuItems
          menuClass="flex flex-col gap-y-4 mx-auto pt-2"
          changeMenuState={setMenuOpen}
        />
      </nav>
    </header>
  );
};

export default Header;
