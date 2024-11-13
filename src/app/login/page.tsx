import React from 'react'
import Header from '@/Components/Header/page'
import Footer from '@/Components/Footer/page'

const page = () => {
  return (
    <div className='w-full'>
      <Header />
      
      <div className='main flex bg-[url(/images/background1.jpg)] bg-cover bg-center w-full h-screen justify-center items-center'>
        
        <div className='text-center'>
          <p className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-cyan-700'>
            Welcome To Our Plants World
          </p>
          
          <div className='login grid bg-gray-400 bg-opacity-35 border-2 rounded-lg w-80 sm:w-96 md:w-[400px] h-auto mt-6 p-6'>
            <p className='w-full'>
              <input
                className="email w-full mb-4 px-4 py-2 rounded-lg border-2 border-gray-300"
                type="email"
                name="E-Mail"
                placeholder='Enter Your E-mail or Phone No'
              />
            </p>
            
            <p className='w-full'>
              <input
                className="password w-full mb-4 px-4 py-2 rounded-lg border-2 border-gray-300"
                type="password"
                name="password"
                placeholder='Enter Your Password'
              />
            </p>
            
            <p className='text-center mt-6 text-lg sm:text-xl text-white'>
              Ready To Enter In New World
            </p>
            
            <button
              type='submit'
              className='w-full bg-cyan-700 text-white py-2 mt-6 rounded-lg border-2 border-cyan-700 hover:bg-transparent hover:text-cyan-700 transition'
            >
              Login
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default page
