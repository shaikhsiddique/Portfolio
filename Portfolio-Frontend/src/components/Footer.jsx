import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function SocialLinks() {
  const containerRef = useRef(null);
  const instagramRef = useRef(null);
  const linkedinRef = useRef(null);
  const githubRef = useRef(null);
  const whatsappRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, delay: 2, ease: "power3.out" }
    );

    gsap.fromTo(
      instagramRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, delay: 2.4, ease: "power3.out" }
    );

    gsap.fromTo(
      linkedinRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, delay: 2.5, ease: "power3.out" }
    );

    gsap.fromTo(
      githubRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, delay: 2.6, ease: "power3.out" }
    );

    gsap.fromTo(
      whatsappRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 0.5, delay: 2.7, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-20 lg:h-72 flex items-center justify-evenly lg:w-20 lg:absolute bottom-5 right-8 lg:rounded-3xl bg-black select-none"
    >
      <a href="https://www.instagram.com/_siddique12/">
        <i
          ref={instagramRef}
          className="fa-brands fa-instagram text-white text-3xl lg:absolute top-[20%] left-[30%] z-10"
        ></i>
      </a>
      <a href="https://www.linkedin.com/in/shaikhSiddique">
        <i
          ref={linkedinRef}
          className="fa-brands fa-linkedin text-white text-3xl lg:absolute top-[40%] left-[30%] z-10"
        ></i>
      </a>
      <a href="https://github.com/shaikhsiddique/">
        <i
          ref={githubRef}
          className="fa-brands fa-github text-white text-3xl lg:absolute top-[60%] left-[30%] z-10"
        ></i>
      </a>
      <a href="https://wa.me/917498811073?text=Hello%20there!%20I'm%20reaching%20out%20to%20connect.">
        <i
          ref={whatsappRef}
          className="fa-brands fa-whatsapp text-white text-3xl lg:absolute top-[80%] left-[30%] z-10"
        ></i>
      </a>
    </div>
  );
}

export default SocialLinks;
