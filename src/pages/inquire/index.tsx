import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Layout from '@/components/layout'
import React from 'react'
import { ImArrowRight2 } from "react-icons/im";

const Inquire = () => {
     return (
          <>
               <Header />
               <Layout>
                    <section className='max-w-[1020px] w-full mt-20 mx-auto bg-yellow p-8 md:p-16'>
                         <h1 className='text-3xl md:text-5xl font-pstime'>One thing I like to do is talk about projects. Please feel free to discuss yours (even if it only exists in your head) </h1>
                         <form>
                              <div className='mt-20'>
                                   <label className='text-xl'>Name</label>
                                   <input type="text" name="" id="" className='block bg-transparent w-full py-2 outline-none border-b' />
                              </div>
                              <div className='mt-10'>
                                   <label className='text-xl'>Email</label>
                                   <input type="email" name="" id="" className='block bg-transparent w-full py-2 outline-none border-b' />
                              </div>
                              <div className='mt-10'>
                                   <label className='text-xl'>What kind of project?</label>
                                   <input type="email" name="" id="" className='block bg-transparent w-full py-2 outline-none border-b' placeholder='(Website? Design? General or unknown?)'/>
                              </div>
                              <div className='mt-10'>
                                   <label className='text-xl'>Please let me know what you’re thinking </label>
                                   <textarea name="" id="" className='block bg-transparent w-full py-2 outline-none border-b h-[250px]' placeholder='Including budget, goals, aspirations, and more' />
                              </div>
                              <div className='mt-12 flex justify-end'>
                                   <button className='flex items-center font-pstime hover:text-gray text-2xl gap-2' type='submit'>Send <ImArrowRight2 /></button>
                              </div>
                         </form>
                    </section>
               </Layout>
               <Footer />
          </>
     )
}

export default Inquire