import React, { useRef } from 'react'
import List from './listandcards'
import { MdOutlineArrowOutward } from "react-icons/md"

function clients() {
    const ref = useRef(null)
    const list = [
        {
            name: "Planetly",
            owner: "Nina Walloch",
            read: "READ"
        },
        {
            name: "Workiz Easy",
            owner: "Tomer Levy",
            read: "READ"
        },
        {
            name: "Premium Blend",
            owner: "Ellen Kim",
            read: "READ"
        },
        {
            name: "Hypercare Systems",
            owner: "Brendan Gross",
            read: "READ"
        },
        {
            name: "Officevibe",
            owner: "Raff Labrie",
            read: "READ"
        },
        {
            name: "Orderlion",
            owner: "Stefan Strohmer",
            read: "READ"
        },
        {
            name: "Black Book",
            owner: "Jaci Smith",
            read: "READ"
        },
        {
            name: "Trawa Energy",
            owner: "David Budde",
            read: "READ"
        }
    ];
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.2" ref={ref} className='w-full h-[130vw] bg-zinc-950 font-mono'>
            <div className=''>
                <div className='flex pt-[5vw] justify-center'>
                    <div className='flex bg-zinc-300 text-zinc-800 justify-center items-center rounded-full w-[23vw] h-[4.7vw] uppercase hover:bg-zinc-100 hover:text-zinc-800 active:bg-zinc-700 focus:outline-none focus:ring focus:ring-violet-500'>
                        view all case studies
                        <span className='border-zinc-600 border-[1px] rounded-full ml-[3vw]'><MdOutlineArrowOutward /></span>
                    </div>
                </div>
                <div className='pt-[10vw] pl-[2vw] pb-[2.5vw] border-b-[1px] border-zinc-500'>
                    <h1 className='text-[3.8vw] tracking-tighter'>Clients' reviews</h1>
                </div>
                <div className='flex justify-between pl-[2vw] pr-[3vw] pt-[1.5vw]'>
                    <div>Karman Ventures</div>
                    <div>
                        <div className='pb-[5vw]'>Services:</div>
                        <div>
                            <div className='mb-[2vw] border-zinc-300 border-[1.4px] px-[0.8vw] py-[0.1vw] rounded-full uppercase'><a href="">Investor Deck</a></div>
                            <div className='w-[8.8vw] border-zinc-300 border-[1.4px] px-[0.8vw] py-[0.1vw] rounded-full uppercase'><a href="">Sales Deck</a></div>
                        </div>
                    </div>
                    <div>
                        <div className='pb-[5vw]'>William Barnes</div>
                        <div className='-tracking-[0.1vw]'>
                            <img className='w-[8vw] h-[8vw] rounded-2xl mb-[2vw]' src="William-Barnes-1-300x300.png" alt="" />
                            They were transparent about the time and the stages of the<br /> project. The end product is
                            high quality, and I feel confident<br /> about how they were handholding the client through
                            the<br /> process. I feel like I can introduce them to someone who<br /> needs to put a sales deck
                            together from scratch, and they<br /> would be able to handhold the client experience from
                            0 to<br /> 100 very effectively from story to design.5/5
                        </div>
                    </div>
                    <div>
                        <a href="">READ</a>
                    </div>
                </div>
                
                <div className='pt-[3.9vw] border-b-[1px] border-zinc-600'>
                    {list.map((item, index) => (<List reference={ref} list={item} />))}
                </div>
            </div>
        </div>
    )
}

export default clients