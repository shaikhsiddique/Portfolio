import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Boy from "../components/3rd/Boy";
import Certificate from "../components/Certificate";

function About() {
  return (
    <div className="h-screen w-full overflow-hidden ">
      <Navbar />
      <div className="flex  h-full px-6 md:px-16">
        {/* Content Section */}
        <div className="data md:w-1/2 md:h-56  absolute md:top-80 top-40 md:left-32 left-0 mx-6  bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="text-2xl font-bold text-center"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 2,
            }}
            className="text-lg leading-relaxed"
          >
            Hi! I'm a web developer with a solid foundation in frontend and
            backend development. Currently, I'm completing my diploma in
            Computer Science. I have experience building scalable, user-friendly
            applications with technologies like React, Node.js, Express,
            MongoDB, and Tailwind CSS.
          </motion.p>
        </div>

        {/* Picture Section */}
        <div className="picture w-full h-screen  absolute hidden sm:block  right-0 flex justify-center mt-6 md:mt-0">
          <Boy />
        </div>
      </div>

      <div className="about-page absolute top-[97%]  w-full p-6  gap-4 justify-center items-start">
        {/* Skills Section */}
        <div className="w-full bg-black text-[#bad3ef] p-6 border-b-2 shadow-lg">
          <h3 className="text-3xl text-white font-medium mb-4 text-center pl-6">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-10">
            <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5">
              <h4 className="text-xl font-medium text-center text-gray-50">
                Frontend
              </h4>
              <ul className="text-center flex items-center justify-center gap-4">
                <li className="hover:text-gray-200">
                  • React.js Web-Devlopment
                </li>
                <li className="hover:text-gray-200">•Tailwind CSS</li>
                <li className="hover:text-gray-200">• GSAP Animations</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5">
              <h4 className="text-xl font-medium text-center text-gray-50">
                Backend
              </h4>
              <ul className="text-center flex items-center justify-center gap-4">
                <li className="hover:text-gray-200">• Node.js</li>
                <li className="hover:text-gray-200">• Express.js</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5">
              <h4 className="text-xl font-medium text-center text-gray-50">
                Database
              </h4>
              <ul className="text-center flex items-center justify-center gap-4 pl-2">
                <li className="hover:text-gray-200">• MongoDB</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4 xl:w-1/5">
              <h4 className="text-xl font-medium text-center text-gray-50">
                Version Control
              </h4>
              <ul className="text-center flex items-center justify-center gap-4 pl-7">
                <li className="hover:text-gray-200">• Git & GitHub</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full bg-black text-[#bad3ef] p-6 border-b-2 shadow-lg">
          <h3 className="text-3xl text-white font-medium mb-4 text-center">
            Languages
          </h3>
          <ul className="text-center flex flex-wrap justify-center gap-6">
            <li className="hover:text-gray-200 flex items-center gap-2">
              <span>•</span> JavaScript
            </li>
            <li className="hover:text-gray-200 flex items-center gap-2">
              <span>•</span> HTML
            </li>
            <li className="hover:text-gray-200 flex items-center gap-2">
              <span>•</span> CSS
            </li>
            <li className="hover:text-gray-200 flex items-center gap-2">
              <span>•</span> Python
            </li>
            <li className="hover:text-gray-200 flex items-center gap-2">
              <span>•</span> Java
            </li>
            <li className="hover:text-gray-200 flex items-center gap-2">
              <span>•</span> C++
            </li>
            <li className="hover:text-gray-200 flex items-center gap-2">
              <span>•</span> C
            </li>
          </ul>
        </div>

        {/* Internship Section */}
        <div className="w-full bg-black text-[#bad3ef] p-6 border-b-2 shadow-lg ">
          <h3 className="text-3xl text-white font-medium mb-4 text-center">
            Industrial Training
          </h3>
          <p className="text-center">
            <strong>Company:</strong> IRCT Satara <br />
            <strong>Role:</strong> Cab Booking Application Developer (Project){" "}
            <br />
            <strong>Duration:</strong> 1.5 months <br />
            Developed a Cab Booking Application as part of industrial training,
            featuring an admin dashboard to manage bookings, assign drivers, and
            track request statuses.
          </p>
        </div>
      </div>
      <div className="hero3 absolute sm:top-[170%] top-[280%] w-full flex flex-col items-center justify-center gap-5 py-10">
        {/* Education Section */}
        <div className="w-[96vw] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg md:col-span-2">
          <h3 className="text-3xl text-white font-medium mb-4 text-center">
            Education
          </h3>
          <p className="text-center">
            <strong>Currently Pursuing a Diploma in Computer Science</strong>{" "}
            <br />
            KBP Polytechnic, Satara <br />
            Focused on software development and web technologies.
          </p>
        </div>

        {/* Certificate Section */}
        <div className="w-[96vw]  text-[#bad3ef] p-6 rounded-lg  md:col-span-2">
          <Certificate/>
        </div>

        {/* Future Goals Section */}
        <div className="w-[96vw] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg md:col-span-2">
          <h3 className="text-3xl text-white font-medium  text-center">
            Future Goals
          </h3>
          <p className="text-center">
            I aim to become a full-stack developer with expertise in scalable
            applications, contribute to open-source projects, and explore
            AI-powered solutions to enhance user experiences.
          </p>
        </div>
        <div className="resume  w-[96vw] bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg text-center">
          <a
            href="/resume.pdf"
            download="/resume.pdf"
            className="text-[#bad3ef]"
          >
            <button className="py-2 px-4 bg-[#bad3ef] text-black rounded-lg">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
