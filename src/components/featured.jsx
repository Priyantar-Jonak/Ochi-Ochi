import React, { useRef } from 'react'
import Cards from './featuredcards'

function featured() {
    const ref = useRef(null)
    const card = [
        {
            desc: "fyde",
            image: "card1.png",
            links: ["audit", "copywriting", "sales deck", "slides design"]
        },
        {
            desc: "vise",
            image: "card2.jpg",
            links: ["agency", "company presentation"]
        },
        {
            desc: "trawa",
            image: "cards3.jpg",
            links: ["brand identity", "design research", "investor deck"]
        },
        {
            desc: "premium blend",
            image: "cards4.png",
            links: ["branded template"]
        }
    ];
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.2" ref={ref} className='w-full h-[140vw] bg-zinc-950 rounded-t-2xl'>
            <div className='w-full h-[19vw] border-zinc-700 border-b-[1px] text-[5vw] font-mono leading-none tracking-tighter pt-[10vw] pl-[2vw]'>
                Featured projects
            </div>
            <div className='flex justify-between px-[2vw] gap-[10vw] pt-[4.7vw]'>
                {card.map((item, index) => ((index === 0 || index === 1) && <Cards reference={ref} card={item} index={index} />))}
            </div>
            <div className='flex justify-between px-[2vw] gap-[10vw]'>
                {card.map((item, index) => ((index === 2 || index === 3) && <Cards card={item} reference={ref} index={index} />))}
            </div>
        </div>
    )
}

export default featured