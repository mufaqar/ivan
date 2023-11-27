import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import PageHeader from '@/components/header/page-header'
import Layout from '@/components/layout'
import Design, { IDesign } from '@/components/work-design/design'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Work: FC<any> = () => {
     const [items, setItems] = useState()

     return (
          <>
               <Header title="Ivan Iannoli" />
               <Layout>
                    <PageHeader title="All Work" subTitle="Small additional info/subtitle" />
                    <ul className='flex items-center gap-3 font-light flex-wrap'>
                         <li className='text-gray hover:cursor-pointer hover:text-main uppercase'>All</li>
                         {
                              Filter.map((f: string, id: number) => (
                                   <li key={id} className='text-gray hover:cursor-pointer hover:text-main uppercase'>{f}</li>
                              ))
                         }
                    </ul>
                    <div className='mt-10 grid md:grid-cols-3 gap-4 md:gap-y-32 md:gap-x-8'>
                         {
                              WorkData.map((w:any, id:number) => (
                                   <Design
                                        key={id}
                                        title={w.title}
                                        tag={designTags}
                                        image={w.image}
                                        link={w.link}
                                        calssName={id === 4 && "col-span-2"}
                                   />
                              ))
                         }
                    </div>
                    <section className='max-w-[800px] mx-auto flex flex-col justify-end md:mt-60 mt-24 md:mb-40'>
                         <h2 className='text-4xl sm:text-5xl text-center md:text-6xl font-pstime'>Small blurb or pull quote etc. here</h2>
                         <Link href="#" className='font-pstime hover:text-gray uppercase text-2xl items-center gap-1 inline-flex justify-end mt-10 md:pr-10'>Read More <BsArrowRight /></Link>
                    </section>
               </Layout>
               <Footer/>
          </>
     )
}

export default Work



const Filter = [
     "ART", "DESIGN", "CURATORIAL", "WEBSITES", "PHOTOGRAPHY", "WINE", "CLOCKS"
]

var designTags = ["DESIGN", "OBJECTS"]

const WorkData = [
     {
          title: "Don’t Look at Me",
          tag: { designTags },
          image: '/images/image-2.jpg',
          link: "#"
     },
     {
          title: "Usonia Wine Labels",
          tag: { designTags },
          image: '/images/image-4.jpg',
          link: "#"
     },
     {
          title: "Mock Sun",
          tag: { designTags },
          image: '/images/image-1.jpg',
          link: "#"
     },
     {
          title: "Condo MX",
          tag: { designTags },
          image: '/images/image-5.png',
          link: "#"
     },
     {
          title: "Milo MX",
          tag: { designTags },
          image: '/images/image-3.jpg',
          link: "#"
     },
]
