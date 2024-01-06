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
                        Hi everyone! My name is Mateusz Ożóg and here are a few
                        words about me. I graduated Wroclaw University of
                        Science and Technology at the department of Electronics
                        where I achieved my master's degree in computer science.
                        Currently I have above 3 years experience in working as
                        a Software Engineer and Frontend developer. My current
                        position is strongly connected with frontend tasks,
                        especially with a web application using React
                        technology.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Introduction;
