import React, { useState } from 'react'
import { ImArrowRight2 } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form";
import { BsArrowRight } from 'react-icons/bs';

export const ContactUs = ({closeModal}:any) => {

     const {
          register,
          handleSubmit,
          watch,
          reset,
          formState: { errors },
      } = useForm<any>()
      const [sending, setSending] = useState(false)
  
      const onSubmit: SubmitHandler<any> = (data: any) => {
          setSending(true)
          fetch('/api/email', {
              method: 'POST',
              headers: {
                  Accept: 'application/json, text/plain, */*',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
          }).then((res) => {
              console.log('Response received');
              if (res.status === 200) {
                  console.log('Response succeeded!');
                  alert('Message Successfully send.!');
                  reset();
                  setSending(false)
              }
          });
      }

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
                              <button className='hover:text-gray text-xl font-light flex items-center gap-1 w-full justify-end mt-10 ' type='submit'>{sending ? 'SENDING...' : `Send`} <BsArrowRight /></button>
                         </div>
                    </form>
               </section>
          </>
     )
}
