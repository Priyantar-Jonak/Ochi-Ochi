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
        <div className='flex items-center justify-center w-full h-screen bg-zinc-900'>
            <div className='flex items-end w-[73vw] h-[40vw] bg-[#CDEA68] overflow-hidden'>
                <div className='flex'>
                    <div className='w-[10vw] h-[10vw] rounded-full bg-[yellowgreen]'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full bg-[yellowgreen]'></div>
                </div>
                <div className=''>
                    <div className='w-[10vw] h-[10vw] rounded-full bg-[yellowgreen]'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full bg-[#d66754]'></div>
                </div>
                <div className=''>
                    <div className='w-[10vw] h-[10vw] rounded-full bg-[yellowgreen]'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full'></div>
                </div>
                <div className=''>
                    <div className='w-[10vw] h-[10vw] rounded-full bg-[yellowgreen]'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full'></div>
                </div>
                <div className=''>
                    <div className='w-[10vw] h-[10vw] rounded-full bg-[#d66754]'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full'></div>
                    <div className='w-[10vw] h-[10vw] rounded-full'></div>
                </div>
                <div className=''>
                    <div className='w-[10vw] h-[10vw] rounded-full bg-[#d66754]'></div>
                </div>
            </div>
            <div className='absolute eyes flex gap-[10vw]'>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-slate-100'>
                    <div className='relative w-[10vw] h-[10vw] rounded-full bg-zinc-950'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[100%] h-[1.5]'>
                            <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-slate-100'>
                    <div className='relative w-[10vw] h-[10vw] rounded-full bg-zinc-950'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-[100%] h-[1.5]'>
                            <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-zinc-100'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default eyes