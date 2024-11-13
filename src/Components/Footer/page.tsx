import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="w-full bg-yellow-900 py-4">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">

        {/* Logo and Text Section */}
        <div className="flex items-center mb-4 sm:mb-0">
          <Image src="/images/mainlogo.jpg" alt="footerlogo" height={50} width={50} className="rounded-full" />
          <h1 className="font-serif text-2xl text-white py-2 px-4">Footer</h1>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4">
          <Link href="https://web.facebook.com/?_rdc=1&_rdr#" target="_blank">
            <Image src="/images/facebook-svg.svg" alt="facebook" height={45} width={45} className="cursor-pointer rounded-full" />
          </Link>
          <Link href="https://www.youtube.com/" target="_blank">
            <Image src="/images/youtube.svg" alt="youtube" height={35} width={40} className="cursor-pointer rounded-full" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <Image src="/images/instagram-svg.svg" alt="instagram" height={30} width={30} className="cursor-pointer rounded-full" />
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Footer;
