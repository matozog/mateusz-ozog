const Introduction = () => {
    return (
        <div className="sm:mx-0 mx-4">
            <div className="float-right">
                <img
                    src="src/assets/Mateusz_Ozog.jpg"
                    className="rounded-full ml-4 mb-2 mr-2"
                    width={175}
                />
            </div>
            <span className="text-justify block text-lg leading-relaxed">
                Hi everyone! My name is Mateusz Ożóg and here are a few words
                about me. I graduated Wroclaw University of Science and
                Technology at the department of Electronics where I achieved my
                master's degree in computer science. Currently I have above 3
                years experience in working as a Software Engineer and Frontend
                developer. My current position is strongly connected with
                frontend tasks, especially with a web application using React
                technology.
            </span>
        </div>
    );
};

export default Introduction;
