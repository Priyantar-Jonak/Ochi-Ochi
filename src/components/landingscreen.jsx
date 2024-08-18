import { motion } from "framer-motion";
import React from "react";

function landingscreen() {
  const b = ["We Create", "Eye-opening", "presentations"];
  const c = ["For public and private companies", "From the first pitch to IPO"];
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full font-mono h-screen bg-zinc-900">
      <div className="masker px-5 pt-[25vh]">
        {b.map((items, index) =>
        (
          <div className="flex w-fit items-end">
            {index === 1 && (<motion.div initial={{width: 0}} animate={{width: "8.5vw"}} transition={{ease: [0.76, 0, 0.24, 1], delay: "0.1"}} className="flex overflow-hidden w-[8.5vw] h-[5.35vw] rounded-md mr-2"><img src="content-image01.jpg" alt="" /></motion.div>)}
            <h1 className={`uppercase font-semibold -tracking-[.2vw] leading-[6.15vw] text-[7.8vw] font-["FoundersGrotesk-Semibold (1).ttf"`}>
              {items}
            </h1>
          </div>
        ))}
      </div>
      <div className="py-5 px-5 flex justify-between border-t-[1px] border-zinc-500 mt-[20.7vh]">
        {c.map((items, index) => (
          <p className="font-thin">{items}</p>
        ))}
        <div className="button text-[1.5vw] uppercase font-thin pr-2">
          <a
            href=""
            className="border-[.1vw] px-3 py-1 rounded-full hover:bg-zinc-100 hover:text-zinc-900 active:bg-zinc-100 focus:outline-none focus:ring focus:ring-violet-500"
          >
            Start the project
          </a>
        </div>
      </div>
    </div>
  );
}

export default landingscreen;