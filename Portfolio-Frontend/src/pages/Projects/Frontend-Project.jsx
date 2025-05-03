import React from "react";
import Laptop from "../../components/3rd/Laptop";
import Project_Data from "../../assets/Project.json";
import { motion } from "framer-motion";
import Animated_Project_Card from "../../components/Animated-Project-Card";


function Frontend_Project() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-x-hidden">
      <div className="model absolute hidden md:block h-screen w-full">
        <Laptop />
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 2.7,
        }}
        className="sect-2 absolute md:top-[110%] top-[70%] flex flex-wrap md:flex-nowrap justify-evenly items-center gap-4"
      >
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

      {/* Projects List Section */}
      <div className="projects-list absolute top-[175%] w-full px-4 sm:px-8 lg:px-10 py-6 text-[#bad3ef] space-y-4 pb-12">
        <h1 className="text-4xl font-semibold text-black text-center mb-32">
          Explore My Frontend Projects
        </h1>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-evenly gap-4 w-[90%] mx-auto">
          {Project_Data.frontend.map((e, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            >
              <Animated_Project_Card index={index} data={e} project="frontend" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Frontend_Project;
