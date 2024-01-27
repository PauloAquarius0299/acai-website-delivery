// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import {data} from '../data/data.js'

const Food = () => {
  const [foods, setFoods] = useState(data);
  //filter type ice scream
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.Category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    )
  }

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-purple-800 font-bold text-4xl text-center'>Top mais bem avaliados</h1>

      {/*filter row*/}
      <div className='flex flex-col lg:flex-row justify-between'>

        {/*filter type*/}
        <div>
          <p className='font-bold text-gray-700 '>Filter Tipo</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={() => setFoods(data)} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>Todos</button>
            <button onClick={()=> filterType('Açaí')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>Açaí</button>
            <button onClick={()=> filterType('Sorvete')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>Sorvete</button>
            <button onClick={()=> filterType('Picolé')} className='m-1 border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white'>Picolé</button>
            <button onClick={()=> filterType('Milk-Shake')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>Milk-Shake</button>
            <button onClick={()=> filterType('Banana Split')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>Banana Split</button>
          </div>
        </div>

        {/*filter price*/}
        <div>
          <p className='font-bold text-gray-700 '>Filter Preço</p>
          <div  className='font-bold justify-between max-w-[390px] w-full'>
            <button onClick={() => filterPrice('8,00')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>8,00</button>
            <button onClick={() => filterPrice('15,00')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>15,00</button>
            <button onClick={() => filterPrice('20,00')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>20,00</button>
            <button onClick={() => filterPrice('30,00')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>30,00</button>
            <button onClick={() => filterPrice('40,00')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>40,00</button>
            <button onClick={() => filterPrice('50,00')} className='m-1 border-purple-800 text-purple-800  hover:bg-purple-800 hover:text-white'>50,00</button>
          </div>
        </div>
      </div>
      {/*display foods*/}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
        {foods.map((item, index) =>(
          <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
            <img 
            className='w-full h-[200px] object-cover rounded-t-lg'
            src={item.image} alt={item.image} />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-purple-800 text-white p-1 rounded-full'>{item.price}</span>
              </p>
            </div>
          </div>
        ))}

      </div>


    </div>
  )
}

export default Food