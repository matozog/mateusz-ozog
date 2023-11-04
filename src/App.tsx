import Education from './sections/education/education';
import Experience from './sections/experience/experience';
import Header from './sections/header/header';
import Introduction from './sections/introduction/introduction';

function App() {
    return (
        <div className="h-full w-full flex flex-col gap-y-4">
            <Header />
            <div className="flex flex-col m-6 gap-y-4 justify-center max-w-screen-lg mx-auto">
                <Introduction />
                <Education />
                <Experience />
            </div>
        </div>
    );
}

export default App;
