import Image from 'next/image'
import React from 'react'
import img from "../../../public/assets/Images/ctu_1.jpg"

const CoverImage = () => {
  return (
    <div className='w-full h-[400px] lg:h-full'>
        <Image src={img} alt="cover-img"  className='w-[100%] h-[100%] object-cover'/>
    </div>
  )
}

export default CoverImage