import './header.css';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkButton from '../../components/buttons/link-button/link-button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import useResizeHook from '../../hooks/useResizeHook';
import { useState } from 'react';

const Header = () => {
    const [isEnglishLanguage, setEnglishLanguage] = useState(true);
    const { isMobile } = useResizeHook();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleOnChangeLanguage = () => setEnglishLanguage(!isEnglishLanguage);

    const handleOnClickEducationLink = () => undefined;

    return (
        <div className="flex flex-row justify-between top-0 sticky m-3">
            <div className="flex gap-x-5">
                <LinkedInIcon className="contact-button" fontSize="large" />
                <GitHubIcon className="contact-button" fontSize="large" />
                <EmailIcon className="contact-button" fontSize="large" />
            </div>
            <div className="flex items-center gap-x-6 mr-3">
                {!isMobile ? (
                    <>
                        <LinkButton
                            text="Education"
                            onClick={handleOnClickEducationLink}
                        />
                        <LinkButton
                            text="Experience"
                            onClick={handleOnClickEducationLink}
                        />
                        <LinkButton
                            text="Projects"
                            onClick={handleOnClickEducationLink}
                        />
                    </>
                ) : (
                    <MenuIcon />
                )}
                {/* <MuiSwitch
                    value={isEnglishLanguage}
                    onClick={handleOnChangeLanguage}
                /> */}
            </div>
        </div>
    );
};

export default Header;
