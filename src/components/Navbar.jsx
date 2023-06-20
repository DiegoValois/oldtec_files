import { useState } from "react";
import { close, logo, menu } from '../assets';
import { features, navLinks } from '../constants';
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const { signout } = useAuth();

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="oldtec" className="w-[124px] h-[32px]"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li className="text-nav mr-10">
          <Link to="/">Home</Link>
        </li>
          <li className="text-nav mr-10">
          <a href={`#features`}>Negócios</a>
        </li>
          <li className="text-nav mr-10">
          <Link to="/games">Jogar</Link>
        </li>
        <li className="text-nav">
          <Link to="/signin">Login</Link> 
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div 
            className={`${toggle ? 'flex' : 'hidden'}
            p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              <li className="text-nav mb-4">
                <Link to="/">Home</Link>
              </li>
                <li className="text-nav mb-4">
                <a href={`#features`}>Negócios</a>
              </li>
                <li className="text-nav mb-4">
                <Link to="/games">Jogar</Link>
              </li>
              <li className="text-nav">
                <Link to="/signin">Login</Link> 
              </li>
            </ul>
          </div>
      </div>

    </nav>
  )
};

export default Navbar;
