import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { ContactMe } from "./components/ContactMe";
import { Projects } from "./components/Projects";

export default function App()
{
  return(
    <div className='font-[cursive]'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
  )
}