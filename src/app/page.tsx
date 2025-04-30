import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <div className='min-h-screen flex flex-col'>      
      <Navigation />
      <Footer />
    </div>
  )
}