import IMAGES from '../../assets/images';

const HomeScreen = () => {
  return (
    <div className="flex flex-wrap mx-4 md:mx-auto max-w-screen-lg">
      <h1 className="flex flex-wrap w-full" aria-label="Mateusz Ożóg">
        <span className="text-7xl flex justify-center md:justify-start w-full leading-loose sm:text-[10rem] sm:leading-snug animate__animated animate__backInLeft">
          Mateusz
        </span>
        <span className="flex justify-center md:justify-end w-full animate__animated animate__pulse">
          <img
            src={IMAGES.selfiePic}
            alt=""
            width={540}
            height={642}
            className="rounded-full ml-4 mb-2 mr-2 border-white border-4 sm:border-[16px] p-2 w-[120px] sm:w-[270px]"
          />
          <span className="text-7xl items-center flex leading-loose sm:text-[10rem] sm:leading-snug animate__animated animate__backInRight ">
            żóg
          </span>
        </span>
      </h1>
      <p className="flex justify-center w-full text-3xl xs:text-4xl sm:text-6xl lg:text-8xl lg:leading-normal mt-8 mb-8 animate__animated animate__lightSpeedInLeft">
        Software Engineer
      </p>
    </div>
  );
};

export default HomeScreen;
