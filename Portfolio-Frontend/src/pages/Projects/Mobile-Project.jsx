import React from "react";
import MobileContainer from "../../components/3rd/Mobile";
import { motion } from "framer-motion";


function Mobile_Project() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-x-hidden">
      {/* MObile Model */}
      <div className="model absolute hidden md:block  h-screen w-full">
        <MobileContainer />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2,
        }}
        className="absolute top-28 md:top-64 right-50 md:right-32 w-[380px] md:w-[50%] bg-black text-[#bad3ef] p-8 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 2.5,
          }}
          className="text-4xl font-medium text-center mb-4 text-white"
        >
          Android Projects
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 3,
          }}
          className="text-lg text-center"
        >
          Explore my collection of Android projects, where innovation meets
          seamless mobile experience. Utilizing technologies like Java, Kotlin,
          and Android Studio, I develop interactive, user-centric mobile
          applications focusing on performance and design.
        </motion.p>
      </motion.div>

      <div className="sect-2 absolute top-[70%] sm:top-[110%] flex flex-wrap md:flex-nowrap justify-evenly items-center gap-4">
        {/* Innovation and Design Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white font-medium mb-2 text-center">
            Innovation and Design
          </h3>
          <p className="text-center">
            Blending functionality with aesthetics, I craft Android interfaces
            that prioritize user experience, responsiveness, and smooth
            animations for impactful interactions.
          </p>
        </div>

        {/* User-Centered Development Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white text-center font-medium mb-2">
            User-Centered Development
          </h3>
          <p className="text-center">
            Each project is built with the user in mind, ensuring intuitive
            navigation, memorable experiences, and high usability across diverse
            devices.
          </p>
        </div>

        {/* Technology and Precision Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white text-center font-medium mb-2">
            Technology and Precision
          </h3>
          <p className="text-center">
            Using Android SDK, API integration, and state management, I create
            robust applications that are both visually polished and highly
            functional.
          </p>
        </div>
      </div>

      <div className="projects-list absolute top-[160%] w-full px-4 sm:px-8 lg:px-10 py-6 text-[#bad3ef] space-y-4 pb-12">
        <h1 className="text-4xl font-semibold text-black text-center mb-4">
          Explore My Android Projects
        </h1>
        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            VehServicing App
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            The VehServicing app, built with Android Studio, offers an intuitive
            platform for managing vehicle service appointments and accessing
            service history. 🚗
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/VehServicing"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            RecipeApp
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            The RecipeApp allows users to discover and save a variety of
            delicious recipes added by us, all in an easy-to-navigate interface.
            🍽️
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/RecipeApp"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            Cab-Booking App
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            The Cab-Booking App features a dual interface for drivers and
            customers, enabling seamless ride requests and efficient service
            management for a smooth transportation experience. 🚖
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/Cab-Booking-App"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile_Project;
