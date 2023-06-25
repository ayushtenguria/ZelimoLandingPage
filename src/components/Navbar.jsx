import logo from "../ZELIMO.svg"
import loginButton from "../Rectangle.png"

export const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center space-x-2 mx-8 my-4 bg-[#D9D9D961] drop-shadow-xl px-10 h-16 rounded-2xl">
        <div>
          <img src={logo} alt="LogoZelimo" />
        </div>
        <div>
          <ul className=" hidden md:flex justify-between items-center space-x-8">
            <li className="bg-[#FFE6D5] h-8 w-auto font-semibold px-4 text-[#C2570C] rounded-md p-1">Feature and Services</li>
            <li className="bg-[#FFE6D5] h-8 w-auto font-semibold px-4 text-[#C2570C] rounded-md p-1">About Us</li>
            <li className="bg-[#FFE6D5] h-8 w-auto font-semibold px-4 text-[#C2570C] rounded-md p-1">Princing</li>
            <li className="bg-[#FFE6D5] h-8 w-auto font-semibold px-4 text-[#C2570C] rounded-md p-1">Chat with Us</li>
          </ul>
        </div>
        <div className="flex">
          <button className="bg-[#F97316] font-bold text-lg text-[#FFF4ED] px-3 py-2 rounded-2xl flex space-x-2 justify-between items-center"><img src={loginButton} alt="navButton" />Login</button>
        </div>
      </nav>
    </div>
  );
};
