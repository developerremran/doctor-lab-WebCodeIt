import React, { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Header = () => {
    const { user } = useContext(AuthContext)
    const [navbar, setNavbar] = useState(false);
    const activeLink =
        "text-white rounded p-2 transition-colors duration-500 bg-pink-600";
    return (
        <div className="MainWidth">
            <nav className="w-full bg-whit">
                <div className="justify-between mx-auto  md:items-center md:flex">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link className="flex items-center">
                                <img className="h-10 " src="https://i.ibb.co/BLmQ1Jc/Logo.jpg" alt="" />
                                <h2 className="text-3xl font-bold">Medi<span className="text-[#2271E7] font-bold">Lab</span></h2>
                            </Link>
                            <div className="md:hidden flex items-center gap-5">
                            <span className="w-[30px] h-[30px]  flex items-center justify-center text-center  text-white bg-[#2271E7] rounded-full">
                                                <BiSearch className="text-2xl"></BiSearch>
                                            </span>
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <div>
                                          
                                            <HiOutlineMenuAlt3 className="w-6 h-6"></HiOutlineMenuAlt3>
                                        </div>
                                    ) : (
                                        <div>

                                            <HiOutlineMenuAlt2 className="w-6 h-6"></HiOutlineMenuAlt2>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-lg text-gray-600 hover:text-blue-600">
                                    <NavLink
                                        className={({ isActive }) => (isActive ? activeLink : "")}
                                        to="/"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="text-gray-600 hover:text-blue-600">
                                    <NavLink
                                        className={({ isActive }) => (isActive ? activeLink : "")}
                                        to="/about"
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="text-gray-600 hover:text-blue-600">
                                    <NavLink
                                        className={({ isActive }) => (isActive ? activeLink : "")}
                                        to="/service"
                                    >
                                        Service
                                    </NavLink>


                                    {/* >>>>> */}


                                </li>


                                {
                                    user ? <li>
                                        <NavLink className={({ isActive }) => (isActive ? activeLink : "")}
                                            to='/'
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li> : <li className="text-gray-600 space-y-8 hover:text-blue-600">
                                        <NavLink
                                            className={({ isActive }) => (isActive ? activeLink : "")}
                                            to="/login"
                                        >
                                            Login
                                        </NavLink>

                                        <div className="lg:hidden md:hidden flex w-[200px]">
                                            <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-[#2271E7] rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                                Contact us
                                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </a>
                                        </div>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="lg:flex items-center gap-8   md:flex hidden">
                        <span className="w-[40px] h-[40px]  flex items-center justify-center text-center  text-white bg-[#2271E7] rounded-full">
                            <BiSearch className="text-3xl"></BiSearch>
                        </span>

                        <div>
                            <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-2 mb-2 text-lg text-white bg-[#2271E7] rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                Contact us
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                        </div>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;