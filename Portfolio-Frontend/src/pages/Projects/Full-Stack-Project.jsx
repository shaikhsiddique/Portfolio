import React from "react";
import Server from "../../components/3rd/Server";
import { motion } from "framer-motion";
import Project_Card from "../../components/Project-Card";
import Project_Data from '../../assets/Project.json';

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

      <div className="projects-list absolute top-[170%] w-full px-4 sm:px-8 lg:px-10 py-6 text-[#bad3ef] space-y-4 pb-12">
        <h1 className="text-4xl font-semibold text-black text-center mb-4">
          Explore My Backend Projects
        </h1>
        <div className="flex flex-wrap justify-evenly gap-4 w-[90%] mx-auto">
          {Project_Data.fullstack.map((e, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4"
            >
              <Project_Card index={index} data={e} />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Full_Stack_Project;
