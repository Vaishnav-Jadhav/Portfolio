import React from "react";

export function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12 lg:px-20 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12" id="about">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-6xl sm:text-8xl font-bold mb-4">
            About Me?
          </h2>
          <p className="text-3xl md:text-4xl mb-8">(React Developer/ Frontend Developer)</p>
        </div>
        <div className="flex-1 text-center md:text-left">
          <p className="text-2xl md:text-3xl leading-relaxed max-w-xl mx-auto md:mx-0 italic">
            Hello I am Vaishnav, a graduate with 6 months of internship experience and additional freelancing work, where I have deployed multiple live projects. I enjoy building impactful and user-friendly applications that live on the internet.
          </p>
        </div>
      </div>
    </section>
  );
}
