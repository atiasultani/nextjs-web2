import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer/page'



const page = () => {
  return (
<div className='grid grid-flow-row w-auto h-100'>
    <div className='bg-black  flex-col'>
      <section className='flex py-5 '>
<div className='py-24 pl-5'>
        <Image src="/images/orangerose.jpg" alt='plant-picture' width={450} height={50} className='rounded-full outline-6 outline-lime-400 outline-dashed  outline-t-white p-0 m-0 h-19' />
        </div>
        <p className=' px-12 py-[10rem] text-white '>
          Rosa Soleil didOr  is a Foetida hybrid rose cultivar bred by Joseph Pernet-Ducher and introduced<br /> on November 1 1900 It is the ancestor of all modern Hybrid tea roses and<br /> the first yellow orange rose Pernet-Ducher later crossed Soleil dOr with Tea roses <br />to create a new class known as Pernetiana roses </p>
      </section>

      <section className='flex  '>
      <div className='py-19 pl-5'>
        <Image src="/images/sadabahar.jpg" alt='plant-picture' width={1050} height={150} className='rounded-full outline-6 outline-lime-400 outline-dashed ' />
        </div>
        <p className='px-11  text-white relative'>
          <h1 className='font-bold'>Introduction:</h1>
          Sadabahar Natively called periwinkle
          <br /> This ornamental plant is cultivated throughout tropical and subtropical areas The flowers bloom in March or April. Alba variety has white flowers Atropurpurea has purple flowers various health benefits Sadabahar leaves has to offer

          <h1 className='font-bold'>Nutritional Value of Sadabahar </h1>
          Sadabahar leaves and flower petals are rich in flavonoids alkaloids carbohydrates
          phytochemicals like vincristine vinblastine vincardine etc<br />
          <h1 className='font-bold'> The nutritional components of Sadabahar leaves are mentioned below </h1>
          Benefits of Sadabahar<br />
          Energy: 354 kCal<br />
          Protein: 5.2 g<br />
          Fat: 3.3 g<br />
          Fibre: 2.4 g<br />
          Calcium: 340 mg<br />
          Iron: 27 mg<br />
          Vitamin C: 0.02 mg<br />
        </p>
      </section>

      <section className='flex pl-5'>
      <div className='py-32'>

        <Image src="/images/sunflower.jpg" alt='plant-picture' width={600} height={50} className='rounded-full border-6 outline-lime-400 border-t-white outline-dashed ' />
</div>
        <p className='px-11 py-52 text-white'>
          sunflower (genus Helianthus) genus of nearly 70 species of herbaceous plants of the aster family (Asteraceae) <br /> Sunflowers are native primarily to North and South America and some species are cultivated as ornamentals for their spectacular size and <br />flower heads and for their edible seeds The Jerusalem artichoke (Helianthus tuberosus) is cultivated for its edible underground tubers
        </p>
      </section>

      <section className='flex py-5'>

      <div className='py-11 pl-5'>
        <Image src="/images/tulip.jpg" alt='plant-picture' width={450} height={80} className='rounded-full outline-6 outline-lime-400 outline-dashed ' />
      </div>
        <p className=' px-10 py-32 text-white'>
          <h1>Taxonomy:</h1>

          The scientific name of the tulip is Tulipa gesneriana. The genus Tulipa
          <br />omprises about 75 species of bulbous plants that are native to Europe,
          <br />Asia and North Africa The name Tulipa is derived from the Turkish word
          <br />tulbend which means turban as the flowers shape resembles a turban
          <br />The species name gesneriana honors the Swiss naturalist and <br />botanist Conrad Gesner(1516-1565) who wrote extensively about plants and animals
        </p>
      </section>

      <section className='flex py-5 pl-5 '>
      <div className='pb-5 pt-14'>

        <Image src="/images/blosoom.jpg" alt='plant-picture' width={700} height={50} className=' outline-dashed outline-6 outline-lime-400 rounded-full' />
</div>
        <p className=' px-11 py-[9.5rem] text-white'>
          The cherry blossom or sakura is the flower of trees in Prunus subgenus Cerasus<br /> Sakura usually refers to flowers of ornamental cherry trees such as cultivars of Prunus serrulata<br /> not trees grown for their fruit (although these also have blossoms) Cherry blossoms have been <br />described as having a vanilla-like smell which is mainly attributed to coumarin Wild species of cherry tree are widely distributed
        </p>
      </section>
      
    </div>
    <Footer/>
    </div>
  )
}

export default page








