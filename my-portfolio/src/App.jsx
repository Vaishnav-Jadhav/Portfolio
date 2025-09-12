import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { ContactMe } from "./components/ContactMe";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";

export default function App()
{
  return(
    <div className='font-["Inter Tight Regular"]'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <ContactMe/>
    </div>
  )
}