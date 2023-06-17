import React from 'react'
import Image from "next/image"

function Navbar(){
    return(
        <>
        <nav className='flex justify-between items-center px-[30px] h-[100px]'>
            <div>
                <h1 className="font-bold text-2xl text-[#142C44]">Connect - <span className='text-[#FF725E]'>Tuts</span></h1>
            </div>

            <div>
                <ul className='flex justify-around items-center gap-[40px]'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Process</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className="flex gap-4 items-center justify-center">
                <button className='bg-[#142C44] p-2 rounded-full text-white w-[100px]'>Demo</button>
                <div className="flex gap-4 items-center justify-center">
                    <div>
                        <Image src="/media1.png" width={10} height={10}/>
                    </div>
                    <div>
                        <Image src="/media2'.png" width={10} height={10}/>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar;