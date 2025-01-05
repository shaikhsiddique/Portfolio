import React from "react";
import MobileContainer from "../../components/3rd/Mobile";
import { motion } from "framer-motion";
import Project_Data from '../../assets/Project.json';
import Project_Card from "../../components/Project-Card";

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
          delay: 1,
        }}
        className="absolute top-14 md:top-64 right-50 md:right-32 w-[380px] md:w-[50%] bg-black text-[#bad3ef] p-8 rounded-lg shadow-lg"
      >
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
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
            delay: 2,
          }}
          className="text-lg text-center"
        >
          Explore my collection of Android projects, where innovation meets
          seamless mobile experience. Utilizing technologies like Java, Kotlin,
          and Android Studio, I develop interactive, user-centric mobile
          applications focusing on performance and design.
        </motion.p>
      </motion.div>

      <motion.div initial={{opacity: 0 }}
          animate={{opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 2.5,
          }} className="sect-2 absolute top-[60%] sm:top-[110%] flex flex-wrap md:flex-nowrap justify-evenly items-center gap-4">
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
      </motion.div>

      <div className="projects-list absolute top-[170%] w-full px-4 sm:px-8 lg:px-10 py-6 text-[#bad3ef] space-y-4 pb-12">
        <h1 className="text-4xl font-semibold text-black text-center mb-32">
          Explore My Android Projects
        </h1>
            {/* Project Cards */}
        <div className="flex flex-wrap justify-evenly gap-4 w-[90%] mx-auto">
          {Project_Data.android.map((e, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            >
              <Project_Card index={index} data={e} project={"android"} />
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}

export default Mobile_Project;
