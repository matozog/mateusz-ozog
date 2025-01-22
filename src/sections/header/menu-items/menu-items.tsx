import { FC } from 'react';
import LinkButton from '../../../components/buttons/link-button/link-button';
import { SCROLL_INTO_VIEW_OPTIONS } from '../../../constants/constants';

interface IMenuItemsProps {
  menuClass?: string;
  changeMenuState: (value: boolean) => void;
}

const MenuItems: FC<IMenuItemsProps> = ({ menuClass, changeMenuState }) => {
  const handleOnClickProjectsLink = () => {
    const projectsElement = document.querySelector('#projects-container');
    projectsElement?.scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
    changeMenuState(false);
  };

  const handleOnClickEducationLink = () => {
    const educationElement = document.querySelector('#education-container');
    educationElement?.scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
    changeMenuState(false);
  };

  const handleOnClickExperienceLink = () => {
    const experienceElement = document.querySelector('#experience-title');
    experienceElement?.scrollIntoView(SCROLL_INTO_VIEW_OPTIONS);
    changeMenuState(false);
  };

  return (
    <div className={`${menuClass}`}>
      <LinkButton text="Education" onClick={handleOnClickEducationLink} />
      <LinkButton text="Experience" onClick={handleOnClickExperienceLink} />
      <LinkButton text="Projects" onClick={handleOnClickProjectsLink} />
    </div>
  );
};

export default MenuItems;
