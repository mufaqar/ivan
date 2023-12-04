import Image from 'next/image'
import React, { FC } from 'react'
import ReactPlayer from 'react-player'
import VideoPlayer from '../video-player/VideoPlayer'
import Link from 'next/link'


export interface IDesign {
     title: string,
     tag: string[],
     image?: string,
     video?: string,
     link: string,
     calssName?: any,
     imageWidth?: string
}

const Design: FC<IDesign> = ({ calssName, title, tag, image, video, link, imageWidth }) => {
     const wh:any = {
          width: imageWidth ? '620' : '442', 
          height: imageWidth ? '442' : '620'
     }
     return (
          <div className={calssName}>
               {video ? <VideoPlayer url={`https://www.youtube.com/embed/r9jwGansp1E`}/>: 
               <Link href={link}><Image src={image} alt={title} {...wh} className={`h-[300px] object-cover lg:w-full _img ${imageWidth ? 'sm:h-full' : 'sm:h-full'}`}/> </Link>}
               <h3 className='font-pstime text-2xl md:text-[32px] mt-3'><Link href={link}>{title}</Link></h3>
               <ul className='text-gray flex gap-1 text-[13px]'>
                    {
                         tag?.map((t:any, idx) => (
                              <li key={idx} className='capitalize'>{t.name}{tag.length !== idx + 1 && ','}</li>
                         ))
                    }
               </ul>
          </div>
     )
}

export default Design