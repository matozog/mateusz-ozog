import './introduction.css';

import {
  BACKEND_CAREER_START,
  FRONTEND_CAREER_START,
} from '../../data/experience';

import describeDurationSince from '../../utils/describeDurationSince';

const Introduction = () => {
  return (
    <section aria-label="Introduction" className="relative">
      <div className="introduction-shadow gap-y-8 flex flex-col items-center">
        <div className="sm:mx-0 p-10 max-w-screen-lg introduction-container bg-dark-color ">
          <div className="text-justify flex flex-col gap-y-7 md:gap-y-10 text-lg md:text-2xl leading-relaxed md:leading-[2.5rem] text-white">
            <p>
              Hi! <br />
              My name is Mateusz Ożóg. I graduated from Wroclaw University of
              Science and Technology, Faculty of Electronics, with a Master’s
              degree in Computer Science.
            </p>
            <p>
              I have {describeDurationSince(FRONTEND_CAREER_START)} of
              experience as a Frontend Developer, mainly working with React. For
              the past {describeDurationSince(BACKEND_CAREER_START)}, I have
              also been expanding into backend development with Java, gradually
              moving towards a more full-stack approach.
            </p>
            <p>
              Currently, I focus on building and maintaining a React-based web
              application with an emphasis on scalable and maintainable frontend
              architecture. At the same time, I am also developing Java-based
              backend services using Spring Boot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
