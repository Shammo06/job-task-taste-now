import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import { IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

import './navbar.css'


const Navbar = () => {
    return (
      <nav>
        <input type="checkbox" id='mark' />
        <label htmlFor="mark" >
            <IoMdMenu id='btn'/>
            <RxCross1 id='cancel' />
        </label>
        
        <label className='logo'><img className="" src={logo} alt="" /></label>
        <ul>
             <li><NavLink  to='/'><a>Home</a></NavLink></li>
             <li><NavLink  to='/about'><a>About us</a></NavLink></li>
             <li><NavLink  to='blog'><a>Blog</a></NavLink></li>
             <li><NavLink  to='/contact'><a>Contact us</a></NavLink></li>
             <li><NavLink  to='/cart'><a><IoCartOutline></IoCartOutline></a></NavLink></li>
             <li><button>Sign up</button></li>
         </ul>
    </nav>
    );
};

export default Navbar;