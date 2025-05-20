export default function Footer() {
  return (
    <footer>
      <div className='bg-dark py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-8 md:mb-0 md:max-w-xl'>
              <h2 className='text-3xl font-medium text-light mb-2'>Signup to our Newsletter</h2>
              <p className='text-light'>Packed with news and offers plus news about upcoming products.</p>
            </div>
            <div className='w-full md:w-auto'>
              <form className='flex flex-col sm:flex-row gap-2'>
                <input type='email' placeholder='Email Address' className='px-5 py-3 rounded-md bg-prime text-light border-0 outline-0 min-w-[240px]' required />
                <button type='submit' className='bg-prime hover:bg-prime40'>Button</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
