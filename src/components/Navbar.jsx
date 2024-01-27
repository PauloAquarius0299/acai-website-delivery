// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaHeart, FaStore, FaHandsHelping, FaToolbox, FaQuestionCircle } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)


  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/*left side */}
      <div onClick={() => setNav(!nav)} className='flex items-center'>
        <div className='cursor-pointer'>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          SaborArt <span className='font-bold text-purple-900'>Açaí</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-purple-900 text-white rounded-full p-2'>Delivery</p>
          <p>Escolher</p>
        </div>
      </div>

      {/*serach input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input type="text" className='bg-transparent p-2 w-full focus:outline-none' placeholder='Pesquise seu favorito' />
      </div>

      <button className='bg-purple-900 text-white border-purple-900 hidden md:flex items-center py-2 rounded-xl'>
        <BsFillCartFill size={20} className='mr-2' /> Carrinho
      </button>

      {/*mobile menu */}
      {/*Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      
      {/*side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose 
        onClick={() => setNav(!nav)}
        size={30} className='absolute right-4 top-4 cursor-pointer' />
        <h2 className='text-2xl p-4'>SaborArt<span className='bold text-purple-900'>Açaí</span></h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-700'>
            <li className='text-xl py-4 flex hover:text-purple-900 cursor-pointer'><TbTruckDelivery size={25} className='mr-4 hover:text-purple-900 cursor-pointer' />Pedidos</li>
            <li className='text-xl py-4 flex hover:text-purple-900 cursor-pointer'><FaHeart size={25} className='mr-4' />Favoritos</li>
            <li className='text-xl py-4 flex hover:text-purple-900 cursor-pointer'><AiFillTag size={25} className='mr-4' />Promoções</li>
            <li className='text-xl py-4 flex hover:text-purple-900 cursor-pointer'><FaStore size={25} className='mr-4' />Empresa</li>
            <li className='text-xl py-4 flex hover:text-purple-900 cursor-pointer'><FaHandsHelping  size={25} className='mr-4' />Parceiros</li>
            <li className='text-xl py-4 flex hover:text-purple-900 cursor-pointer'><FaToolbox size={25} className='mr-4' />Trabalhe Conosco</li>
            <li className='text-xl py-4 flex hover:text-purple-900 cursor-pointer'><FaQuestionCircle size={25} className='mr-4' />Suporte</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar