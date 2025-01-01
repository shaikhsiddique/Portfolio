import React from "react";
import { NavLink } from "react-router-dom";

function Full_Stack() {

  

  return (
    <div
      className="h-72 w-[89vw] mx-6 my-10 lg:w-[450px] lg:m-0 lg:absolute bottom-5 left-[33%] rounded-3xl bg-white bg-cover bg-center text-[#bad3ef] select-none"
      style={{
        backgroundImage: `url(/images/Full-Stack.jpg)`,
      }}
    >
      <div  className="p-5">
        <h3 className="text-3xl font-semibold">Core Backends</h3>
        <h5 className="text-2xl font-semibold">Powerful Architectures</h5>
      </div>
      <p
        className="mt-32 py-3 mx-3 w-32 text-black font-medium text-sm rounded-3xl text-center bg-[#b5cce6] hover:text-underline"
      >
      <NavLink to="/full-stack-project" > View More </NavLink>
      </p>
    </div>
  );
}

export default Full_Stack;
