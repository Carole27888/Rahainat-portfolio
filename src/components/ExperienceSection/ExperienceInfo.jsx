import React from 'react'

const ExperienceInfo = ({number , text}) => {
  return (
    <div className='flex flex-col items-centr justify-center'>
       <p className='font-bold text-6xl text-red'>{number}</p>
       <p className='text-bold text-grey uppercase -mt-4'>{text}</p> 
    </div>
  )
}

export default ExperienceInfo