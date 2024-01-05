import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import BlockContent from '@sanity/block-content-to-react';

const Header = ({ title, headTitle }) => {
     const [mobileNav, setMobileNav] = useState(false)
     const router = useRouter()
     const {pathname} = router
     const [isSticky, setIsSticky] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               const scrollPosition = window.scrollY;
               // You can adjust the scroll threshold based on your design
               const stickyThreshold = 1;

               // Update the state based on the scroll position
               setIsSticky(scrollPosition > stickyThreshold);
          };

          // Attach the scroll event listener when the component mounts
          window.addEventListener('scroll', handleScroll);

          // Cleanup the event listener when the component unmounts
          return () => {
               window.removeEventListener('scroll', handleScroll);
          };
     }, []); // Empty dependency array ensures the effect runs only once on mount


     // const [modifiedTitle, setModifiedTitle] = useState('');
     // useEffect(() => {
     //      // Parsing the headerTitle string to access the span tag content
     //      const parser = new DOMParser();
     //      const htmlDoc = parser.parseFromString(title, 'text/html');
     //      const spanElement = htmlDoc.querySelector('span');

     //      // Modify the styles of the span tag content
     //      if (spanElement) {
     //           spanElement.style.opacity = '0'; // Example: Change color to red
     //           // Add other styles as needed
     //           const modifiedSpan = spanElement.outerHTML;
     //           // Reinsert the modified span back into the original title
     //           const newTitle = title.replace(/<span>.*?<\/span>/, modifiedSpan);
     //           setModifiedTitle(newTitle);
     //      }
     // }, []);

     return (
          <>
               <header className={`md:py-5 py-4 px-4  font-pstime z-20 relative gap-10 flex justify-between items-start ${isSticky ? 'sticky ' : ''} top-0  ${pathname === '/info' ? ' text-main bg-transparent' : ' bg-transparent'}`}>
                    <div className={`md:text-[32px] max-w-[500px] md:leading-[42px] md:-mt-1 text-2xl tracking-[0.04em] ${mobileNav && 'opacity-0'}`}>
                         <div className={`pt-5 z-50 `}> 
                         <span onClick={()=> router.push('/')} className='hover:cursor-pointer'>Ivan Iannoli</span>
                          </div>
                    </div>
                    <ul className='text-[28px] pt-5 md:flex items-center gap-8 hidden tracking-[0.04em]   smooth'>
                         <li className={`hover:border-black border-b-2 border-transparent leading-[32px] ${pathname.replace('/', '') === 'work' && '!border-black '}`}><Link href="/work">Work</Link></li>
                         <li className={`hover:border-black border-b-2 border-transparent leading-[32px] ${pathname.replace('/', '') === 'info' && '!border-black '}`}><Link href="/info">Info</Link></li>
                    </ul>
                    <div className={` ${pathname.replace('/', '') === 'info' ? 'bg-main text-yellow' : '!bg-yellow'} h-12 px-2 z-50 rounded-full md:hidden flex flex-col items-center justify-center`} onClick={() => setMobileNav(!mobileNav)}>
                         {
                              mobileNav ? <button className='pl-1 pr-1'>
                                   <div className={`p-[1px] w-6  -rotate-45 ${pathname.replace('/', '') === 'info' ? 'bg-yellow' : 'bg-main'} `} />
                                   <div className={`p-[1px] w-6 bg-main rotate-45 ${pathname.replace('/', '') === 'info' ? 'bg-yellow' : 'bg-main'} `} />
                              </button> : <button className='uppercase text-[10px] font-abcwhyte '>Menu</button>
                         }
                    </div>
               </header >
               {/* <div className={` md:text-[32px] px-4 font-pstime z-30 absolute top-10 max-w-[600px] md:leading-[42px] md:-mt-1 text-2xl tracking-[0.04em] ${isSticky ? 'opacity-1' : ''}`} dangerouslySetInnerHTML={{ __html: modifiedTitle }} /> */}
               <div className={`headTitle md:text-[32px] px-4 font-pstime z-30 absolute top-10 max-w-[600px] md:leading-[42px] md:-mt-1 text-2xl tracking-[0.04em] ${isSticky ? 'opacity-1' : ''} ${mobileNav && 'opacity-0 max-w-[250px]'}`}>
                         <span onClick={()=> router.push('/')} className='opacity-0 bg-white hover:cursor-pointer'>Ivan Iannoli </span>
                         <BlockContent blocks={headTitle}/>
               </div>
               <MobileNavMenu mobileNav={mobileNav} />
          </>
     )
}

export default Header


const MobileNavMenu = ({ mobileNav }) => {
     return (
          <nav className={`bg-yellow p-4 fixed transition-all duration-300 ease-in-out w-full ${mobileNav ? 'top-0' : '-top-[150%]'}`}>
               <div className='flex items-center justify-between'>
                    <p className='text-2xl font-pstime mt-1'>Ivan Iannoli</p>
               </div>
               <ul className='flex flex-col justify-center items-center my-12 gap-12 mt-20'>
                    {
                         mobileNavList.map((nav, idx) => (
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