import Skill from '@/components/cv/Skill';
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Layout from '@/components/layout'
import Link from 'next/link';
import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { client } from '../../../sanity/lib/client';
import { CV } from '../../../sanity/lib/queries';

const Htitle = 'Ivan Iannoli lives and works in SF* and can be reached at 555-555-5555, <u>email@iannoli.com</u>, <u>@ivaniannoli</u>'

const Info = ({allInfo}:any) => {
     const [openCV, setOpenCV] = useState<boolean>(false)
     const [expand, setExpand] = useState<boolean>(true)
     const {Features, cv, cvbio, education, info, title } = allInfo[0]

     return (
          <div className='bg-yellow'>
               <Header title={Htitle} />
               <Layout>
                    <section className='py-28 border-b'>
                         <h2 className='font-pstime text-4xl md:text-5xl lg:text-6xl'>{title}</h2>
                         <h6 className='md:text-2xl mt-12'>{info} </h6>
                    </section>
                    <section>
                         <div className='grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 py-10 md:py-20 border-b'>
                              <button className='flex items-start gap-2 text-2xl col-span-2 md:col-span-1' onClick={()=>{setOpenCV(!openCV)}}>
                                   <span className='flex items-center gap-2'>CV {openCV ? <SlArrowUp/> : <SlArrowDown /> }</span>
                              </button>
                              {
                                   openCV && <> <div className='col-span-2 md:col-span-1'>
                                        <p className='text-xl max-w-[360px] mb-10'>{cvbio}</p>
                                        <Link href={cv.asset.url} target='_blank' className='text-lg hover:text-gray'>(Download CV)</Link>
                                        <h4 className='mt-10 text-xl'>EDUCATION</h4>
                                        <ul className='mt-5 text-lg'>
                                        {
                                             education?.map((item:any,idx:number)=>(
                                                  <li key={idx}>{item.education_info}</li>
                                             ))
                                        }
                                        </ul>
                                        <button className='flex items-center mt-10 font-medium text-lg gap-2 uppercase'>Expand to see complete cv {openCV ? <SlArrowUp/> : <SlArrowDown /> }</button>
                                   </div>
                                   
                                   </>
                              }
                         </div>
                         { openCV && 
                              Features.map((f:any,idx:number)=>(
                                   <Skill data={f} key={idx}/>
                              ))
                              
                         }
                         
                    </section>
               </Layout>
               <Footer />
          </div>
     )
}

export default Info



export async function getServerSideProps() {
     const allInfo = await client.fetch(CV);
     return {
       props: {
          allInfo,
         preview: true
       }
     };
   }