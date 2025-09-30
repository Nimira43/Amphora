import Image from "next/image";

export default function ProductCard() {
  return (
    <div className='bg-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-effect group'>
      <div className='h-64 relative bg-grey-light-extra p-6 flex items-center justify-center'>
        <Image 
          src='/images/product001.png'
          alt='Product Image'
          width={200}
          height={200}
          className='max-h-full object-contain h-full w-auto group-hover:scale-105 transition-transform duration-500'
        />
      </div>
      <div className='p-6 border-t border-grey-light'>
        <h2 className='text-lg font-medium text-dark mb-2 line-clamp-1'>
          Smartone NT100
        </h2>
        <p className='text-sm text-grey-dark mb-4 line-clamp-2'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, minima.
        </p>
        <div className='flex items-center justify-between'>
          <span className='text-xl font-medium text-prime'>£1,099</span>
        </div>
      </div> 
    </div>
  )
}