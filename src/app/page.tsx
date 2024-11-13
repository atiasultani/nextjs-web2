import React from 'react'
import Image from 'next/image'
import Header from '@/Components/Header/page'
import Footer from '@/Components/Footer/page'

const page = () => {
  return (
    <div className="w-full">
      <Header />

      <div className="grid w-full">
        <Image
          src="/images/bg1.jpg"
          alt="bg"
          width={1000}
          height={550}
          className="w-full h-auto object-cover"
        />
        <section className="mt-[-750px] relative px-4">
          <h1 className="text-center text-3xl md:text-4xl font-serif">
            Here You Are Reading <br />About Plants
          </h1>
          <p className="text-lg md:text-xl text-center px-6 md:px-14 font-serif mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Recusandae asperiores inventore rem alias quo, <br />
            voluptate ullam eos, consequuntur excepturi pariatur facilis <br />
            eligendi? Excepturi, officiis. Labore distinctio quasi officiis sit
            eos!
          </p>
          <ol className="list-disc text-xl px-6 md:px-20 mt-4 leading-7">
            <li>Type of Plants</li>
            <li>Scientific Names</li>
            <li>Price of Plants</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ol>
        </section>
      </div>

      <div className="maindiv grid gap-8 p-6 md:p-16">
        <div className="flex flex-col md:flex-row justify-evenly gap-8">
          <div className="grid p-4 md:p-16">
            <h1 className="font-bold text-3xl md:text-4xl">Plants</h1>
            <p className="mt-4">
              Plants typically have six basic parts: roots, stems, leaves,
              flowers, fruits, and seeds. Draw a diagram of your plants and label
              each part. Takes in water and nutrients.
            </p>
          </div>
          <div className="grid p-4 md:p-10">
            <Image
              src="/images/moneyplant.webp"
              alt="plant-picture"
              width={250}
              height={250}
              className="rounded-full outline-6 outline-emerald-600 outline-double"
            />
          </div>
        </div>

        <div className="heading2 flex flex-col md:flex-row justify-evenly gap-8">
          <div className="image grid px-4">
            <Image
              src="/images/bean-pkant-root.jpg"
              alt="plant-picture"
              width={350}
              height={350}
              className="rounded-full outline-6 outline-emerald-600 outline-double"
            />
          </div>
          <div className="grid p-4 md:p-7">
            <h1 className="font-bold text-3xl md:text-4xl">Roots</h1>
            <p className="mt-4 text-lg">
              The roots of a plant take up water and nutrients from the soil. They
              also anchor the plant to the ground and keep it steady. Sometimes roots
              are modified to perform the basic chemical and physical processes needed
              by the plant to grow and survive, based on which roots are classified into
              the following types:
              <br />
              <b>Storage roots:</b> They become fleshy to store reserve food materials.
              <br />
              Examples: Radish, carrot, beet, Mirabilis, and Echinocystis.
            </p>
          </div>
        </div>

        <div className="heading3 flex flex-col md:flex-row justify-evenly gap-8">
          <div className="grid p-4 md:p-16">
            <h1 className="font-bold text-3xl md:text-4xl">Stem</h1>
            <p className="mt-4 text-lg">
              A stem is one of two main structural axes of a vascular plant, the other
              being the root. It supports leaves, flowers, and fruits, transports water
              and dissolved substances between the roots and the shoots in the xylem and
              phloem, engages in photosynthesis, stores nutrients, and produces new living
              tissue.
            </p>
          </div>
          <div className="image grid px-4 md:px-6">
            <Image
              src="/images/stem.jpg"
              alt="plant-picture"
              width={250}
              height={250}
              className="rounded-full outline-6 outline-emerald-600 outline-double"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page
