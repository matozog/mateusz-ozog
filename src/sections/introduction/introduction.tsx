import './introduction.css';

const Introduction = () => {
    return (
        <div
            style={{
                filter: 'drop-shadow(-1px 6px 3px rgba(0, 0, 0, 0.5))',
            }}
        >
            <div className="sm:mx-0 introduction-container bg-black p-10">
                <div className="float-right">
                    <img
                        src="src/assets/Mateusz_Ozog.jpg"
                        className="rounded-full ml-4 mb-2 mr-2 border-white border-2 p-2"
                        width={125}
                    />
                </div>
                <span className="text-justify block text-lg leading-relaxed">
                    Hi everyone! My name is Mateusz Ożóg and here are a few
                    words about me. I graduated Wroclaw University of Science
                    and Technology at the department of Electronics where I
                    achieved my master's degree in computer science. Currently I
                    have above 3 years experience in working as a Software
                    Engineer and Frontend developer. My current position is
                    strongly connected with frontend tasks, especially with a
                    web application using React technology.
                </span>
            </div>
        </div>
    );
};

export default Introduction;
