import { Product, productsList, categories } from '@/app/data/products'

export default function CategoryPage({
  params
}: {
  params: { category: string }
}) {


  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='bg-grey-dark rounded-2xl p-8 mb-12 text-light relative overflow-hidden'>
        <div className='relative z-10'>
          <h1 className='text-4xl font-medium mb-3'>Laptops</h1>
          <p className='text-lg text-light font-light max-w-2xl'>Explore our selection of top of the range laptops.</p>
        </div>
      </div>
    </div>
  )
}