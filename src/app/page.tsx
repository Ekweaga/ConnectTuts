import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import {Heading,Flex} from "@chakra-ui/react"

import Navbar from "../components/Navbar"
import Footer from "../components/footer"

//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   

     <>

     <Navbar/>
     <div className="h-[540px] w-[100%] bg-[#EC6C3C] text-white p-4">
      <div className='flex justify-around items-center py-3'>
        <div>
          <h1 className='text-7xl font-bold leading-[80px]'>B2B Lead <br/>generation<br/> Sell Smart<br/> = Sell more</h1>
          <p className="w-[400px] mt-[20px]">Lorem ipsum dolor sit amet consectetur. Eget nunc dignissim eros arc
            u hac sed fermentum eu in. Enim tortor facilisis velit ut ultricies urna.

          </p>
          <div className='mt-[20px]'>
             <button className='bg-[#142C44] p-2 rounded-full text-white w-[150px]'>Learn more</button>
             <div>
              
             </div>
             </div>
        </div>
        <div className="py-3">
          <Image src="/Frame.png" width={550} height={400} alt="image"/>
        </div>
      </div>
     </div>



  <div className="bg-[#142C44] h-[240px] text-white flex items-center justify-center">
    <div className="flex gap-[30px] items-center justify-between">
      <div>
        <h1 className='text-3xl w-[350px]'>Lorem ipsum dolor sit amet consectetur.<br/> Pellentesque posuere orci suspendisse</h1>
      </div>
      <div className='flex items-center justify-center gpa-3'>
        <div>
          <Image src="/indeed.png" width={150} height={40} alt="indeed"/>        </div>
  <div>
       <Image src="/intuit.png" width={150} height={40} alt="intuit"/>        </div>
  <div>
        <Image src="/mastercard.png" width={150} height={40} alt="mastercard"/>        </div>
  <div>
        <Image src="/unilever.png" width={150} height={40} alt="unilever"/>        </div>

        <div>
        <Image src="/vodafone.png" width={150} height={40} alt="unilever"/>        </div>


      </div>
      
    </div>
  </div>


  <div className=" mt-[50px] bg-[#F1F2F4]">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-6xl text-center text-[#263238] mb-[30px] font-bold">How It Works</h1>
      <p className="text-center w-[900px] ">Lorem ipsum dolor sit amet consectetur. Nullam ac nulla nunc varius vestibulum. Lorem leo sed tellus at accumsan facilisi et. At et iaculis imperdiet bibendum vel adipiscing. 
        Magna convallis risus sit quis urna egestas lorem sagittis amet. Vestibulum lacus nibh amet dolor nam.</p>
    </div>

    <div className='mt-[30px]'>
      <h3 className="text-center font-bold text-2xl text-[#263238]">We do the hard work so you can focus on what's important, closing more business.</h3>
    </div>

    <div className=" flex items-center justify-center gap-[20px] mt-[50px]">

      <div className="bg-white h-[350px] w-[250px] relative p-3">
        <Image src="/Frame (1).png" width={60} height={30} alt="person"/>
        <div>
          <h2 className='text-[#142C44] font-bold text-2xl mb-[15px] mt-[15px]'>We identify potential clients</h2>
          <Image src="/Rectangle 13.png" width={30} height={10} alt="bar"/>
          <p className="text-sm mt-[20px]">Lorem ipsum dolor sit amet consectetur. Ipsum bibendum nec elementum nulla quisque scelerisque lectus egestas.</p>
        </div>
        <div className="absolute bottom-0 left-2 p-3">
          <Image src="/4781858_arrow_arrows_back_direction_left_icon 3.png" width={30} height={50} alt="arrow"/>
        </div>
      </div>

      <div className="bg-white h-[350px] w-[250px] relative p-3">
        <Image src="/Frame (2).png" width={60} height={30} alt="person"/>
        <div>
          <h2 className=' font-bold text-2xl mb-[15px] mt-[15px] text-[#FF9586]'>We craft an
outreach strategy</h2>
          <Image src="/Rectangle 13.png" width={30} height={10} alt="bar"/>
          <p className="text-sm mt-[20px]">Lorem ipsum dolor sit amet consectetur. Ipsum bibendum nec elementum nulla quisque scelerisque lectus egestas.</p>
        </div>
        <div className="absolute bottom-0 left-2 p-3">
          <Image src="/4781858_arrow_arrows_back_direction_left_icon 2.png" width={30} height={50} alt="arrow"/>
        </div>
      </div>


      <div className="bg-white h-[350px] w-[250px] relative p-3">
        <Image src="/Frame (3).png" width={60} height={30} alt="person"/>
        <div>
          <h2 className='text-[#142C44] font-bold text-2xl mb-[15px] mt-[15px]'>We handle the
outreach</h2>
          <Image src="/Rectangle 13.png" width={30} height={10} alt="bar"/>
          <p className="text-sm mt-[20px]">Lorem ipsum dolor sit amet consectetur. Ipsum bibendum nec elementum nulla quisque scelerisque lectus egestas.</p>
        </div>
        <div className="absolute bottom-0 left-2 p-3">
          <Image src="/4781858_arrow_arrows_back_direction_left_icon 3.png" width={30} height={50} alt="arrow"/>
        </div>
      </div>


      <div className="bg-white h-[350px] w-[250px] relative p-3">
        <Image src="/Frame 4.png" width={60} height={30} alt="person"/>
        <div>
          <h2 className='text-[#142C44] font-bold text-2xl mb-[15px] mt-[15px]'>We send you meeting
requests</h2>
          <Image src="/Rectangle 13.png" width={30} height={10} alt="bar"/>
          <p className="text-sm mt-[20px]">Lorem ipsum dolor sit amet consectetur. Ipsum bibendum nec elementum nulla quisque scelerisque lectus egestas.</p>
        </div>
        <div className="absolute bottom-0 left-2 p-3">
          <Image src="/4781858_arrow_arrows_back_direction_left_icon 3.png" width={30} height={50} alt="arrow"/>
        </div>
      </div>

    </div>
  </div>
   

   <div className="h-[350px] bg-[#142C44] text-white mt-[70px]">
    <div className="flex items-center justify-evenly px-4">
      <div><Image src="/people.png" width={500} height={300} alt="people"/></div>

      <div className='flex flex-col gap-3'>
        <h2 className="text-4xl font-bold">Who is<br/> Connect - <span className='text-[#FF725E]'>Tuts</span> For?</h2>
        <p className="w-[600px]">Lorem ipsum dolor sit amet consectetur. Viverra suscipit nisl pulvinar id. Blandit viverra amet proin arcu elementum platea sit elementum arcu. Urna id accumsan 
          nisi dictum tempus ornare arcu et.</p>

          <p className="w-[600px]">Lorem ipsum dolor sit amet consectetur. Viverra suscipit nisl pulvinar id. Blandit viverra amet proin arcu elementum platea
             sit elementum arcu. Urna id accumsan nisi dictum tempus ornare arcu et.</p>
      </div>
    </div>
    
   </div>

   <div className="bg-[#113474] h-[230px] text-white py-4 ">
    <div>
      <h1 className="text-white font-extrabold text-sm text-center py-4">Hard numbers that can be relied on</h1>

      <div className='flex justify-between items-center font-bold text-5xl mt-[30px] gap-[10px] w-[60%] mx-auto'>
        <div className="flex flex-col items-center justify-center">
          <Image src="/9044328_growth_icon 1 (1).png" width={50} height={100} alt="growth"/>
          <h2>800+</h2>
        </div>

        <div className="flex flex-col items-center justify-center">
<Image src="/9044610_industry_icon 1 (1).png" width={50} height={100} alt="growth"/>
          <h2>200k+</h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <Image src="/4230560_business_discussion_meeting_icon (1) 1 (1).png" width={50} height={100} alt="growth"/>
          <h2>147</h2>
        </div>
      </div>
    </div>
   </div>

   <div className="h-[350px]"></div>


   <Footer/>
  </>
  )
}
