import React, { useRef } from 'react'
import Newcard from './cards'

function projects() {
    const ref = useRef(null)
    const newCard = [
        {
            image: "ochi-green.png"
        },
        {
            image: "clutchcard.svg",
            desc: "Rating 5.0 on clutch"
        },
        {
            image: 'futurcard.png',
            desc: "Business bootcamp alumni"
        }
    ];
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3"  className='w-full h-[64vw] bg-zinc-950 '>
            <div ref={ref} className='flex justify-around pl-[2vw] pr-[3vw] pt-[9vw]'>
                {newCard.map((item, index) => (<Newcard reference={ref} newCard={item} index={index}/>))}
            </div>
        </div>
    )
}

export default projects