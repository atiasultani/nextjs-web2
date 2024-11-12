import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer/page'
export default function contactus() {
  return (
    <div className='grid w-auto h-auto bg-orange-200'>
<h1 className='grid text-3xl text-green-900 font-serif text-center m-7'>About Us</h1>
<p className='grid  text-black text-center'>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>Fuga quos debitis quidem a natus sit consequuntur quibusdam iure earum <br/>eaque animi vel, voluptates non praesentium minus maxime  mollitia aut enim!
</p>
      <div className='flex justify-center m-4'>
      <div className='grid'>
      <Image src="/images/growing methode.jpg" alt='growing' width={220} height={120} /> </div> 
      
      <div className='grid'>
      <Image src="/images/how-to-care.jpg" alt='care' width={220} height={120}/> </div> 

      <div className='grid'>
      <Image src="/images/medicinal.jpg" alt='medicinal' width={220} height={120}/></div> 
      </div>

      <div className='grid state opacity-45 ml-16 mt-10'>
<Image src="/images/fall-autumn.jpg" alt="bg" width={900} height={450} />
</div>
      
      
      <div className='divf grid mx-auto static mt-[-630px] ml-96  opacity-90 '>
      <h1 className=' grid text-[45px] font-serif  text-black  pb-8 ml-3'>
      Contact Us </h1>
      <div className='w-auto ml-[-2]'>
      <b>Name :</b>
     <br/>
      <input id="name" type="text" name="Full Name" placeholder="Enter Your Full Name"
        required  className=' mb-6 border-b-2 border-green-800 px-14 '/>
      <br/>
    

      <b>Nationality: </b>
      <br/>
      <input id="nationality" type="text" name="nationality" placeholder='Nationality' className=' mb-6 border-b-2 border-green-800 px-14' />
      <br />

      <b>Phone no : </b>
      <br/>  
      <input id="phone" type="tel" name="ph" placeholder='Contact Phone No' className=' mb-6 border-b-2 border-green-800 px-14' />
  
      <br/>
  
      <b> Massage : </b>
      <br/>
      <textarea id="exp" name="massage" placeholder="Write Your Massage Here"  className=' text-center px-16 py-24 mb-6 border-2 border-green-800 ' ></textarea>
</div>      
      
      
      </div>
      <button type='submit' className=' grid w-32 ml-[470px] mb-10 border-black bg-green-900 text-white '>
       Submit </button>
      
      <Footer/>
      </div>
      
      
  )
}
