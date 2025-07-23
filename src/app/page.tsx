import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>      
      <Navigation />
      <div 
        className='relative h-[80vh] mb-16 overflow-hidden bg-gradient-to-r from-hero-grey-2 to-hero-grey-1'
      >
        <div className='max-w-7xl mx-auto px-4 pt-24 h-full flex flex-col'>
          <div className='flex-grow flex flex-col md:flex-row items-center justify-center md:justify-between'>
            <div className='w-1/2 text-center md:text-left mb-10 md:mb-0 z-10'>
              <h1 className='text-4xl sm:text-5xl md:text-7xl font-medium text-light'>
                <div className='mb-2'>
                  Indulge in Innovation.
                </div>
              </h1>
              <p className='text-xl text-light/80 max-w-lg mb-10'>Explore cutting-edge tech, curated for everyday brilliance, delivered with style and ease.</p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center md:justify-start'>
                <Link
                  href='/products'
                  className='px-8 py-3 bg-prime text-light rounded-md hover:bg-prime-dark flex items-center justify-center uppercase'
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className='w-1/2 relative z-10 flex justify-center md:justify-end'>
              <Link href='/products' className='relative group cursor-pointer'>
                <div className='absolute -inset-4 rounded-full bg-white/10 backdrop-blur-sm animate-pulse group-hover:bg-white/20 transition-colors'>
                
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}