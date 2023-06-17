import React from 'react'

function Footer() {
  return (
    <footer className="h-[350px] bg-[#142C44] text-white flex items-center justify-center">
        <div className='w-[80%] mx-auto'>
            <div className="flex items-center justify-around">
            <div>
            <h1 className="font-bold text-2xl text-white">Connect-<span className='text-[#FF725E]'>Tuts</span></h1>
            <ul className='mt-[20px] flex flex-col gap-3 text-sm'>
                <li>connecttuts@gmail.com</li>
                <li>09048837221</li>
                <li>08032125514</li>
            </ul>
            </div>
            <div>
                <h1 className="font-bold text-2xl">Quick Links</h1>
                <div className="flex gap-[40px]">
                <ul className='mt-[20px] flex flex-col gap-3 text-sm'>
                <li>About</li>
                <li>Process</li>
               
                <li>Pricing</li>
            </ul>

            <ul className='mt-[20px] flex flex-col gap-3 text-sm'>
                <li>Contact</li>
            
               
                <li>Blog</li>
            </ul>
                </div>
              
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Policies</h1>
                <ul className="flex flex-col gap-3 mt-[20px] text-sm">
                    <li>Privacy policy</li>
                    <li>Terms of services</li>
                </ul>
            </div>
            <div>
                <h1 className='font-bold text-2xl'>Helpful Links</h1>
                <ul className='flex flex-col gap-3 mt-[20px] text-sm'>
                    <li>
                        GDPR Guide
                    </li>
                    <li>Setup my account</li>
                </ul>
            </div>

            </div>
            <br/>
            <div className="border-[1px] solid"></div>

            <div></div>
           
        </div>
    </footer>
  )
}

export default Footer