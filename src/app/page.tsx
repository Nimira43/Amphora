import Navigation from './components/Navigation'
import Footer from './components/Footer'

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
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}