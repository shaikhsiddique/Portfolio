import React from "react";

function Project_Card({ index, data,project }) {
  
  return (
    <div className="project-item w-full h-[60vh] bg-[#3b3d3f] p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col relative overflow-hidden">

    {/* Title at the top */}
    <h2 className="text-xl lg:text-2xl font-semibold text-white text-center mb-4">
      {data.title}
    </h2>
  
    {/* Image */}
    <div className="w-full h-[40%] mb-4">
      <img
        src={`./images/${project}/p${index + 1}.png`}
        alt={data.title}
        className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
  
    {/* Description */}
    <p className="text-sm lg:text-base text-gray-200 text-center mb-6 px-2 hover:text-gray-100">
      {data.description}
    </p>
  
    {/* Buttons */}
    <div className="flex items-center justify-center space-x-4 mt-auto">
      <a
        href={data.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 text-sm px-3 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
      >
        GitHub
      </a>
      {data.liveDemo && (
        <a
          href={data.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
        >
          Live Demo
        </a>
      )}
    </div>
  
  </div>
  

  );
}

export default Project_Card;
