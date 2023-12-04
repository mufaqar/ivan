import React, { FC } from 'react'

interface IPageHeader {
     title: string,
     subTitle: string
}

const PageHeader:FC <IPageHeader> = ({title,subTitle}) => {
  return (
    <section className='flex flex-col justify-end items-center py-20'>
          <h1 className='text-4xl md:text-6xl font-pstime '>{title}</h1>
          <h6 className='text-lg font-light mt-2'>{subTitle}</h6>
    </section>
  )
}

export default PageHeader



