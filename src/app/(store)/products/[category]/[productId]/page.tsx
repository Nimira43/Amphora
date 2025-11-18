import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='flex flex-col md:flex-row bg-light rounded-2xl overflow-hidden shadow-lg'>
        <div className='md:w-1/2 bg-grey-light-extra p-8 flex items-center justify-center relative'>
          <div className='relative w-full h-[300px] md:h-[400px]'>
            <Image  
              src='/images/product001.png'
              alt='Product Image'
              fill
              priority
              sizes='(max-width: 768px) 100vw, 50vw'
              className='object-contain'
            />
          </div>
        </div>
        <div className='md:w-1/2 p-8 md:p-12 space-y-6'>
          
        </div>
      </div>
    </div>
  )
}