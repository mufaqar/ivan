import Link from 'next/link'
import React from 'react'

const Footer = () => {
     return (
          <footer className='md:grid grid-cols-2 bg-yellow p-4 pt-10 mt-32'>
               <div>
                    <p>For inquiries or more info,<br/> please <Link className='underline' href="#">send me a message</Link>.</p>
                    <ul className='flex items-center gap-2 text-gray text-[10px] font-light mt-4'>
                         <li className='hover:underline'><Link href="">Privacy</Link></li>
                         <li className='hover:underline'><Link href="">Accessibility</Link></li>
                         <li className='hover:underline'><Link href="">Colophon</Link></li>
                         <li>©2024 All rights reserved</li>
                    </ul>
               </div>
               <div className='mt-5 md:mt-0'>
                     <ul className='flex md:flex-col items-end gap-2 text-sx'>
                         <li className='hover:underline capitalize'><Link href="">Instagram</Link></li>
                         <li className='hover:underline capitalize'><Link href="">Join List</Link></li>
                    </ul>
               </div>
          </footer>
     )
}

export default Footer
