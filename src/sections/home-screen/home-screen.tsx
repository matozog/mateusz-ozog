import useResizeHook from '../../hooks/useResizeHook';

const HomeScreen = () => {
    const { isMobile } = useResizeHook();

    return (
        <div className="flex flex-wrap mx-4 md:mx-auto max-w-screen-lg">
            {/* <span className="text-[14rem] flex justify-start w-full leading-[250px]">
                Mateusz
            </span> */}
            <span className="text-6xl flex justify-start w-full leading-loose md:text-[10rem] md:leading-snug">
                Mateusz
            </span>
            <div className="flex justify-end w-full">
                <img
                    src="src/assets/Mateusz_Ozog.jpg"
                    className={`rounded-full ml-4 mb-2 mr-2 border-white ${
                        isMobile ? 'border-4' : 'border-[16px]'
                    } p-2`}
                    width={isMobile ? 100 : 270}
                />
                {/* <span className="text-[14rem] items-center flex">żóg</span> */}
                <span className="text-6xl items-center flex leading-loose md:text-[10rem] md:leading-snug">
                    żóg
                </span>
            </div>
            <div className="flex justify-center w-full text-4xl md:text-8xl md:leading-normal mt-8 mb-8">
                <span>Frontend developer</span>
            </div>
        </div>
    );
};

export default HomeScreen;
