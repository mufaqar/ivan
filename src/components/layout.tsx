import React, { FC } from 'react'

const Layout:FC <any> = ({children}) => {
  return (
    <section className='px-4'>{children}</section>
  )
}

export default Layout