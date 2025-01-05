import React from "react";

function Project_Card({ index, data,project }) {
  return (
    <div className="project-item w-[100%] h-[60vh] bg-[#3b3d3f] p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col justify-between">
      <h2 className="text-xl lg:text-2xl font-semibold text-white text-center py-2">
        {data.title}
      </h2>

      <img
        src={`./images/${project}/p${index + 1}.png`}
        alt={data.title}
        className={` rounded-md mb-4 hover:scale-110 transition-transform duration-300 ease-in-out`}
      />

      <p className="text-sm lg:text-base px-2 text-gray-200 text-center hover:text-gray-100">
        {data.description}
      </p>

      <div className="flex items-center justify-center space-x-4 mt-4">
        <a
          href={data.github}
          className="text-blue-400 hover:text-blue-300 text-sm px-3 py-1 rounded-md border border-blue-400 hover:bg-blue-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out"
        >
          GitHub
        </a>
        <a
          href={data.liveDemo}
          className={`text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-md border border-green-400 hover:bg-green-400 hover:bg-opacity-10 transition-all duration-200 ease-in-out ${!data.liveDemo? 'hidden':'' }`}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default Project_Card;
