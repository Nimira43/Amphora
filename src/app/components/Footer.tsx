export default function Footer() {
  return (
    <footer>
      <div className='bg-grey-dark py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-8 md:mb-0 md:max-w-xl'>
              <h2 className='text-3xl font-normal text-light mb-2'>Signup to our Newsletter</h2>
              <p className='text-light font-light'>Packed with news and offers plus news about upcoming products.</p>
            </div>
            <div className='w-full md:w-auto'>
              <form className='flex flex-col sm:flex-row gap-2'>
                <input type='email' placeholder='Email Address' className='px-5 py-3 rounded-md bg-light text-dark border-0 outline-0 min-w-[240px]' required />
                <button type='submit' className='text-light bg-prime hover:bg-prime-dark uppercase px-6 py-3 rounded-md items-center justify-center'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-16'>
        <div className="grid grid-cols md:grid-cols-12 gap-8"></div>
      </div>
    </footer>
  )
}
