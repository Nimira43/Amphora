import { Product, productsList, categories } from '@/app/data/products'

export default function CategoryPage({
  params
}: {
  params: { category: string }
}) {


  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='bg-dark rounded-2xl p-8 mb-12 text-prime relative overflow hidden'></div>
    </div>
  )
}