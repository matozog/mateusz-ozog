import Education from './sections/education/education';
import Experience from './sections/experience/experience';
import Footer from './sections/footer/footer';
import Header from './sections/header/header';
import Introduction from './sections/introduction/introduction';
import Projects from './sections/projects/projects';

function App() {
    return (
        <div className="h-full w-full flex flex-col gap-y-4">
            <Header />
            <div className="flex flex-col m-6 mt-2 gap-y-8 justify-center max-w-screen-lg sm:mx-auto mx-4">
                <Introduction />
                <Education />
                <Experience />
                <Projects />
            </div>
            <Footer />
        </div>
    );
}

export default App;
