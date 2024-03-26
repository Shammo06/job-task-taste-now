import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import menu from '../../assets/fi_menu.png'
import { IoCartOutline } from "react-icons/io5";

import './navbar.css'

const Navbar = () => {
    return (
     <nav className="">
        <div className="navbar-start">
           <div>
            <div
                tabIndex={0}
                role="button"
                className="menu"            
            >
                <img src={menu} alt="" />
            </div>           

            <ul
              tabIndex={0}
              className=""
            >

            </ul>
        </div>
       <div className=""><NavLink to="/"><img className="" src={logo} alt="" /></NavLink></div>
     </div>
        <div className="navbar-end">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li><IoCartOutline></IoCartOutline></li>
            </ul>
            <button>Sign up</button>
        </div>
     </nav>
    );
};

export default Navbar;