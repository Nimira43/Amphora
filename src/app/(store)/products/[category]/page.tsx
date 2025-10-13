import ProductCard from '@/app/components/ProductCard'
import { Product, productsList, categories } from '@/app/data/products'
import Link from 'next/link'
import { MdOutlineCategory } from 'react-icons/md'

export default async function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>
}) {
  const resolvedParams = await params
  const categorySlug = resolvedParams.category.toLowerCase()
  const categoryProducts: Product[] = productsList.filter((product) => product.category.toLowerCase() === categorySlug)
  const categoryInfo = categories.find((cat) => cat.slug === categorySlug)
  const categoryName = categoryInfo?.name || resolvedParams.category
  const categoryColour = categoryInfo?.colour || '#ff0000'
  
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='bg-grey-dark rounded-2xl p-8 mb-12 text-light relative overflow-hidden'>
        <div className='relative z-10'>
          <h1 className='text-4xl font-medium mb-3'>{categoryName}</h1>
          <p className='text-lg text-light font-light max-w-2xl'>Explore our selection of top of the range {categoryName}.</p>
        </div>
      </div>
      <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {categoryProducts.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            categorySlug={categorySlug}
            categoryColour={categoryColour}
          />
        ))}
      </div>
      <div className='mt-12 pt-6 border-t border-grey-light-extra'>
        <Link
          href='/products'
          className='inline-flex items-center text-dark hover:text-prime transition-effect'
        >
          <MdOutlineCategory className='mr-2' />
          Back to Categories
        </Link>
      </div>
    </div>
  )
}