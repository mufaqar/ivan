import React from 'react'

const Skill = ({title}:any) => {
  return (
    <>
          <div className='grid grid-cols-3 md:gap-10 py-20 border-b'>
               <h4 className='text-2xl uppercase'>{title}</h4>
               <div>
                    <h6 className='text-lg uppercase'>2 COLUMN LIST OF {title}</h6>
                    <ul className='mt-2'>
                    {
                         [1,2,3,4,5,6].map((item,id)=>(
                              <li className="text-lg" key={id}>{item} Etcetera</li>
                         ))
                    }
                    </ul>
               </div>
               <div>
                    <h6 className='text-lg uppercase'>2 COLUMN LIST OF {title}</h6>
                    <ul className='mt-2'>
                    {
                         [1,2,3,4,5,6].map((item,id)=>(
                              <li className="text-lg" key={id}>{item} Etcetera</li>
                         ))
                    }
                    </ul>
               </div>
          </div>
    </>
  )
}

export default Skill