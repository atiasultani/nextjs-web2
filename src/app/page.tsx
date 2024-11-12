import React from 'react'
import Image from 'next/image'
import Header from '@/Components/Header/page'
import Footer from '@/Components/Footer/page'
const page = () => {
  return (
    <div className='grid w-auto'>
   <Header/>   
<div className='grid state w-auto'>
<Image src="/images/bg1.jpg" alt="bg" width={1000} height={550}  className='relative'/>
<section className='mt-[-750px] relative'>
 <h1 className='grid  text-[3.8rem] text-center font-serif' > Here You Are Reading <br/>About Plants</h1>
<p className='grid w-auto text-[1.5rem] px-14 font-serif '> Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Recusandae asperiores inventore rem alias quo,<br/> voluptate ullam eos, consequuntur excepturi pariatur facilis<br/> eligendi? Excepturi,<br/> officiis. Labore distinctio quasi officiis sit eos!</p>
<ol className='grid list-disc text-[20px] px-[5em] leading-[2.8rem]'> 
  <li> Type of Plants </li>
  <li> Scientific Names </li>
  <li> Price of Plants </li>
  <li> About Us </li>
  <li> Contact Us</li>
</ol>
</section>
</div>
      
      <div className='maindiv grid w-auto'>
        <div className='flex justify-evenly '>
          <div className='grid p-16'>
            <h1 className='font-bold text-[33px]'>Plants</h1>
            <p>Plants typically have six basic parts: roots, stems, leaves, flowers,<br /> fruits, and seeds. Draw a diagram of your plants and label each part. Takes in water and nutrients.</p>
          </div>
          <div className='grid p-10'>
            <Image src="/images/moneyplant.webp" alt='plant-picture' width={250} height={250} className='rounded-full outline-6 outline-emerald-600 outline-double' />
          </div>
        </div>

        <div className='heading2 flex  justify-evenly '>

          <div className='image grid px-4  '>
            <Image src="/images/bean-pkant-root.jpg" alt='plant-picture'
              width={350} height={350} className='rounded-full outline-6 outline-emerald-600 outline-double' />
          </div>
          <div className='grid p-7'>
            <h1 className='font-bold text-[33px]'>Roots</h1>
            <p>The roots of a plant take up water and nutrients from the soil. They also anchor the plant to the ground and keep it steady.<br /> Sometimes roots are modified to perform the basic chemical and physical processes needed by the plant<br />  to grow and survive, based on which roots are classified into the following types2:<br />
              Storage roots: They become fleshy to store reserve food materials.<br /> Examples: Radish, carrot, beet, Mirabilis, and Echinocystis</p>
          </div>
      </div>

<div className='heading3 flex  justify-evenly '>
<div className='grid p-16'>
  <h1 className='font-bold text-[33px]'>Stem</h1>
  <p> A stem is one of two main structural axes of a vascular plant, the other being the root. It supports leaves,<br/> flowers and fruits, transports water and dissolved substances between the roots and the shoots<br/> in the xylem and phloem, engages in photosynthesis, stores nutrients, and produces new living tissue.</p>
</div>
<div className='grid image px-4  '>
  <Image src="/images/stem.jpg" alt='plant-picture'
    width={250} height={250} className='rounded-full outline-6 outline-emerald-600 outline-double' />
</div>
</div>
</div>
<Footer/>
           </div>
      )
}

      export default page
