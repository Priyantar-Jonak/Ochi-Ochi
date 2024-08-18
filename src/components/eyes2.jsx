import React, { useEffect, useState } from 'react'

function eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (p) => {
            let mouseX = p.clientX;
            let mouseY = p.clientY;

            let dX = mouseX - (window.innerWidth/2);
            let dY = mouseY - (window.innerHeight/2);

            let angle = Math.atan2(dY, dX) * (180/Math.PI);
            setRotate(angle - 180)
        })
    })

    return (
        <>
        <div className='flex px-[2vw] justify-center w-full h-[60vw] bg-[#004D43]'>
            <p className='flex text-center text-zinc-950 z-[1] pt-[13vw] left-1/2 uppercase font-mono text-[15vw] leading-[11.5vw] -tracking-[1vw] font-bold'>ready <br /> to start <br /> the project?</p>
            <div className='absolute pt-[18vw] eyes flex gap-[3vw] z-[3]'>
                <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-slate-100'>
                    <div className='relative w-[8.65vw] h-[8.65vw] rounded-full bg-zinc-900'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[100%] h-[1.5]'>
                            <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[13vw] h-[13vw] rounded-full bg-slate-100'>
                    <div className='relative w-[8.65vw] h-[8.65vw] rounded-full bg-zinc-950'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[100%] h-[1.5]'>
                            <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-[26.3vw] bg-[#004D43]'>
                <div className='font-bold m-auto items-center text-center mb-[1.5vw] bg-zinc-100 text-zinc-900 w-[20vw] px-[2vw] py-[1.35vw] rounded-full uppercase font-mono'>start the project</div>
                <p className='uppercase text-center text-[1.5vw] font-mono'>or</p>
                <div className='font-bold m-auto text-center mt-[1.5vw] border-[1px] border-zinc-100 text-zinc-100 w-[20vw] px-[2vw] py-[1.35vw] rounded-full uppercase font-mono'>hello@ochi.design</div>
            </div>
        </>
    )
}

export default eyes