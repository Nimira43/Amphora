import Link from 'next/link'
import { LuAmphora } from 'react-icons/lu'

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-dark shdaow-md py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='flex items-center'>
            <div className='flex items-center'>
              <div className='w-9 h-9 bg-prime text-light rounded-full flex items-center justify-center text-2xl mr-2'>
                <LuAmphora />
              </div>
              <span className='logo text-prime text-2xl flex pt-1'>Amphora</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  )
}