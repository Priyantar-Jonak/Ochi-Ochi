import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Power4 } from 'gsap';

function featuredcards({ card, index, reference }) {
    const [hovering, sethovering] = useState(false)

    return (
        <div className='w-[50vw] h-[50vw]'>
            <div className='flex font-mono gap-[.5vw] items-center'>
                <span className='w-[.7vw] h-[.7vw] rounded-full bg-zinc-300'></span>
                <p className='uppercase'>{card.desc}</p>
            </div>
            <div className='relative' onMouseEnter={() => sethovering(true)} onMouseLeave={() => sethovering(false)}>
                <img className='w-full h-[35vw] rounded-xl' src={card.image} alt="image" />
                <div className={`absolute ${(index === 0 || index === 2) ? 'left-[52%]' : 'right-[52%]'} overflow-hidden top-1/3 flex justify-center w-[50vw] h-[6vw] text-[7vw] leading-none -tracking-[.1vw] text-[#004D43] font-black font-mono uppercase`}>
                    <motion.span initial={{y: '100%'}} animate={hovering ? {y: '0'} : {y: '100%'}} transition={{ease: Power4.easeInOut}} className='absolute z-[10]'>
                        {card.desc}
                    </motion.span>
                </div>
            </div>
            <div className='flex gap-[1vw] mt-[1vw] uppercase'>
                {card.links[0] != 0 && <div className='flex items-center justify-center px-[1.1vw] py-[1.2vw] h-[2vw] border-zinc-100 border-[1.4px] rounded-full hover:bg-zinc-100 hover:text-zinc-900'>
                    <a className="font-mono" href="">{card.links[0]}</a>
                </div>}

                {card.links[1] != null && <div className='flex items-center justify-center px-[1.1vw] py-[1.2vw] h-[2vw] border-zinc-100 border-[1.4px] rounded-full hover:bg-zinc-100 hover:text-zinc-900'>
                    <a className="font-mono" href="">{card.links[1]}</a>
                </div>}
                {card.links[2] != null && <div className='flex items-center justify-center px-[1.1vw] py-[1.2vw] h-[2vw] border-zinc-100 border-[1.4px] rounded-full hover:bg-zinc-100 hover:text-zinc-900'>
                    <a className="font-mono" href="">{card.links[2]}</a>
                </div>}
                {card.links[3] != null && <div className='flex items-center justify-center px-[1.12vw] py-[1.2vw] h-[2vw] border-zinc-100 border-[1.4px] rounded-full hover:bg-zinc-100 hover:text-zinc-900'>
                    <a className="font-mono" href="">{card.links[3]}</a>
                </div>}
            </div>
        </div>
    )
}

export default featuredcards