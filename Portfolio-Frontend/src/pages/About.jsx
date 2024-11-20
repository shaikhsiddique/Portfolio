import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Boy from "../components/3rd/Boy";

function About() {
  return (
    <div className="h-screen w-full overflow-hidden ">
      <Navbar />
      <div className="flex  h-full px-6 md:px-16">
        {/* Content Section */}
        <div className="data md:w-1/2 h-56 absolute top-80 left-32 bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg space-y-4">
          <h1 className="text-2xl font-bold">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi! I'm a web developer with a solid foundation in frontend and
            backend development. Currently, I'm completing my diploma in
            Computer Science. I have experience building scalable, user-friendly
            applications with technologies like React, Node.js, Express,
            MongoDB, and Tailwind CSS.
          </p>
        </div>

        {/* Picture Section */}
        <div className="picture w-full h-screen  absolute  right-0 flex justify-center mt-6 md:mt-0">
          <Boy />
        </div>
      </div>

      <div className="about-page absolute w-full p-6 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-start">
        {/* Skills Section */}
        <div className="w-full  bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white font-medium mb-4 text-center">
            Skills
          </h3>
          <ul className="list-disc list-inside space-y-2 text-center">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Tailwind CSS</li>
            <li>GSAP Animations</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        {/* Internship Section */}
        <div className="w-full bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg mt-16">
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

        <div className="w-full bg-black text-[#bad3ef] p-6 rounded-lg shadow-lg">
          <h3 className="text-3xl text-white font-medium mb-4 text-center">
            Languages
          </h3>
          <ul className="list-disc list-inside space-y-2 text-center">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>C</li>
          </ul>
        </div>
      </div>
      <div className="hero3 absolute top-[180%] w-full flex flex-col items-center justify-center gap-5 py-10">
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
        <a href="/SiddiqueShaikh-resume.pdf" download="" className="text-[#bad3ef]">
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
