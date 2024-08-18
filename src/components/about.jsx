import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function about() {
    const d = ["Instagram", "Behance", "Facebook", "Linkedin"]
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.2" className='w-full h-[96.5vw] font-mono bg-[#004D43] rounded-t-2xl'>
            <div className='pl-[2vw] pt-[7.5vw] pb-[5vw] border-b-[1px] border-zinc-400'>
                <h1 className='text-[3vw] leading-[4.3vw] tracking-[0.05vw] font-thin'>
                    Ochi is a strategic partner for fast-grow­ing tech<br /> businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>,<br /> <u>ex­plain com­plex ideas</u> , and <u>hire great peo­ple</u>.
                </h1>
            </div>
            <div className='flex justify-between pt-[1vw] pb-[10.5vw] border-b-[1px] border-zinc-400 '>
                <div className='flex pl-[2vw] gap-[37vw] font-thin text-[16px]'>
                    <div>What you can expect:</div>
                    <div>We create tailored presentations to help<br /> you persuade your colleagues, clients, or<br /> investors. Whether it’s live or digital,<br /> delivered for one or a hundred people.
                        <br /><br /><br />We believe the mix of strategy and<br /> design (with a bit of coffee) is what<br /> makes your message clear, convincing,<br /> and captivating.</div>
                </div>
                <div className='pr-[1.7vw] pt-[9.3vw] items-end font-thin'>
                    S:<br/>
                {d.map((items, index) => 
                <a className='pl-[1.75vw]'>{items}<br/></a>
                )}
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='pl-[2vw]'>
                    <h1 className='text-[4.2vw] font-thin'>Our approach:</h1>
                    <div className='flex mt-[1vw] bg-zinc-300 text-zinc-800 justify-center items-center rounded-full w-[15vw] h-[5vw] uppercase hover:bg-zinc-900 hover:text-zinc-100 active:bg-zinc-700 focus:outline-none focus:ring focus:ring-violet-500'>
                        Read more
                        <span className='border-zinc-600 border-[1px] rounded-full ml-[3vw]'><MdOutlineArrowOutward /></span>
                    </div>
                </div>
                <div className='pt-[1vw] pr-[2vw]'>
                    <img className='w-[50vw] h-[35vw] rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}4

export default about