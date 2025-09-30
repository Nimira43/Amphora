import { Product, productsList, categories } from '@/app/data/products'

export default async function CategoryPage({
  params
}: {
  params: Promise<{ category: string }>
}) {
  const resolvedParams = await params
  const categorySlug = resolvedParams.category.toLowerCase()
  const categoryInfo = categories.find((cat) => cat.slug === categorySlug)
  const categoryName = categoryInfo?.name || resolvedParams.category
  
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='bg-grey-dark rounded-2xl p-8 mb-12 text-light relative overflow-hidden'>
        <div className='relative z-10'>
          <h1 className='text-4xl font-medium mb-3'>{categoryName}</h1>
          <p className='text-lg text-light font-light max-w-2xl'>Explore our selection of top of the range {categoryName}.</p>
        </div>
      </div>
      <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-8'></div>
    </div>
  )
}