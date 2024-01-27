// eslint-disable-next-line no-unused-vars
import React from 'react'
import cart01 from '../assets/cart01.jpg';
import cart02 from '../assets/cart02.jpg'
import cart03 from '../assets/cart03.jpg'

const HeadilineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* card */}
        <div className='rounded-xl relative '>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Açaí Pequeno 400ml</p>
               
                
                <p className='px-2'>R$: 20,00</p>
                <button className='border-purple-800 bg-purple-800 text-white mx-2 absolute bottom-4 hover:bg-purple-600'>Quero Esse</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={cart01} alt="" />
        </div>
        {/* card */}
        <div className='rounded-xl relative '>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Açaí Medio 600ml</p>
                
                <p className='px-2'>R$: 30,00</p>
                <button className='border-purple-800 bg-purple-800 text-white mx-2 absolute bottom-4 hover:bg-purple-600'>Quero Esse</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={cart02} alt="" />
        </div>
        {/* card */}
        <div className='rounded-xl relative'>
            {/*overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Açaí Grande 800ml</p>
                
                <p className='px-2'>R$: 45,00</p>
                <button className='border-purple-800 bg-purple-800 text-white mx-2 absolute bottom-4 hover:bg-purple-600'>Quero Esse</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src={cart03} alt="" />
        </div>
    </div>
    
  )
}

export default HeadilineCards