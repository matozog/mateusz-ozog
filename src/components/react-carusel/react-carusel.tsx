import 'react-multi-carousel/lib/styles.css';

import ProjectCard, { IProjectCard } from '../project-card/project-card';

import Carousel from 'react-multi-carousel';
import { FC } from 'react';

interface IReactCaruselProps {
    projectCards: IProjectCard[];
}

const ReactCarusel: FC<IReactCaruselProps> = ({ projectCards }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={true}
            // autoPlaySpeed={3000}
            keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            containerClass="carousel-container justify-center"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="px-2 mb-8 md:!w-[500px] h-[500px]"
        >
            {projectCards.map((card, index) => (
                <ProjectCard
                    key={`${card.title}-${index}`}
                    projectCard={card}
                />
            ))}
        </Carousel>
    );
};

export default ReactCarusel;
