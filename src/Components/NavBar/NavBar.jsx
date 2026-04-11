import React, { useState } from 'react'
import style from "./NavBar.module.css"
import logo from "../../assets/11.png"
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
    const [openPhoneList, setOpenPhoneList] = useState(false);

    // Toggle function simplified
    const toggleMenu = () => setOpenPhoneList(prev => !prev);

    return <>
        {/* Mobile Overlay Menu */}
        <div className={`fixed inset-0 h-[100vh] w-[40%] z-30 transition-all ${openPhoneList ? "visible" : "invisible"}`}>
            {/* Layer 1 (Green) */}
            <div className={`h-full w-[80%] fixed top-0 bg-blue-500 transition-all duration-500 rounded-l-2xl ease-in-out ${openPhoneList ? "right-0" : "right-[-100%]"}`}>
                {/* Layer 2 (Cyan) */}
                <div className={`h-full w-[80%] fixed top-0 bg-cyan-500 transition-all duration-500 delay-100 rounded-l-2xl ease-in-out ${openPhoneList ? "right-0" : "right-[-100%]"}`}>
                    {/* Layer 3 (White - Main Content) */}
                    <div className={`h-full w-[80%] md:w-[40%] fixed top-0 right-0 bg-white transition-all duration-500 rounded-l-2xl  delay-200 ease-in-out flex flex-col p-10 ${openPhoneList ? "translate-x-0" : "translate-x-full"}`}>
                        <IoMdClose   size={30}   className="self-end cursor-pointer text-gray-700"   onClick={toggleMenu} />
                        <nav className="mt-10 flex flex-col gap-4 text-xl font-semibold text-gray-800">
                            <NavLink to="/" className={`text-[30px] font-bold`} onClick={toggleMenu}>Home</NavLink>
                            <NavLink to="/services" className={`text-[30px] font-bold`} onClick={toggleMenu}>Our Services</NavLink>
                            <NavLink to="/contact" className={`text-[30px] font-bold`} onClick={toggleMenu}>Contact Us</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </div>




        {/* Main Header */}
        <header className={`${style.NavContainer} text-white w-full z-20 sticky top-0 bg-gray-700 px-4 py-2 flex justify-between items-center animate__animated  animate__fadeInDown`}>
            <div className='flex items-center gap-2'>
                <img src={logo} className='w-19' alt="Logo" />
                <h3 className="text-xl font-bold ms-[-16px]"><Link to="/" >MedT</Link></h3>
            </div>

            <div className="flex items-center">
                {/* Burger Icon for Mobile */}
                <div onClick={toggleMenu} className="md:hidden cursor-pointer z-50">
                    <FaBars size={24} />
                </div>

                {/* PC List - Hidden on mobile, shown on md screens */}
                <ul className="hidden md:flex font-medium space-x-8 pe-4">
                    <li><NavLink to="/" className="hover:text-cyan-400 ">Home</NavLink></li>
                    <li><NavLink to="/OurServices" className="hover:text-cyan-400">Our Services</NavLink></li>
                    <li><NavLink to="/ContactUs" className="hover:text-cyan-400">Contact Us</NavLink></li>
                </ul>
            </div>
        </header>
    </>
}