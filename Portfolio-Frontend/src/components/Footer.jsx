import React from "react";


function SocialLinks() {
  



  return (
    <div
     
      className="h-20 lg:h-72 flex items-center justify-evenly lg:w-20 lg:absolute bottom-5 right-8 lg:rounded-3xl bg-black select-none"
    >
      <a href="https://www.instagram.com/_siddique12/">
        <i
         
          className="fa-brands fa-instagram text-white text-3xl lg:absolute top-[20%] left-[30%] z-10"
        ></i>
      </a>
      <a href="https://www.linkedin.com/in/shaikhSiddique">
        <i
          
          className="fa-brands fa-linkedin text-white text-3xl lg:absolute top-[40%] left-[30%] z-10"
        ></i>
      </a>
      <a href="https://github.com/shaikhsiddique/">
        <i
         
          className="fa-brands fa-github text-white text-3xl lg:absolute top-[60%] left-[30%] z-10"
        ></i>
      </a>
      <a href="https://wa.me/917498811073?text=Hello%20there!%20I'm%20reaching%20out%20to%20connect.">
        <i
         
          className="fa-brands fa-whatsapp text-white text-3xl lg:absolute top-[80%] left-[30%] z-10"
        ></i>
      </a>
    </div>
  );
}

export default SocialLinks;
