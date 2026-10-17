import React from 'react'
import ExperienceTopLeft from './ExperienceTopLeft'
import ExperienceTopRight from './ExperienceTopRight'
import ExperienceTopMiddle from './ExperienceTopMiddle'

const ExperienceTop = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 items-center justify-center'>
        <ExperienceTopLeft />
        <ExperienceTopMiddle />
        <ExperienceTopRight />
        
    </div>
  )
}

export default ExperienceTop
