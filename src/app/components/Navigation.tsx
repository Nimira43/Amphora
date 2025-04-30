import Link from 'next/link'
import { LuAmphora } from 'react-icons/lu'

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-dark shdaow-md py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='flex items-center'>
            <div className='flex items-center'>
              <div
                className='w-9 h-9 bg-prime text-light rounded-full flex items-center justify-center text-2xl mr-2'
              >
                <LuAmphora />
              </div>
              <span
                className='logo text-prime text-2xl flex pt-1'
              >
                Amphora
              </span>
            </div>
          </Link>
          <div className='hidden md:block flex-grow max-w-lg mx-8'>
            <form className='group'>
              <input
                type='text'
                placeholder='Search...'
                className='w-full bg-prime rounded-md  text-light placeholder:text-light:70 focus:outline-0 py-2 pl-4 pr-10'
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}