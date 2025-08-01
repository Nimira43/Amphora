import Link from 'next/link'
import { LuAmphora } from 'react-icons/lu'
import { IoSearchOutline } from 'react-icons/io5'
import { LiaStoreAltSolid } from 'react-icons/lia'
import { BsCart3 } from 'react-icons/bs'
import { HiOutlineUser } from 'react-icons/hi2'

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-grey-dark shadow-md py-4 z-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='flex items-center'>
            <div className='flex items-center'>
              <div
                className='w-9 h-9 bg-prime text-light rounded-full flex items-center justify-center mr-2'
              >
                <LuAmphora  className='text-2xl' />
              </div>
              <span
                className='logo text-light text-2xl flex pt-1'
              >
                Amphora
              </span>
            </div>
          </Link>
          <div className='hidden md:block flex-grow max-w-lg mx-8'>
            <form className='group relative'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full bg-light rounded-md  text-dark placeholder:grey-medium focus:outline-0 py-2 pl-4 pr-10'
              />
              <button
                type='submit'
                className='absolute right-1 top-1/2 -translate-y-1/2 text-dark hover:text-prime p-1.5 rounded-md cursor-pointer' 
              >
                <IoSearchOutline className='text-xl' />
              </button>
            </form>
          </div>
          <div className='hidden md:flex items-center space-x-4'>
            <div className='group'>
              <button className='text-light bg-prime hover:bg-prime-dark p-2 rounded-md flex items-center cursor-pointer'>
                <LiaStoreAltSolid className='text-2xl mr-1' />
                <span
                  className='hidden md:inline text uppercase'
                >
                  Products
                </span>
              </button>  
            </div>
            <Link
              href='/cart'
              className='text-light bg-prime hover:bg-prime-dark flex justify-center items-center p-2 rounded-md'
            >
              <BsCart3 className='text-2xl' />
            </Link>
            <Link
              href='/login'
              className='text-light bg-prime hover:bg-prime-dark flex justify-center items-center p-2 rounded-md'
            >
              <HiOutlineUser className='text-2xl' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}