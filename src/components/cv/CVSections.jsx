import React from 'react'
import BlockContent from "@sanity/block-content-to-react";

const CVSections = ({data}) => {
 
  return (
    <>
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-6 py-10 md:py-20 border-b'>
               <h4 className='text-2xl uppercase'>{data?.title}</h4>
               {
                    data?.cvsection_name?.map((l,idx)=>(
                         <div key={idx}>
                              <h6 className='text-lg uppercase'>{l?.cvsection_name}</h6>
                              <ul className='mt-2'>
                              
                                        <li className="text-lg  mt-1" key={idx}>
                                             {/* <BlockContent blocks={I?.feature_name} /> */}
                                        </li>
                                
                              </ul>
                         </div>
                    ))
               }
          </div>
    </>
  )
}

export default CVSections