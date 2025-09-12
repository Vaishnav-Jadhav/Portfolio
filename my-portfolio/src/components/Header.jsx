import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsCloudDownload } from "react-icons/bs";

import logo from '../assets/signature-logo-main.png'

export function Header()
{
    const[mobileMenu,setMobileMenu]=useState(false);
    const[showHeader,setShowHeader]=useState(true);
    const[lastScrollY,setLastScrollY]=useState(0);

    useEffect(()=>{
         
        function HandleScroll()
        {
            if(window.scrollY>100)
            {
                if(window.scrollY>lastScrollY)
                {
                    setShowHeader(false);
                }
                else{
                    setShowHeader(true);
                }
                setLastScrollY(window.scrollY);
            }
            else{
                setShowHeader(true);
            }

        }

        window.addEventListener("scroll",HandleScroll);

        return()=>{window.removeEventListener("scroll",HandleScroll)}
            

    },[lastScrollY]);


    function handleMobileMenuClick()
    {
        setMobileMenu(!mobileMenu);
    }

    return(
        <header className={`w-full fixed py-2 bg-black text-white transition-transform duration-500 z-50 ${showHeader? "translate-y-0" : "-translate-y-full"}`}>
            <div className="max-w-8xl mx-auto px-5 md:px-[60px] py-3 flex justify-between align-middle text-center">
                {/* Logo */}
                <a href="/#"><img src={logo} alt="logo" /></a>
                {/* dekstop menu */}
                <div className="hidden md:block space-x-4 py-2">
                    <a href="/#home" className="relative text-xl hover:text-red-700">Home</a>
                    <a href="/#about" className="relative text-xl hover:text-red-700">About</a>
                    <a href="/#skills" className="relative text-xl hover:text-red-700">Skills</a>
                    <a href="/#projects" className="relative text-xl hover:text-red-700">Projects</a>
                    <a href="/#experience" className="relative text-xl hover:text-red-700">Experience</a>
                </div>
                {/* contact button */}
                <div className="hidden md:block">
                    <button className="flex border border-red-600 py-2 px-5 rounded-4xl text-xl bg-red-600 hover:bg-red-700 shadow-2xl cursor-pointer">
                        <a href="/public/VaishnavJadhav Resume.pdf" download="VaishnavJadhavResume.pdf">Resume</a><span className="py-1 mx-2"><BsCloudDownload/></span>
                    </button>
                </div>
                {/* mobile menu icons */}
                <div className="block md:hidden py-2">
                    <button className="text-xl py-2" onClick={handleMobileMenuClick}>
                        {mobileMenu?<FaTimes/>:<FaBars/>}
                    </button>
                </div>
            </div>
            {/* monile menu */}
            {mobileMenu && (
                <nav className="md:hidden bg-black pt-2 px-4 ">
                    <div className="w-full">
                        <a href="#home" className="block text-xl border-b py-2 border-gray-600">Home</a>
                        <a href="#about" className="block text-xl border-b py-2 border-gray-600">About</a>
                        <a href="#skills" className="block text-xl border-b py-2 border-gray-600">Skills</a>
                        <a href="#projects" className="block text-xl border-b py-2 border-gray-600">Projects</a>
                        <a href="/#experience" className="block text-xl border-b py-2 border-gray-600">Experience</a>
                    </div>
                    <button className="w-full my-2 bg-red-600 text-xl text- py-2 rounded-md">
                        <a href="/#contacts">contact Me</a>
                    </button>
                    <button className="w-full my-2 bg-red-600 text-xl text- py-2 rounded-md flex justify-center">
                         <a href="/public/VaishnavJadhav Resume.pdf" download="VaishnavJadhavResume.pdf">Download Resume </a><span className="py-1 mx-2"><BsCloudDownload/></span>
                    </button>
                </nav>
            )}
        </header>
    )
}