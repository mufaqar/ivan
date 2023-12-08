import React from 'react'
import BlockContent from "@sanity/block-content-to-react";

const CVSections = ({data}) => {

 
  return (
    <>
          <div className='grid grid-cols-1'>
              
               <h4 className="mt-10 text-xl font-semibold">{data?.title}</h4>
               <div className='mt-5 text-lg editor'>
               <BlockContent blocks={data?.feature_name} />
               </div>
            
          </div>
    </>
  )
}

export default CVSections