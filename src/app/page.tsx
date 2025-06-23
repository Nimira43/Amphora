import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>      
      <Navigation />
      <div className='relative h-[80vh] mb-16-overflow-hidden'></div>
      <Footer />
    </div>
  )
}