import React from 'react'
import { ImArrowRight2 } from "react-icons/im";

export const ContactUs = ({closeModal}:any) => {
     return (
          <>
               <section className='h-screen relative w-full mx-auto bg-yellow p-8 md:p-16 pt-20 flex flex-col justify-center items-start'>
                    <button onClick={closeModal} className='absolute right-5 top-5'>Close</button>
                    <h1 className='text-2xl md:text-5xl font-pstime'>One thing I like to do is talk about projects. Please feel free to discuss yours (even if it only exists in your head) </h1>
                    <form className='w-full'>
                         <div className='mt-8'>
                              <label className='text-xl'>Name</label>
                              <input type="text" name="" id="" className='block bg-transparent w-full py-1 2xl:py-2 outline-none border-b' />
                         </div>
                         <div className='mt-6 2xl:mt-10'>
                              <label className='text-xl'>Email</label>
                              <input type="email" name="" id="" className='block bg-transparent w-full py-1 2xl:py-2 outline-none border-b' />
                         </div>
                         <div className='mt-6 2xl:mt-10'>
                              <label className='text-xl'>What kind of project?</label>
                              <input type="email" name="" id="" className='block bg-transparent w-full py-1 2xl:py-2 outline-none border-b' placeholder='(Website? Design? General or unknown?)' />
                         </div>
                         <div className='mt-6 2xl:mt-10'>
                              <label className='text-xl'>Please let me know what you’re thinking </label>
                              <textarea name="" id="" className='block bg-transparent w-full py-1 2xl:py-2 outline-none border-b h-[80px] 2xl:h-[140px]' placeholder='Including budget, goals, aspirations, and more' />
                         </div>
                         <div className='mt-6 2xl:mt-10 flex justify-end'>
                              <button className='flex items-center font-pstime hover:text-gray text-2xl gap-2' type='submit'>Send <ImArrowRight2 /></button>
                         </div>
                    </form>
               </section>
          </>
     )
}
