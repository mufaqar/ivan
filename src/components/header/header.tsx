import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'

const Header: FC<any> = ({ title }) => {
     const [mobileNav, setMobileNav] = useState(false)
     const {pathname} = useRouter()

     return (
          <>
               <header className='md:py-10 py-4 px-4 font-pstime z-50 relative gap-10 flex justify-between items-start'>
                    <Link href="/" className='md:text-[40px] max-w-[600px] md:leading-[50px] md:-mt-4 text-2xl'>
                         <div dangerouslySetInnerHTML={{ __html: title }} />
                         {!title && 'Ivan Iannoli'}
                    </Link>
                    <ul className='text-[28px] md:flex items-center gap-4 hidden'>
                         <li className={`hover:underline ${pathname.replace('/', '') === 'work' && 'underline'}`}><Link href="/work">Work</Link></li>
                         <li className={`hover:underline ${pathname.replace('/', '') === 'info' && 'underline'}`}><Link href="/info">Info</Link></li>
                    </ul>
                    <div className={` ${pathname.replace('/', '') === 'info' ? 'bg-main text-yellow' : 'bg-yellow'} h-12 px-2 z-50 rounded-full md:hidden flex flex-col items-center justify-center`} onClick={() => setMobileNav(!mobileNav)}>
                         {
                              mobileNav ? <button className='pl-1 pr-1'>
                                   <div className={`p-[1px] w-6  -rotate-45 ${pathname.replace('/', '') === 'info' ? 'bg-yellow' : 'bg-main' } `} />
                                   <div className={`p-[1px] w-6 bg-main rotate-45 ${pathname.replace('/', '') === 'info' ? 'bg-yellow' : 'bg-main' } `} />
                              </button> : <button className='uppercase text-[10px] font-abcwhyte '>Menu</button>
                         }
                    </div>

               </header >
               <MobileNavMenu mobileNav={mobileNav} />
          </>
     )
}

export default Header


interface ImobileNavList {
     name: string,
     link: string,
     subNav?: subNav[]
}
interface subNav {
     name: string,
     link: string,
}

const MobileNavMenu = ({ mobileNav }: any) => {
     return (
          <nav className={`bg-yellow p-4 absolute transition-all duration-300 ease-in-out w-full ${mobileNav ? 'top-0' : '-top-[150%]'}`}>
               <div className='flex items-center justify-between'>
                    <p className='text-2xl font-pstime mt-1'>Ivan Iannoli</p>
               </div>
               <ul className='flex flex-col justify-center items-center my-12 gap-12 mt-20'>
                    {
                         mobileNavList.map((nav: ImobileNavList, idx) => (
                              <li key={idx} className='text-[32px] flex flex-col justify-center capitalize items-center font-pstime'>
                                   <Link href={nav.link}>{nav.name}</Link>
                                   <ul className='flex gap-3'>
                                        {
                                             nav.subNav?.map((subN, id) => (
                                                  <li className='text-xl font-abcwhyte font-light' key={id}>{subN.name}</li>
                                             ))
                                        }
                                   </ul>
                              </li>
                         ))
                    }
                    <div className='text-2xl flex gap-4 flex-col items-center font-light'>
                         <li><Link href="#">i@iannoli.com</Link></li>
                         <li><Link href="#">instagram</Link></li>
                    </div>
               </ul>
          </nav>
     )
}



const mobileNavList = [
     {
          name: 'Work',
          link: "/work",
          subNav: [
               {
                    name: 'Art',
                    link: "#",
               },
               {
                    name: 'Design',
                    link: "#",
               }
          ]
     },
     {
          name: 'Info',
          link: "/info",
     },
     {
          name: 'Inquire',
          link: "/inquire",
     }
]