import React from 'react'
import Footer from '@/Components/Footer/page'
const page = () => {
  return (
<div className='grid w-auto'>
    <div className='main flex bg-[url(/images/background1.jpg)] bg-cover w-screen h-screen justify-evenly items-center'>
    
      <p className='text-[40px] font-serif text-cyan-700 '>Welcom To Our Plants World</p>
      
      <div className='login grid bg-gray-400 flex-col  w-[350px] h-96  bg-opacity-35 border-2 rounded-lg m-7'>
      
      <p className='w-auto mt-7'>
          <input className="email m-7 px-12" type="email | number" name="E-Mail" placeholder='Enter Your E-mail or Phone No' size={25} />
      </p>
      <p>
      <input className="password m-7 px-12" type="password" name="password" placeholder='Enter Your password' size={25}/>
      </p>
      <p className='text-center  mt-16 text-[20px] font-serif text-white'> Ready To Enter In New World</p>

 <button type='submit' className='border-2 border-white text-white px-16 mx-24 my-10'> Login </button>
      </div>
      </div>
      <Footer/>              
      </div>
 
  )
}

export default page
