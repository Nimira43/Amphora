'use client'

import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2'
import { productsList, Product} from '@/app/data/products'
import { useState, useEffect } from 'react'

export default function ProductPage({
  params
}: {
  params: Promise<{
    category: string,
    productId: string  
  }>
}) {
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params
      const foundProduct = productsList.find((p) => p.id === resolvedParams.productId)

      if (
        !foundProduct ||
        foundProduct.category
          .toLowerCase() !==
        resolvedParams.category
          .toLowerCase()
      ) {
        return
      }
      setProduct(foundProduct)
    }
    fetchParams()
  }, [params])

  if (!product) {
    return (
      <div className='max-w-7xl mx-auto px-4 py-12 flex items-center justify-center min-h-[60vh]'>
        <div className='flex flex-col items-center animate-pulse'>
          <div className='rounded-full bg-grey-2 size-12 mb-4'></div>
          <div className='h-4 rounded bg-grey-2 w-24 mb-6'></div>
          <div className='h-2 rounded bg-grey-2 w-16'></div>
        </div>
      </div>
    )
  }
  
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='flex flex-col md:flex-row bg-light rounded-2xl overflow-hidden shadow-lg'>
        <div className='md:w-1/2 bg-grey-4 p-8 centre relative'>
          <div className='relative w-full h-[300px] md:h-[400px]'>
            <Image  
              src={product?.image || '/images/placeholder.png'}
              alt={product?.name || 'Product Image'}
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
              {product.name}
            </h1>
            <p className='text-xl mb-4 text-prime'>
              £{product.price.toLocaleString()}
            </p>
            <p className='text-grey-1'>
              {product.description}
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