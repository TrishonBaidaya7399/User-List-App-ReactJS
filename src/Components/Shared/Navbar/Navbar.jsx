// import PropTypes from 'prop-types';
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const navLinks = (
    <div className="lg:flex gap-6 font-semibold text-white">
      {/* <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-bold border-b-[3px] border-purple-600 pb-1 border-[transparent] "
            : "text-purple-400 border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-purple-400 duration-300 hover:text-purple-600"
        }
        to="/"
      >
        <li>Home</li>
      </NavLink> */}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-bold border-b-[3px] border-purple-600 pb-1 border-[transparent] "
            : "text-purple-400 border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-purple-400 duration-300 hover:text-purple-600"
        }
        to="/"
      >
        <li>Users</li>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-purple-600 font-bold border-b-[3px] border-purple-600 pb-1 border-[transparent] "
            : "text-purple-400 border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-purple-400 duration-300 hover:text-purple-600"
        }
        to="/addUser"
      >
        <li>Add User</li>
      </NavLink>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-purple-600/10 backdrop-blur-md drop-shadow-xl px-2 md:px-12 lg:px-[100px]">
        <div className="navbar-start">
          <div className="flex justify-center items-center gap-4">
            <img
              src="https://i.ibb.co/mG3HjpQ/7153150.png"
              alt="users list app"
              className="-mr-3 h-8 md:h-12 w-8 md:w-12 border-2 border-purple-400 rounded-full"
            />
            <h1>
            <a className="text-xl md:text-3xl gradient-text">UsersInfo</a>
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
        
        </div>
        <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:block">{navLinks}</ul>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={()=> setOpen(!open)}>
              {
                open 
                ?
                <MdClose className="text-3xl text-purple-600"/>
                :
                <MdMenu className="text-3xl text-purple-600"/> 
              }
            </div>
            {
              open &&
              <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[100] py-2 shadow bg-white/50 backdrop-blur-md rounded-md w-[100px] px-4 -ml-[90px] -mt-8"
            >
              {navLinks}
            </ul>
            }
          </div>
        </div>
        
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
