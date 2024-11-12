import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer= () => {
  return (
<div className='grid w-auto'>    
<div className='w-auto h-14 px-3 font-serif bg-green-800 bg-opacity-75  flex justify-between'>
<div className='flex'>
        <Image src="/images/mainlogo.jpg" alt="footerlogo" height={50} width={50} className='rounded-full ' />
        <h1 className='font-serif text-2xl py-5' > Footer</h1>
        </div>
<div className='flex '>
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
    </div>
  )
}

export default Footer
