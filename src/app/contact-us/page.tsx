import React from 'react'
import Image from 'next/image'
import Header from '@/Components/Header/page'
import Footer from '@/Components/Footer/page'

export default function contactus() {
  return (
    <div className='w-full h-auto bg-orange-200'>
      <Header />

      <h1 className='text-3xl text-green-900 font-serif text-center mt-7 mb-4 px-4 md:px-0'>
        About Us
      </h1>

      <p className='text-black text-center px-6 md:px-12'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga quos debitis
        quidem a natus sit consequuntur quibusdam iure earum eaque animi vel,
        voluptates non praesentium minus maxime mollitia aut enim!
      </p>

      {/* Image Grid Section */}
      <div className='flex flex-col sm:flex-row justify-center gap-6 mt-8 mb-8'>
        <div className='flex justify-center'>
          <Image src='/images/growing methode.jpg' alt='growing' width={220} height={120} />
        </div>

        <div className='flex justify-center'>
          <Image src='/images/how-to-care.jpg' alt='care' width={220} height={120} />
        </div>

        <div className='flex justify-center'>
          <Image src='/images/medicinal.jpg' alt='medicinal' width={220} height={120} />
        </div>
      </div>

      {/* Background Image Section */}
      <div className='relative opacity-45'>
        <Image src='/images/fall-autumn.jpg' alt='bg' width={900} height={450} className='w-full h-auto object-cover' />
      </div>

      {/* Contact Form Section */}
      <div className='relative z-10 mt-[-630px] mx-4 md:mx-16'>
        <h1 className='text-3xl font-serif text-black pb-8 text-center md:text-left'>
          Contact Us
        </h1>

        <div className='w-full mx-auto'>
          <div className='mb-6'>
            <b>Name :</b>
            <br />
            <input
              id='name'
              type='text'
              name='Full Name'
              placeholder='Enter Your Full Name'
              required
              className='mb-6 border-b-2 border-green-800 w-full p-3 text-lg focus:outline-none'
            />
          </div>

          <div className='mb-6'>
            <b>Nationality :</b>
            <br />
            <input
              id='nationality'
              type='text'
              name='nationality'
              placeholder='Nationality'
              className='mb-6 border-b-2 border-green-800 w-full p-3 text-lg focus:outline-none'
            />
          </div>

          <div className='mb-6'>
            <b>Phone No :</b>
            <br />
            <input
              id='phone'
              type='tel'
              name='ph'
              placeholder='Contact Phone No'
              className='mb-6 border-b-2 border-green-800 w-full p-3 text-lg focus:outline-none'
            />
          </div>

          <div className='mb-6'>
            <b>Message :</b>
            <br />
            <textarea
              id='exp'
              name='message'
              placeholder='Write Your Message Here'
              className='w-full p-6 text-lg border-2 border-green-800 focus:outline-none'
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-32 bg-green-900 text-white mx-auto block mt-8 px-4 py-2 text-lg rounded hover:bg-green-700 transition duration-200'
          >
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
