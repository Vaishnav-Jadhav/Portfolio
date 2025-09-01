import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import logo from '../assets/signature-logo-main.png'

export function ContactMe() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#0b0f14] text-white px-4">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center leading-tight" id="contacts">
        Thanks for Visitinggg..
        <br /> 
        Let's Connect!
      </h1>

      {/* Contact Buttons */}
      <div className="my-10 flex flex-col sm:flex-row gap-4">
        {/* Email */}
        <a
          href="mailto:vaishnav45801@gmail.com"
          className="px-6 py-3 bg-red-600 border border-red-600 rounded-full flex items-center justify-center gap-2 hover:bg-red-700 hover:border-red-700 transition-all duration-300"
        >
          vaishnav45801@gmail.com
          <span className="inline-block transform"><IoMailOutline/></span>
        </a>

        {/* Phone */}
        <a
          href="tel:+917008166042"
          className="px-6 py-3 bg-red-600 border border-red-600 rounded-full flex items-center justify-center gap-2 hover:bg-red-700 hover:border-red-700 transition-all duration-300"
        >
          +91 9405727747
          <span className="inline-block"><MdAddIcCall/></span>
        </a>
      </div>
      <div className="my-8">
        <img src={logo} alt="VaishnavJadhav" />
      </div>
    </section>
  );
}
