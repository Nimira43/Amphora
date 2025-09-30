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
        />
      </div>
    </div>
  )
}