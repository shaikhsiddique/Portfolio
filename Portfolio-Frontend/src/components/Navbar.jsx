import { gsap } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linksRef = useRef([]);
  const textRef = useRef([]);

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav((prev) => !prev);
  };

  useEffect(() => {
    gsap.from(linksRef.current, {
      y: -50,
      delay: 1,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, []);

  useEffect(() => {
    let text = textRef.current.textContent;
    text = text
      .slice(0, -2)
      .split("")
      .concat([text.slice(-2)]);

    textRef.current.innerHTML = text
      .map((letter, index) => {
        return typeof letter === "string" && letter.length > 1
          ? `<span class="text-red-600">${letter}</span>`
          : `<span>${letter}</span>`;
      })
      .join("");

    gsap.fromTo(
      textRef.current.querySelectorAll("span"),
      { y: "-100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "bounce.out",
      }
    );
  }, []);

  return (
    <div className="w-[89vw] sm:w-[95vw] p-2 sm:mx-10 mx-6 my-5 rounded-full bg-black  text-black flex items-center justify-between select-none  ">
      <div className="font-extrabold items-center w-full sm:w-auto text-3xl bg-[#bad3ef] px-5 py-4 rounded-full md:text-5xl leading-8 md:leading-10 font-sans  flex justify-between">
        <span ref={textRef}>
          SIDDIQUE<span className="text-black">-S</span>
        </span>

        <button className="sm:hidden" onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {showNav && (
        <div className="flex absolute top-24 my-2 py-1 items-center justify-evenly sm:flex z-10 border-2 border-black rounded-full bg-[#bad3ef]">
          <ul className="flex  items-center text-black text-lg  p-2 ">
            <li ref={(el) => (linksRef.current[0] = el)}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#bad3ef] px-3 py-2 border rounded-full"
                    : "bg-black text-[#bad3ef] px-3 py-2 border rounded-full"
                }
              >
                Home
              </NavLink>
            </li>
            <li ref={(el) => (linksRef.current[1] = el)}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#bad3ef] px-3 py-2  border rounded-full"
                    : "bg-black text-[#bad3ef] px-3 py-2  border rounded-full"
                }
              >
                About
              </NavLink>
            </li>
            <li ref={(el) => (linksRef.current[2] = el)}>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#bad3ef] px-3 py-2  border rounded-full"
                    : "bg-black text-[#bad3ef] px-3 py-2 border rounded-full"
                }
              >
                Work
              </NavLink>
            </li>
            <li ref={(el) => (linksRef.current[4] = el)}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#bad3ef] px-3 py-2 border rounded-full"
                    : "bg-black text-[#bad3ef] px-3 py-2 border rounded-full"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className="flex items-center justify-evenly hidden sm:flex">
        <ul className="flex items-center space-x-3 md:space-x-6 text-black text-lg md:text-xl p-2 md:p-4">
          <li ref={(el) => (linksRef.current[0] = el)}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#bad3ef] px-5 py-2 border rounded-full"
                  : "bg-black text-[#bad3ef] px-5 py-2 border rounded-full"
              }
            >
              Home
            </NavLink>
          </li>
          <li ref={(el) => (linksRef.current[1] = el)}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#bad3ef] px-5 py-2 border rounded-full"
                  : "bg-black text-[#bad3ef] px-5 py-2 border rounded-full"
              }
            >
              About
            </NavLink>
          </li>
          <li ref={(el) => (linksRef.current[2] = el)}>
            <NavLink
              to="/work"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#bad3ef] px-5 py-2 border rounded-full"
                  : "bg-black text-[#bad3ef] px-5 py-2 border rounded-full"
              }
            >
              Work
            </NavLink>
          </li>
          <li ref={(el) => (linksRef.current[4] = el)}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#bad3ef] px-5 py-2 border rounded-full"
                  : "bg-black text-[#bad3ef] px-5 py-2 border rounded-full"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
