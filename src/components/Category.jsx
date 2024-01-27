// eslint-disable-next-line no-unused-vars
import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1640px] px-4 py-12'>
        <h1 className='text-purple-800 font-bold text-4xl text-center'>
            Itens mais bem avaliados
        </h1>
        <div className='grid grid-cols-3 md:grid-cols-5 gap-6'>
            {categories.map((item, index) =>(
                <div className='bg-gray-100 rounded-lg p-4 flex justify-between items-center' key={index}>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img className='w-20' src={item.image} alt={item.image} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category