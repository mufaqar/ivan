import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import PageHeader from '@/components/header/page-header'
import Layout from '@/components/layout'
import Image from 'next/image'
import React from 'react'

const Category = () => {
     const sortedData = data.slice().sort((a, b) => b.year - a.year);
     return (
          <>
               <Header />
               <Layout>
                    <PageHeader title="Clocks" subTitle='Small blurb about the clocks' />
                    <div className='mt-10 flex flex-col gap-10 md:gap-20'>
                         {
                              sortedData.map((item: any, idx) => (
                                   <div key={idx}>
                                        <div className='text-xl mb-7 flex gap-1'>
                                             {item.year} <div dangerouslySetInnerHTML={{ __html: item.title}}/>
                                        </div>
                                        <div className={`grid gap-3 md:gap-5 grid-cols-2 ${item?.images.length > 2 ? item?.images.length > 4 ? 'md:grid-cols-4' : `md:grid-cols-${item?.images.length}` : 'md:grid-cols-3'}`}>
                                             {
                                                  item?.images?.map((img: any, i: number) => (
                                                      <div key={i} > <Image src={img} alt={item.title} width={440} height={600} className='w-full' /></div>
                                                  ))
                                             }
                                        </div>
                                   </div>
                              ))
                         }
                    </div>
               </Layout>
               <Footer/>
          </>
     )
}

export default Category



const data = [
     {
          year: 2021,
          title: "Edition of 6, <u>Produced with Conventional Projects</u>",
          images: [
               "/images/image-1.jpg",
               "/images/image-7.jpg",
               "/images/image-12.jpg"
          ]
     },
     {
          year: 2023,
          title: "Edition of 6, <u>Produced with Conventional Projects</u>",
          images: [
               "/images/image-1.jpg",
               "/images/image-7.jpg",
               "/images/image-12.jpg",
               "/images/image-8.jpg",
          ]
     }
]