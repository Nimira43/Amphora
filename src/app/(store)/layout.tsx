import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
