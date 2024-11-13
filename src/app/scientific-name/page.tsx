import React from 'react'
import Image from 'next/image'
import Header from '@/Components/Header/page'
import Footer from '@/Components/Footer/page'

const page = () => {
  return (
    <div className="w-full h-auto">
      <Header />
      <div className="bg-black flex-col">

        {/* First Section */}
        <section className="flex flex-col sm:flex-row py-5">
          <div className="flex justify-center sm:justify-start py-6 px-5">
            <Image src="/images/orangerose.jpg" alt="plant-picture" width={300} height={300} className="rounded-full outline-6 outline-lime-400 outline-dashed" />
          </div>
          <p className="text-white px-12 py-10 sm:py-24 text-center sm:text-left">
            Rosa Soleil didOr is a Foetida hybrid rose cultivar bred by Joseph Pernet-Ducher and introduced on November 1, 1900. It is the ancestor of all modern Hybrid tea roses and the first yellow-orange rose. Pernet-Ducher later crossed Soleil dOr with Tea roses to create a new class known as Pernetiana roses.
          </p>
        </section>

        {/* Second Section */}
        <section className="flex flex-col sm:flex-row py-5">
          <div className="flex justify-center sm:justify-start py-6 px-5">
            <Image src="/images/sadabahar.jpg" alt="plant-picture" width={300} height={300} className="rounded-full outline-6 outline-lime-400 outline-dashed" />
          </div>
          <p className="text-white px-11 sm:px-5 text-center sm:text-left relative">
            <h1 className="font-bold text-lg sm:text-xl">Introduction:</h1>
            Sadabahar, natively called periwinkle, is an ornamental plant cultivated throughout tropical and subtropical areas. The flowers bloom in March or April. Alba variety has white flowers, while Atropurpurea has purple flowers. Various health benefits Sadabahar leaves have to offer.

            <h1 className="font-bold text-lg sm:text-xl mt-5">Nutritional Value of Sadabahar</h1>
            Sadabahar leaves and flower petals are rich in flavonoids, alkaloids, carbohydrates, and phytochemicals like vincristine, vinblastine, vincardine, etc.
            <h1 className="font-bold text-lg sm:text-xl mt-5">The nutritional components of Sadabahar leaves are mentioned below:</h1>
            <ul className="list-none px-5 mt-3">
              <li>Energy: 354 kCal</li>
              <li>Protein: 5.2 g</li>
              <li>Fat: 3.3 g</li>
              <li>Fibre: 2.4 g</li>
              <li>Calcium: 340 mg</li>
              <li>Iron: 27 mg</li>
              <li>Vitamin C: 0.02 mg</li>
            </ul>
          </p>
        </section>

        {/* Third Section */}
        <section className="flex flex-col sm:flex-row py-5">
          <div className="flex justify-center sm:justify-start py-6 px-5">
            <Image src="/images/sunflower.jpg" alt="plant-picture" width={300} height={300} className="rounded-full outline-6 outline-lime-400 outline-dashed" />
          </div>
          <p className="text-white px-11 py-10 sm:px-5 sm:py-24 text-center sm:text-left">
            Sunflower (genus Helianthus) is a genus of nearly 70 species of herbaceous plants of the aster family (Asteraceae). Sunflowers are native primarily to North and South America, and some species are cultivated as ornamentals for their spectacular size, flower heads, and for their edible seeds. The Jerusalem artichoke (Helianthus tuberosus) is cultivated for its edible underground tubers.
          </p>
        </section>

        {/* Fourth Section */}
        <section className="flex flex-col sm:flex-row py-5">
          <div className="flex justify-center sm:justify-start py-6 px-5">
            <Image src="/images/tulip.jpg" alt="plant-picture" width={300} height={300} className="rounded-full outline-6 outline-lime-400 outline-dashed" />
          </div>
          <p className="text-white px-10 py-10 sm:px-5 sm:py-24 text-center sm:text-left">
            <h1 className="font-bold text-lg sm:text-xl">Taxonomy:</h1>
            The scientific name of the tulip is <i>Tulipa gesneriana</i>. The genus <i>Tulipa</i> comprises about 75 species of bulbous plants that are native to Europe, Asia, and North Africa. The name Tulipa is derived from the Turkish word tulbend meaning turban as the flower is shape resembles a turban. The species name gesneriana honors the Swiss naturalist and botanist Conrad Gesner (1516-1565) who wrote extensively about plants and animals.
          </p>
        </section>

        {/* Fifth Section */}
        <section className="flex flex-col sm:flex-row py-5">
          <div className="flex justify-center sm:justify-start py-6 px-5">
            <Image src="/images/blosoom.jpg" alt="plant-picture" width={300} height={300} className="rounded-full outline-6 outline-lime-400 outline-dashed" />
          </div>
          <p className="text-white px-11 py-10 sm:px-5 sm:py-24 text-center sm:text-left">
            The cherry blossom or sakura is the flower of trees in the Prunus subgenus Cerasus. Sakura usually refers to flowers of ornamental cherry trees such as cultivars of <i>Prunus serrulata</i>, not trees grown for their fruit (although these also have blossoms). Cherry blossoms have been described as having a vanilla-like smell, which is mainly attributed to coumarin. Wild species of cherry trees are widely distributed.
          </p>
        </section>

      </div>
      <Footer />
    </div>
  )
}

export default page;
