import globe from "../globe.png";
import logo from "../ZELIMO.svg";
import arrow from "../arrow.png";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-green-400 to-blue-500 flex flex-col md:flex-row p-20 md:p-28 mt-10 justify-center items-center">
      <div className="">
        <div className="text-[#7C3D12] text-5xl md:text-8xl font-semibold">
          Reach and Grow Fast with
        </div>
        <div className="">
          <img className="h-10 mt-4 md:h-28" src={logo} alt="logo" />
        </div>
        <div>
          <button className="flex flex-row text-lg md:text-2xl md:p-3 justify-center items-center bg-orange-500 text-white font-semibold px-3 mt-2 rounded-xl"><img src={arrow} alt="Arrow" />Get Ready</button>
        </div>
      </div>
      <div className="">
        <img className="md:h-[50rem] " src={globe} alt="globe" />
      </div>
    </header>
  );
};
