import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="w-full h-16 bg-green-500 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Logo Section */}
      <div className="flex items-center text-white text-2xl font-serif">
        <Image src="/images/mainlogo.jpg" alt="footerlogo" height={50} width={50} className="rounded-full mr-3" />
        <h1 className="text-xl sm:text-2xl md:text-3xl">Logo</h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden sm:flex gap-6">
        <Link href="/" className="px-4 py-2 rounded-2xl text-black text-2xl hover:bg-green-700 hover:text-white">
          Home
        </Link>
        <Link href="/scientific-name" className="px-4 py-2 rounded-2xl text-2xl text-black hover:bg-green-700 hover:text-white">
          Scientific Names
        </Link>
        <Link href="/plants-dontion" className="px-4 py-2 rounded-2xl text-2xl text-black hover:bg-green-700 hover:text-white">
          Plant Purchase/Donation
        </Link>
        <Link href="/contact-us" className="px-4 py-2 rounded-2xl text-2xl text-black hover:bg-green-700 hover:text-white">
          Contact Us
        </Link>
        <Link href="/login" className="px-4 py-2 rounded-2xl text-black text-2xl hover:bg-green-700 hover:text-white">
          Login
        </Link>
      </div>

      {/* Mobile Menu (Hamburger icon) */}
      <div className="sm:hidden">
        <button className="text-white text-3xl">☰</button>
      </div>
    </div>
  )
}

export default Header
