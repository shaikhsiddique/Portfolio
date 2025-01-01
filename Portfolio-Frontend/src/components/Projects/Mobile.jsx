import React from "react";
import { NavLink } from "react-router-dom";

function Mobile() {



  return (
    <div
      className="h-72 w-[89vw] mx-6 my-10 lg:w-[450px] lg:m-0 lg:absolute bottom-5 right-[8%] rounded-3xl bg-white bg-cover bg-center text-[#bad3ef] space-x-4 select-none"
      style={{
        backgroundImage: `url(/images/Mobile.jpg)`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div  className="p-5">
        <h3 className="text-3xl font-semibold">Mobile Dev</h3>
        <h5 className="text-2xl font-semibold">Android Projects</h5>
      </div>
      <p
        className="mt-32 py-3 mx-3 w-32 text-black font-medium text-sm rounded-3xl text-center bg-[#b5cce6] hover:text-underline"
      >
       <NavLink to="/mobile-project"> View More </NavLink>
      </p>
    </div>
  );
}

export default Mobile;
