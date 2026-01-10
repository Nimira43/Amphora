import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2'

export default function ProductPage() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='flex flex-col md:flex-row bg-light rounded-2xl overflow-hidden shadow-lg'>
        <div className='md:w-1/2 bg-grey-4 p-8 centre relative'>
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
          <div>
            <h1 className='text-3xl font-medium text-dark mb-2'>
              Product Title
            </h1>
            <p className='text-xl mb-4 text-prime'>£999</p>
            <p className='text-grey-1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos et reprehenderit placeat.
            </p>
          </div>
          <div className='pt-6 border-t border-grey-2'>
            <div className='mb-6'>
              <label className='block text-dark font-medium mb-2'>
                Quantity
              </label>
              <div className='flex items-center'>
                <button className='size-10 text-dark bg-transparent border border-grey-2 hover:bg-grey-4 flex justify-center items-center p-2 rounded-l-md'>
                  <HiOutlineMinusSmall />
                </button>
                <input
                  type='text'
                  value='1'
                  readOnly
                  className='w-14 h-10 border-t border-b border-grey-2 font-medium text-center transition-effect outline-none'
                />
                <button className='size-10 text-dark bg-transparent border border-grey-2 hover:bg-grey-4 centre p-2 rounded-r-md'>
                  <HiOutlinePlusSmall />
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='product-btn bg-prime hover:bg-prime-dark'>
              Add To Cart
            </button>
            <Link
              href='/cart'
              className='product-btn bg-dark hover:bg-grey-1' 
            >
              Go To Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}