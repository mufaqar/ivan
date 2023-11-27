import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Inquire = () => {
  return (
    <section>
          <h2 className='font-pstime text-3xl md:text-4xl lg:text-6xl'>Longer form blurb about Ivan here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui faucibus in ornare quam. Ut faucibus pulvinar elementum integer. </h2>
          <Link href="#" className='font-pstime hover:scale-105 text-2xl flex items-center gap-1 w-full justify-end mt-10 md:pr-10'>INQUIRE <BsArrowRight /></Link>
    </section>
  )
}

export default Inquire