import React from 'react'
import { motion } from "framer-motion"

function marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.001" className='relative flex gap-3 whitespace-nowrap w-full h-[30vw] py-[9vw] pb-[5vw] mb-[3vw] bg-[#CDEA68] rounded-t-2xl'>
      <div className='w-full border-[1px] border-zinc-400 uppercase text-[18.135vw] leading-[12vw] -tracking-[1vw]'>
        <motion.h1 className='font-bold font-mono' initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }}>We are ochi</motion.h1>
      </div>
      
    </div>
  )
}

export default marquee