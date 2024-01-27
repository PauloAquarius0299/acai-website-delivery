// eslint-disable-next-line no-unused-vars
import React from 'react'
import banner from '../assets/banner.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>O Melhor<span className='text-purple-800'> Açaí</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-purple-800'>Direto!<span className='text-gray-200'> na sua Casa</span></h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={banner} width={1400} alt="" />
        </div>
    </div>
  )
}

export default Hero