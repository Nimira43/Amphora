import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>      
      <Navigation />
      <div className='flex-grow pt-24'>
        <Link
          href='/products'
          className='text-prime'
        >
          See Products
        </Link>
      </div>
      <Footer />
    </div>
  )
}