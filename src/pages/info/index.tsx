import Skill from '@/components/cv/Skill';
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Layout from '@/components/layout'
import Link from 'next/link';
import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const title = 'Ivan Iannoli lives and works in SF* and can be reached at 555-555-5555, <u>email@iannoli.com</u>, <u>@ivaniannoli</u>'

const Info = () => {
     const [openCV, setOpenCV] = useState<boolean>(false)
     const [expand, setExpand] = useState<boolean>(false)

     return (
          <div className='bg-yellow'>
               <Header title={title} />
               <Layout>
                    <section className='py-28 border-b'>
                         <h2 className='font-pstime text-4xl md:text-5xl lg:text-6xl'>Blurb here about philosophy, background, approach, etc. &  Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                         <h6 className='md:text-2xl mt-12'>Available for small to medium concepting and web projects beginning in March 2024. </h6>
                    </section>
                    <section>
                         <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 py-10 md:py-20 border-b'>
                              <button className='flex items-start gap-2 text-2xl col-span-2 md:col-span-1' onClick={()=>setOpenCV(!openCV)}>
                                   <span className='flex items-center gap-2'>CV {openCV ? <SlArrowUp/> : <SlArrowDown /> }</span>
                              </button>
                              {
                                   openCV && <div className='col-span-2 md:col-span-1'>
                                        <p className='text-xl'>Born in Los Angeles, CA</p>
                                        <p className='text-xl mb-10'>Lives and works in San Francisco, CA</p>
                                        <Link href="#" className='text-lg hover:text-gray'>(Download CV)</Link>
                                        <h4 className='mt-10 text-xl'>EDUCATION</h4>
                                        <ul className='mt-5 text-lg'>
                                        {
                                             ["2011 SCHOOL", "2007 SCHOOL"].map((item,idx)=>(
                                                  <li key={idx}>{item}</li>
                                             ))
                                        }
                                        </ul>
                                        <button onClick={()=>setExpand(!expand)} className='flex items-center mt-10 font-medium text-lg gap-2 uppercase'>Expand to see complete cv {expand ? <SlArrowUp/> : <SlArrowDown /> }</button>
                                   </div>
                              }
                         </div>
                         { expand && <Skill title="Skill"/> }
                         { expand && <Skill title="Experiance"/> }
                         
                    </section>
               </Layout>
               <Footer />
          </div>
     )
}

export default Info