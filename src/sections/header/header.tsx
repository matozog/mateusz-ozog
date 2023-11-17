import './header.css';

import { GITHUB_URL, LINKED_IND_URL } from '../../constants/constants';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItems from './menu-items/menu-items';
import useResizeHook from '../../hooks/useResizeHook';
import { useState } from 'react';

const Header = () => {
    const [isEnglishLanguage, setEnglishLanguage] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { isMobile } = useResizeHook();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleOnChangeLanguage = () => setEnglishLanguage(!isEnglishLanguage);

    const handleOnClickContactButton = (url: string) => {
        window.open(url, '_blank');
    };

    const handleOnClickEmailButton = () => {
        window.open('mailto:mateusz.ozog.dev@gmail.com?subject=Hello');
    };

    const handleOnClickMenuItem = () => setMenuOpen(!isMenuOpen);

    return (
        <div className="flex flex-col sticky bg-dark-color z-50 top-0">
            <div className="flex flex-row justify-between p-3 h-16 items-center">
                <div className="flex gap-x-5">
                    <LinkedInIcon
                        className="contact-button"
                        fontSize="large"
                        onClick={() =>
                            handleOnClickContactButton(LINKED_IND_URL)
                        }
                    />
                    <GitHubIcon
                        className="contact-button"
                        fontSize="large"
                        onClick={() => handleOnClickContactButton(GITHUB_URL)}
                    />
                    <EmailIcon
                        className="contact-button"
                        fontSize="large"
                        onClick={() => handleOnClickEmailButton()}
                    />
                </div>
                <div className="flex items-center gap-x-6 mr-3">
                    {!isMobile ? (
                        <>
                            <MenuItems menuClass="flex gap-x-6" />
                        </>
                    ) : (
                        <MenuIcon
                            onClick={handleOnClickMenuItem}
                            className={`${
                                isMenuOpen ? 'rotate-90' : ''
                            } transition duration-500`}
                        />
                    )}
                    {/* <MuiSwitch
                    value={isEnglishLanguage}
                    onClick={handleOnChangeLanguage}
                /> */}
                </div>
            </div>
            {isMobile && (
                <div
                    className={`flex flex-col absolute top-16 bg-dark-color
                     pt-2 w-full transition-height ease-in-out duration-500 overflow-hidden ${
                         isMobile && isMenuOpen
                             ? 'mobile-menu-open'
                             : 'mobile-menu-hidden'
                     }`}
                >
                    <MenuItems menuClass="flex flex-col gap-y-4 mx-auto" />
                </div>
            )}
        </div>
    );
};

export default Header;
