import { useState } from 'react'
import Cart from './Cart'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='flex justify-between items-center py-[20px] px-[20px] md:px-[80px] lg:[80px] w-full sticky top-0 z-20 bg-black text-white shadow-md'>
      <a href='/' className='font-semibold'>
        MONIKA ZAVALA ATELIER
      </a>
      <button
        id='menu-button'
        className='md:hidden text-xl focus:outline-none'
        onClick={toggleMenu}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>
      <nav
        id='menu'
        className={`${
          menuOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:space-x-4 md:static absolute top-full left-0 w-full md:w-auto bg-black md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}
      >
        <a
          className='block md:inline text-base border-b-4 border-transparent hover:border-[#ec161e] transition-colors duration-200 ease-in-out'
          href='/'
        >
          Inicio
        </a>
        <a
          className='block md:inline text-base border-b-4 border-transparent hover:border-[#ec161e] transition-colors duration-200 ease-in-out'
          href='/shop/store'
        >
          Productos
        </a>
        <a
          className='block md:inline text-base border-b-4 border-transparent hover:border-[#ec161e] transition-colors duration-200 ease-in-out'
          href='/about'
        >
          Sobre nosotros
        </a>
        <Cart />
      </nav>
    </header>
  )
}

export default Header
