import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer/page'
const page = () => {
  return (
<div className='grid w-auto'>
      <button className='cart fixed rounded-full ml-[55rem] mt-24'><Image src="/images/cart.jpg" alt="YourCart" title='YourCart' width={50} height={50} className='rounded-full'/></button>  
      <h1 className='text-[35px] bg-slate-500 text-white opacity-25 font-serif font-extralight text-center reltive'> Purchasing OR Dontion For Plants </h1>
      
    <div className='flex justify-evenly'>

      <div className='flex-col border-black border-2 h-[295px] w-[245px] m-5'>
        <Image src="/images/tropicl flower.jpg" alt="flower" width={200} height={150} className='m-5'/>
        <p className='text-center font-bold'>Price: 60$ </p>
        <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
        <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchas</button>
      </div>

      <div className='flex-col border-black border-2 h-[295px] w-[245px] m-5'>
        <Image src="/images/hibicus.jpg" alt="flower" width={200} height={250} className='m-5 py-7'/>
        <p className='text-center font-bold'>Price: 100$ </p>
        <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
        <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchas</button>
      </div>

      <div className='flex-col border-black border-2 h-[295px] w-[245px] m-5'>
        <Image src="/images/pito.jpg" alt="showpices" width={200} height={250} className='m-5 py-6'/>
        <p className='text-center font-bold'>Price: 65$ </p>
        <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
        <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchas</button>
      </div>

    </div>


    <div className='flex justify-evenly'>

      <div className='flex-col border-black border-2 h-[295px] w-[245px] m-5'>
        <Image src="/images/tree2.jpg" alt="plm tree" width={200} height={150} className='m-5 py-1'/>
        <p className='text-center font-bold'>Price: 260$ </p>
        <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
        <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchas</button>
      </div>

      <div className='flex-col border-black border-2 h-[295px] w-[245px] m-5'>
        <Image src="/images/white-rose.jpg" alt="white-rose" width={200} height={150} className='m-3 pl-3 pb-4'/>
        <p className='text-center font-bold'>Price: 360$ </p>
        <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
        <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchas</button>
      </div>

      <div className='flex-col border-black border-2 h-[295px] w-[245px] m-5'>
        <Image src="/images/rose.jpg" alt="rose" width={200} height={150} className='m-5'/>
        <p className='text-center font-bold'>Price: 400$ </p>
        <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
        <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchas</button>
      </div>

    </div>

    <div className='flex justify-evenly'>

      <div className='flex-col border-black border-2 h-[295px] w-[245px] m-5'>
        <Image src="/images/tree.jpg" alt="tree" width={200} height={150} className='m-5 mb-20'/>
        <p className='text-center font-bold'>Price: 160$ </p>
        <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
        <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchas</button>
      </div>

      <div className='flex-col border-black border-2 h-[295px] w-[245px] m-5'>
        <Image src="/images/pink-lolipop.jpg" alt="" width={165} height={150} className='mt-5 ml-10 mb-4'/>
        <p className='text-center font-bold'>Price: 260$ </p>
        <button className='submit border-1 border-lime-950 bg-blue-500 text-center font-semibold font-serif px-6 py-1 m-1'>Donate</button>
        <button className='submit border-1 border-lime-950 bg-yellow-500 text-center font-semibold font-serif px-6 py-1 m-1'>Purchas</button>
      </div>

    </div>
<Footer/>
</div>
  )
}

export default page
