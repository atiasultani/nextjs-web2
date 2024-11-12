import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer= () => {
  return ( 
<div className='flex justify-between w-auto h-14  bg-yellow-900 '>
<div className='flex font-serif'>
        <Image src="/images/mainlogo.jpg" alt="footerlogo" height={50} width={50} className='rounded-full ' />
        <h1 className='font-serif text-2xl py-5 px-2' > Footer</h1>
 </div>
<div className='flex justify-items-center'>
        <Link href="https://web.facebook.com/?_rdc=1&_rdr#" target='blank'>
        <Image src="/images/facebook-svg.svg" alt="facebook" height={45} width={45} className='pt-1.5 cursor-pointer rounded-full ' />
        </Link>
        <Link href="https://www.youtube.com/" target='blank'>
        <Image src="/images/youtube.svg" alt="youtube" height={35} width={40} className='cursor-pointer rounded-full pt-2' />
        </Link>
        <Link href="https://www.instagram.com" target='blank'>
        <Image src="/images/instagram-svg.svg" alt="instagram" height={30} width={30} className='cursor-pointer m-2 rounded-full pt-1.5 ' />
        </Link>
        </div>
        </div>
  )
}

export default Footer
