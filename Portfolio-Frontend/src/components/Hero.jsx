import React from "react";


function Hero() {
  
  return (
    <div
      className="h-72 w-[89vw] sm:w-[95vw] mx-6 sm:mx-10 bg-black rounded-3xl bg-cover bg-center flex flex-col justify-center p-4 text-[#bad3ef] select-none"
      style={{ backgroundImage: `url(/images/hero.jpg)` }}
    >
      <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start text-[#cce0f8]">
        <h3
          className="text-2xl sm:text-5xl font-semibold py-1 leading-7"
        >
          BRINGING CREATIVITY
        </h3>
        <h3
          className="text-2xl sm:text-4xl font-semibold sm:py-2 leading-7"
        >
          AND LOGIC TOGETHER
        </h3>
      </div>
      <span
        className="text-white Sm:mt-6 mt-5 sm:text-lg text-sm max-w-2xl text-center sm:text-left"
      >
        I design and code seamless digital experiences that blend aesthetic
        appeal with powerful functionality, ensuring every pixel and line of
        code contributes to an intuitive and engaging user journey.
      </span>
    </div>
  );
}

export default Hero;
