import React, { useRef } from 'react';
import { gsap } from 'gsap';

function Animated_Project_Card({ index, data, project }) {
  const videoRef = useRef(null);
  const imgRef = useRef(null);
  const cardRef = useRef(null);
  const mediaContainerRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(mediaContainerRef.current, {
      scale: 1.1,
      duration: 0.5,
      ease: "power3.out",
    });
    if (videoRef.current && imgRef.current) {
      gsap.to(imgRef.current, { opacity: 0, duration: 0.5 });
      gsap.to(videoRef.current, { opacity: 1, duration: 0.5 });
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(mediaContainerRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power3.out",
    });
    if (videoRef.current && imgRef.current) {
      videoRef.current.pause();
      gsap.to(videoRef.current, { opacity: 0, duration: 0.5 });
      gsap.to(imgRef.current, { opacity: 1, duration: 0.5 });
    }
  };

  return (
    <div
      ref={cardRef}
      className="project-item w-full h-[60vh] bg-[#3b3d3f] p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl lg:text-2xl font-semibold text-white text-center mb-4 z-10">
        {data.title}
      </h2>
      <div ref={mediaContainerRef} className="w-full h-[40%] mb-4 relative origin-center">
        <img
          ref={imgRef}
          src={`./images/${project}/p${index + 1}.png`}
          alt={data.title}
          className="w-full h-full object-cover rounded-md absolute top-0 left-0 transition-transform duration-300 ease-in-out"
          style={{ opacity: 1 }}
        />
        <video
          ref={videoRef}
          src={`./images/${project}/v${index + 1}.mp4`}
          className="w-full h-full object-cover rounded-md absolute top-0 left-0"
          muted
          loop
          style={{ opacity: 0 }}
        />
      </div>
      <p className="text-sm lg:text-base text-gray-200 text-center mb-6 px-2 hover:text-gray-100 z-10">
        {data.description}
      </p>
      <div className="flex items-center justify-center space-x-4 mt-auto z-10">
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

export default Animated_Project_Card;
