import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import BlockContent from '@sanity/block-content-to-react';

const Inquire = ({data}) => {
  return (
    <section>
          <div className='font-pstime text-3xl md:text-4xl lg:text-6xl'>  <BlockContent blocks={data} /></div>
          <Link href="#" className='font-pstime hover:text-gray text-2xl flex items-center gap-1 w-full justify-end mt-10 md:pr-10'>INQUIRE <BsArrowRight /></Link>
    </section>
  )
}

export default Inquire