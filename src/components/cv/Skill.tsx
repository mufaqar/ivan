import React from 'react'

const Skill = ({data}:any) => {
  return (
    <>
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-6 py-10 md:py-20 border-b'>
               <h4 className='text-2xl uppercase'>{data.title}</h4>
               {
                    data?.list.map((l:any,idx:number)=>(
                         <div key={idx}>
                              <h6 className='text-lg uppercase'>{l?.featuretitle}</h6>
                              <ul className='mt-2'>
                              {
                                   l?.feature.map((f:any,idx:number)=>(
                                        <li className="text-lg mt-1" key={idx}>{f?.feature_name} Etcetera</li>
                                   ))
                              }
                              </ul>
                         </div>
                    ))
               }
          </div>
    </>
  )
}

export default Skill