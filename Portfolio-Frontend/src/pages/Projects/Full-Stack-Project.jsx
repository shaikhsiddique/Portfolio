import React from "react";
import Server from "../../components/3rd/Server";
import { motion } from "framer-motion";

function Full_Stack_Project() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-x-hidden">
      {/* Server Model */}
      <div className="model absolute hidden md:block  h-screen w-full">
        <Server />
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
          Backend Projects
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
          Welcome to my collection of backend projects, where scalability meets
          reliability. Utilizing modern technologies like Node.js, Express.js,
          Socket.IO, Mongoose, and MongoDB, I build robust, high-performance
          applications focused on seamless data handling and efficient server
          management.
        </motion.p>
      </motion.div>

      <motion.div initial={{  opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 2.7,
          }}  className="sect-2 absolute sm:top-[110%] top-[70%] flex flex-wrap md:flex-nowrap justify-evenly items-center gap-4">
        {/* API Development Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white font-medium mb-2 text-center">
            API Development
          </h3>
          <p className="text-center">
            I specialize in creating RESTful APIs and GraphQL services that
            provide efficient data access and manipulation, ensuring a smooth
            integration with frontend applications.
          </p>
        </div>

        {/* Real-Time Communication Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white text-center font-medium mb-2">
            Real-Time Communication
          </h3>
          <p className="text-center">
            Leveraging Socket.IO, I build applications that enable real-time
            data exchange, enhancing user experience through instant updates and
            notifications.
          </p>
        </div>

        {/* Database Management Section */}
        <div className="w-full max-w-[380px] md:w-[30%] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white text-center font-medium mb-2">
            Database Management
          </h3>
          <p className="text-center">
            With Mongoose and MongoDB, I manage complex data relationships and
            ensure efficient storage, retrieval, and manipulation of data,
            supporting scalable application architecture.
          </p>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }}
          animate={{opacity: 1 }}
          transition={{
            duration: 0.2,
            delay: 3,
          }} className="projects-list absolute top-[170%] w-full px-4 sm:px-8 lg:px-10 py-6 text-[#bad3ef] space-y-4 pb-12">
        <h1 className="text-4xl font-semibold text-black text-center mb-4">
          Explore My Backend Projects
        </h1>
        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            Scatch
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            Scatch: An eCommerce site for bags using Node.js, MongoDB, EJS, and
            Tailwind CSS. Features admin product management, image uploads with
            Multer, and user cart & ordering. 🛍
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/Scatch-"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href=""
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            ChatStream
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            ChatStream is a real-time app combining chat and video calls. With
            WebRTC for video and Socket.IO for messaging, it offers a smooth
            platform for both personal and professional interactions
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/ChatStream"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://chatstream-zyt9.onrender.com/"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            DevTube
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            DevTube is a developer-centric video platform, similar to YouTube,
            built using Node.js, Express.js, MongoDB, and Socket.IO, enabling
            users to share and discover coding tutorials and tech content.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/DevTube"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href=""
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            Chess
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            Chess is a real-time chess application built with Node.js and
            Express.js, utilizing server-side rendering for an engaging user
            experience.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/chess"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
            <a
              href="https://chess-2jya.onrender.com"
              className="text-green-400 hover:text-green-300 text-sm px-2 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            PhotoShare
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            PhotoShare : is a social media app inspired by Instagram, built with
            Node.js and React, enabling users to share photos, follow others,
            and engage through likes and comments.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/Instagram-Clone"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="project-item w-full bg-[#1f2937] p-4 rounded-md shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <h2 className="text-xl lg:text-2xl font-semibold text-white px-2">
            LiveTracker
          </h2>
          <p className="text-sm lg:text-base px-2 mt-1 text-gray-300 leading-snug">
            LiveTracker : is a real-time tracking application built with Node.js
            and Socket.IO, allowing users to monitor locations and movements
            seamlessly, providing instant updates and interactions.
          </p>
          <div className="flex space-x-3 px-2 mt-2">
            <a
              href="https://github.com/shaikhsiddique/Realtime-Tracker"
              className="text-blue-400 hover:text-blue-300 text-sm px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Full_Stack_Project;
