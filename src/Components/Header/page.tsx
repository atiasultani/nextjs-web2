import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header= () => {
  return (
    
    <div className='sm:w-auto md:w-auto lg:w-auto xl:w-auto w-100 h-14 bg-green-800  bg-opacity-75  flex justify-between items-center px-3'>
      <div className='logo text-white text-[36px] font-serif flex my-5'>
      <Image src="/images/mainlogo.jpg" alt="footerlogo" height={50} width={50} className='rounded-full ' />

         <h1>Logo</h1></div>  
      <div className='buttons grid  gap-5'>  
      <Link href='/' className='px-5 py-1 rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black '>Home</Link>
      <Link href='/scientific-name' className='grid p-1 rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black'>Scientific Names</Link>
       <Link href='/plants-dontion' className='grid p-1 rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black'>Plant Purchase/Donation</Link>
       <Link href='/contact-us' className='grid p-1 rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black'>Contact us </Link>
        <Link href='/login' className='grid  p-1 px-5 rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black'>Login</Link>
        </div>
        </div>
    
  )
}

export default Header
