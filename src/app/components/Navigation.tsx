import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-dark shdaow-md py-4'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <Link href='/' className='flex items-center'>
          
          </Link>
        </div>
      </div>
    </nav>
  )
}