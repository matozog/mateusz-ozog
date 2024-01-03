import IMAGES from '../../assets/images';
import useResizeHook from '../../hooks/useResizeHook';

const HomeScreen = () => {
    const { isSMBreakpoint } = useResizeHook();

    return (
        <div className="flex flex-wrap mx-4 md:mx-auto max-w-screen-lg">
            <span className="text-7xl flex justify-center md:justify-start w-full leading-loose sm:text-[10rem] sm:leading-snug animate__animated animate__backInLeft">
                Mateusz
            </span>
            <div className="flex justify-center md:justify-end w-full animate__animated animate__pulse">
                <img
                    src={IMAGES.selfiePic}
                    className={`rounded-full ml-4 mb-2 mr-2 border-white ${
                        isSMBreakpoint ? 'border-4' : 'border-[16px]'
                    } p-2`}
                    width={isSMBreakpoint ? 120 : 270}
                />
                <span className="text-7xl items-center flex leading-loose sm:text-[10rem] sm:leading-snug animate__animated animate__backInRight ">
                    żóg
                </span>
            </div>
            <div className="flex justify-center w-full text-3xl xs:text-4xl sm:text-6xl lg:text-8xl lg:leading-normal mt-8 mb-8 animate__animated animate__lightSpeedInLeft">
                <span>Frontend developer</span>
            </div>
        </div>
    );
};

export default HomeScreen;
