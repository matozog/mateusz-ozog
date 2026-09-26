import 'react-multi-carousel/lib/styles.css';

import Carousel from 'react-multi-carousel';
import { FC } from 'react';
import { IProject } from '../../constants/types';
import ProjectCard from '../project-card/project-card';

interface IReactCaruselProps {
  projectCards: IProject[];
}

const RESPONSIVE = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ReactCarusel: FC<IReactCaruselProps> = ({ projectCards }) => {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={RESPONSIVE}
      ssr={false}
      infinite={true}
      keyBoardControl={true}
      containerClass="carousel-container justify-center"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="px-2 mb-8 md:!w-[500px] h-[500px]"
    >
      {projectCards.map((card) => (
        <ProjectCard key={card.title} projectCard={card} />
      ))}
    </Carousel>
  );
};

export default ReactCarusel;
