import { useEffect, useState } from "react";
import gsap from "gsap";

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    gsap
      .timeline({
        onComplete: onComplete,
      })
      .fromTo(".logo", 
        { scale: 0, opacity: 0 },
        { scale: 1.2, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.3)" }
      )
      .to(".logo", 
        { scale: 1, duration: 0.5, ease: "power1.out" }
      )
      .to(".box", 
        { opacity: 0, duration: 0.5, delay: 1, ease: "power1.inOut" }
      );
  }, [onComplete]);

  return (
    <div className="box absolute z-50 left-0 top-0 flex items-center justify-center w-full h-screen bg-slate-50">
      <img className="logo" src="./src/Assets/Logo.png" alt="Loading..." />
    </div>
  );
};