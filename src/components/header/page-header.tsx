import React, { FC } from 'react'

interface IPageHeader {
     title: string,
     subTitle: string
}

const PageHeader:FC <IPageHeader> = ({title,subTitle}) => {
  return (
    <section className='flex flex-col justify-end items-center pt-[74px] pb-28'>
          <h1 className='text-4xl font-pstime font-light'>{title}</h1>
          <h6 className='text-lg font-light mt-2'>{subTitle}</h6>
    </section>
  )
}

export default PageHeader



