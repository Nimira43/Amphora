import Image from 'next/image'
import Link from 'next/link'
import { BsCart3 } from 'react-icons/bs'
import { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  categorySlug: string
  categoryColour: string
}

export default function ProductCard({
  product,
  categorySlug,
  categoryColour
}: ProductCardProps) {
  return (
    <div className='bg-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-effect group'>
      <div className='h-64 relative bg-grey-light-extra p-6 flex items-center justify-center'>
        <Image 
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className='max-h-full object-contain h-full w-auto group-hover:scale-105 transition-transform duration-500'
        />
      </div>
      <div className='p-6 border-t border-grey-light'>
        <h2 className='text-lg font-medium text-dark mb-2 line-clamp-1'>
          {product.name}
        </h2>
        <p className='text-sm text-grey-dark mb-4 line-clamp-2'>
          {product.description}
        </p>
        <div className='flex items-center justify-between'>
          <span 
            className='text-xl font-medium'
            style={{color: categoryColour}}
          >
            £{product.price.toLocaleString()}
          </span>
          <div className='flex gap-2'>
            <Link 
              href={`/products/${categorySlug}/${product.id}`}
              className='px-4 py-2 flex justify-center items-center rounded-md text-light text-sm uppercase font-medium'
              style={{backgroundColor: categoryColour}}
            >
              View Product
            </Link>
            <button 
              className='w-10 h-10 rounded-md text-light flex items-center justify-center'
              style={{backgroundColor: categoryColour}}
            >
              <BsCart3 className='text-2xl' />
            </button>
          </div>
        </div>
      </div> 
    </div>
  )
}