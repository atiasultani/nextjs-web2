import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header= () => {
  return (
    
    <div className=' w-auto h-14 bg-green-800 bg-opacity-75 flex justify-between items-center px-3'>
      <div className='logo text-white text-[36px] font-serif flex my-5'>
      <Image src="/images/mainlogo.jpg" alt="footerlogo" height={50} width={50} className='rounded-full ' />

         <h1>Logo</h1></div>  
      <div className='buttons flex  gap-5'>  
      <Link href='/' className=' rounded-2xl outline-none outline-white px-5 py-1 hover:bg-black hover:text-white text-white '>Home</Link>
      <Link href='/scientific-name' className='grid rounded-2xl outline-none outline-white p-1 hover:bg-black hover:text-white text-white'>Scientific Names</Link>
       <Link href='/plants-dontion' className='grid rounded-2xl outline-none outline-white p-1 hover:bg-black hover:text-white text-white'>Plant Purchase/Donation</Link>
       <Link href='/contact-us' className='grid rounded-2xl outline-none outline-white p-1 hover:bg-black hover:text-white text-white'>Contact us </Link>
        <Link href='/login' className='grid rounded-2xl outline-none outline-white p-1 px-5 hover:bg-black hover:text-white text-white'>Login</Link>
        </div>
        </div>
    
  )
}

export default Header
