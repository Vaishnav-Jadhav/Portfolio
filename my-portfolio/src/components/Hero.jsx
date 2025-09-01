import React from "react";
import logo from '../assets/myself.png'

export function Hero() {
  return (
    <section className="bg-black text-white pt-[180px] lg:h-auto py-3 lg:py-[180px] pb-10" id="home">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-0" >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-[90px] font-semibold leading-tight">
            <span>HELLOWWW.</span> <br />
            <span>it's,</span><br />
            Vaishnav Jadhav <br />
            <span className="text-white">Software Developer.</span>
          </h1>

          <button className="mt-8 inline-flex items-center cursor-pointer px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 transition duration-300 text-lg font-medium shadow-lg">
            <a href="/#contacts">Contact Me</a>
            <span className="ml-2 text-xl">→</span>
          </button>
        </div>
        <div className="mt-10 md:mt-0  justify-center hidden">
          <img src={logo} alt="Vaishnav Jadhav" className="w-full max-w-lg object-bottom-right"/>
        </div>
      </div>
    </section>
  );
}
