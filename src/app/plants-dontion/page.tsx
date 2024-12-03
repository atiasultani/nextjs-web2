import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='w-full'>

      {/* Cart Button */}
      <button className='cart fixed rounded-full ml-[55rem] mt-24 md:ml-[45rem] lg:ml-44 xl:ml-[30rem]'>
        <Image src="/images/cart.jpg" alt="YourCart" title='YourCart' width={50} height={50} className='rounded-full'/>
      </button>

      {/* Title Section */}
      <h1 className='text-[35px] bg-slate-500 text-white opacity-25 font-serif font-extralight text-center relative py-8'>
        Purchasing OR Donation For Plants
      </h1>

      {/* Product Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-40 lg:px-[8em] lg:py-9 px-4'>
        {/* Product 1 */}
        <div className='flex flex-col border-black border-2 h-[295px] w-full '>
          <Image src="/images/tropicl flower.jpg" alt="flower" width={200} height={150} className='m-5'/>
          <p className='text-center font-bold'>Price: 60$</p>
          <div className='flex justify-center space-x-2'>
            <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
            <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchase</button>
          </div>
        </div>

        {/* Product 2 */}
        <div className='flex flex-col border-black border-2 h-[295px] w-full'>
          <Image src="/images/hibicus.jpg" alt="flower" width={200} height={250} className='m-5 py-7'/>
          <p className='text-center font-bold'>Price: 100$</p>
          <div className='flex justify-center space-x-2'>
            <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
            <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchase</button>
          </div>
        </div>

        {/* Product 3 */}
        <div className='flex flex-col border-black border-2 h-[295px] w-full'>
          <Image src="/images/pito.jpg" alt="spices" width={200} height={250} className='m-5 py-6'/>
          <p className='text-center font-bold'>Price: 65$</p>
          <div className='flex justify-center space-x-2'>
            <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
            <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchase</button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 lg:gap-40 lg:px-[8em] lg:py-9'>
        {/* Product 4 */}
        <div className='flex flex-col border-black border-2 h-[295px] w-full'>
          <Image src="/images/tree2.jpg" alt="plant tree" width={200} height={150} className='m-5 py-1'/>
          <p className='text-center font-bold'>Price: 260$</p>
          <div className='flex justify-center space-x-2'>
            <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
            <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchase</button>
          </div>
        </div>

        {/* Product 5 */}
        <div className='flex flex-col border-black border-2 h-[295px] w-full'>
          <Image src="/images/white-rose.jpg" alt="white rose" width={200} height={150} className='m-3 pl-3 pb-4'/>
          <p className='text-center font-bold'>Price: 360$</p>
          <div className='flex justify-center space-x-2'>
            <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
            <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchase</button>
          </div>
        </div>

        {/* Product 6 */}
        <div className='flex flex-col border-black border-2 h-[295px] w-full'>
          <Image src="/images/rose.jpg" alt="rose" width={200} height={150} className='m-5'/>
          <p className='text-center font-bold'>Price: 400$</p>
          <div className='flex justify-center space-x-2'>
            <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
            <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchase</button>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4 lg:gap-40 lg:px-[8em] lg:py-9'>
        {/* Product 7 */}
        <div className='flex flex-col border-black border-2 h-[295px] w-full'>
          <Image src="/images/tree.jpg" alt="tree" width={200} height={150} className='m-5 mb-20'/>
          <p className='text-center font-bold'>Price: 160$</p>
          <div className='flex justify-center space-x-2'>
            <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
            <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchase</button>
          </div>
        </div>

        {/* Product 8 */}
        <div className='flex flex-col border-black border-2 h-[295px] w-full'>
          <Image src="/images/pink-lolipop.jpg" alt="pink lollipop" width={165} height={150} className='mt-5 ml-10 mb-4'/>
          <p className='text-center font-bold'>Price: 260$</p>
          <div className='flex justify-center space-x-2'>
            <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
            <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
