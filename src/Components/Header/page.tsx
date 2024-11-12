import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Header= () => {
  return (
        <div className='sm:[wx-auto] md:[wx-auto] lg:[wx-auto] xl:[wx-auto] w-100 h-14 bg-yellow-900 flex justify-between items-center px-3'>
      <div className='logo text-white text-[36px] font-serif flex my-5'>
      <Image src="/images/mainlogo.jpg" alt="footerlogo" height={50} width={50} className='rounded-full ' />

         <h1>Logo</h1></div>  
      <div className='buttons flex  gap-5'>  
      <Link href='/' className='sm:[px-auto py-auto text-8] md:[px-3 py-1] lg:[px-3 py-1] xl:[px-3 py-1] px-3 py-1 rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black '>Home</Link>
      <Link href='/scientific-name' className='grid sm:[ p-auto text-8] md:[ p-1] lg:[p-1] xl:[p-1] p-1 rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black'>Scientific Names</Link>
       <Link href='/plants-dontion' className='grid sm:[ p-auto text-8] md:[p-1] lg:[p-1] xl:[p-1] p-1 rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black'>Plant Purchase/Donation</Link>
       <Link href='/contact-us' className='grid sm:[ p-auto text-8] md:[ p-1] lg:[ p-1] xl:[p-1] rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black'>Contact us </Link>
        <Link href='/login' className='grid sm:[px-auto py-auto text-8] md:[px-5 py-1] lg:[px-5 py-1] xl:[px-5 py-1] px-5 py-1  rounded-2xl outline-none outline-white  hover:bg-green-700 hover:text-white text-black'>Login</Link>
        </div>
        </div>
    
  )
}

export default Header
