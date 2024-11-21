import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import Laptop from "../../components/3rd/Laptop";

import { motion } from "framer-motion";

function Frontend_Project() {
  

  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-x-hidden">
      <div className="model absolute hidden md:block h-screen w-full">
        <Laptop  />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="absolute top-14 md:top-64 right-50 md:right-32 w-[380px] md:w-[50%] bg-black text-[#bad3ef] p-8 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 1.5,
          }}
          className="text-4xl font-medium text-center mb-4 text-white"
        >
          Explore My Frontend Projects
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 2.2,
          }}
          className="text-lg text-center"
        >
          Welcome to my collection of frontend projects, where creativity meets
          functionality. Leveraging modern technologies like HTML5, CSS3,
          JavaScript, React.js, and GSAP, I craft engaging, responsive web
          applications focused on clean design and seamless user experience.
        </motion.p>
      </motion.div>

      {/* Section for project highlights */}
      <motion.div initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 2.7,
          }}  className="sect-2 absolute md:top-[110%] top-[70%] flex flex-wrap md:flex-nowrap justify-evenly items-center gap-4">
        {/* Innovation and Design Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white font-medium mb-2 text-center">
            Innovation and Design
          </h3>
          <p className="text-center">
            I blend form and function, creating intuitive interfaces with
            responsive design and GSAP animations. Each project prioritizes
            performance, accessibility, and a memorable user experience.
          </p>
        </div>

        {/* Driven by User Experience Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white text-center font-medium mb-2">
            Driven by User Experience
          </h3>
          <p className="text-center">
            Every project is designed with the end-user in mind, ensuring
            interfaces that are visually appealing, easy to navigate, and
            memorable.
          </p>
        </div>

        {/* Technology and Precision Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white text-center font-medium mb-2">
            Technology and Precision
          </h3>
          <p className="text-center">
            Using React.js, CSS preprocessors, APIs, and state management
            libraries, I build scalable, user-focused applications. My approach
            delivers both polished visuals and robust functionality.
          </p>
        </div>
      </motion.div>

      <motion.div animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 3,
          }}   className="projects-list absolute top-[175%] w-full px-4 sm:px-8 lg:px-10 py-6 text-[#bad3ef] space-y-4 pb-12">
        <h1 className="text-4xl font-semibold text-black text-center mb-4">
          Explore My Frontend Projects
        </h1>
        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            PassOP
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            Password Manager 🛡️ A basic React app for managing passwords,
            securely stored in local storage with options for adding, viewing,
            and managing.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/PassOP"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://pass-op-black.vercel.app/"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            TaskHub
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            In TaskHub, I’ve utilized React hooks like `useState` and
            `useEffect`, combined with `localStorage` to provide persistent data
            storage, ensuring a seamless user experience every time they return.
            The UI is styled with Tailwind CSS, delivering a sleek, responsive,
            and consistent design that adapts beautifully across all devices.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/ems"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://task-hub-inky.vercel.app/"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            E-commerce React App Frontend
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            A responsive frontend for an e-commerce site, showcasing product
            displays, cart functionality, and smooth navigation. 🛒
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/Ecommerce"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://react-ecommerce-mu-fawn.vercel.app/"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            Rejouice Website Frontend
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            Frontend for the Rejouice website with GSAP animations, created with
            HTML, CSS, and JavaScript.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/Rejouice-website"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://shaikhsiddique.github.io/Rejouice-website/"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div  className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            MelodyHub
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            MelodyHub 🎵 A simple JavaScript music player with curated playlists
            and predefined songs.
          </p>
          <div className="flex space-x-3 px-2 mt-2 ">
            <a
              href="https://github.com/shaikhsiddique/MelodyHub"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://melody-hub-bice.vercel.app/"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
          <img src="./images/frontend/f1.png" alt=""  className="absolute h-28 hidden"  />
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            Stick-Man Game
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            A basic stick-man game with simple gameplay, created using HTML,
            CSS, and JavaScript.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/stick-man-game"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://shaikhsiddique.github.io/stick-man-game/"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            KBP-College Website
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            A static website created using HTML, CSS, and JavaScript to
            replicate the design of the KBP Polytechnic website. This project
            demonstrates basic web development skills but is not designed to be
            responsive.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/KBP-website/"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://shaikhsiddique.github.io/KBP-website/index.html"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Frontend_Project;
