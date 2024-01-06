import './components/styles/common-headers.css';
import 'animate.css';

import Education from './sections/education/education';
import Experience from './sections/experience/experience';
import Footer from './sections/footer/footer';
import Header from './sections/header/header';
import HomeScreen from './sections/home-screen/home-screen';
import Introduction from './sections/introduction/introduction';
import Projects from './sections/projects/projects';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
    }, []);

    return (
        <div className="h-full w-full flex flex-col gap-y-6 overflow-y-auto">
            <Header />
            <HomeScreen />
            <Introduction />
            <div className="flex flex-col m-6 mt-2 gap-y-16 md:gap-y-24 justify-center max-w-screen-lg sm:mx-auto mx-4">
                <Education />
                <Experience />
                <Projects />
            </div>
            <Footer />
        </div>
    );
}

export default App;
