import './introduction.css';

const Introduction = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* <div className="ocean">
                <div className="introduction-container"></div>
            </div> */}
      <div
        style={{
          filter: 'drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5))',
        }}
        className="gap-y-8 flex flex-col items-center"
      >
        <div className="sm:mx-0 p-10 max-w-screen-lg introduction-container bg-dark-color ">
          <span className="text-justify block text-lg md:text-2xl leading-relaxed md:leading-[2.5rem] text-white">
            <p>
              Hi! <br />
              My name is Mateusz Ożóg. I graduated from Wroclaw University of
              Science and Technology, Faculty of Electronics, with a Master’s
              degree in Computer Science.
            </p>
            <br />
            <p>
              I have over 6 years of experience as a Frontend Developer, mainly
              working with React. For the past nearly 3 years, I have also been
              expanding into backend development with Java, gradually moving
              towards a more full-stack approach.
            </p>
            <br />
            <p>
              Currently, I focus on building and maintaining a React-based web
              application with an emphasis on scalable and maintainable frontend
              architecture. At the same time, I am also developing Java-based
              backend services using Spring Boot.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
