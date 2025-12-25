import Link from 'next/link'
import { AiOutlinePinterest } from 'react-icons/ai'
import { BsTwitterX, BsArrowRight } from 'react-icons/bs'
import { LuAmphora } from 'react-icons/lu'
import { RxInstagramLogo } from 'react-icons/rx'
import { TfiFacebook } from 'react-icons/tfi'
import { categories } from '../data/products'

const socialMediaIcons = [
  { icon: <TfiFacebook />, name: 'Facebook' },
  { icon: <BsTwitterX />, name: 'Twitter' },
  { icon: <RxInstagramLogo />, name: 'Instagram' },
  { icon: <AiOutlinePinterest />, name: 'Pinterest' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const companyName = 'Amphora'

  return (
   <footer> 
      <div className='bg-grey-dark py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-8 md:mb-0 md:max-w-xl'>
              <h2 className='text-3xl font-medium text-light mb-2'>Signup to our Newsletter</h2>
              <p className='text-light font-light'>Packed with news and offers plus news about upcoming products.</p>
            </div>
            <div className='w-full md:w-auto'>
              <form className='flex flex-col sm:flex-row gap-2'>
                <input type='email' placeholder='Email Address' className='px-5 py-3 rounded-md bg-light text-dark border-0 outline-0 min-w-[240px]' required />
                <button type='submit' className='text-light bg-prime hover:bg-prime-dark uppercase px-6 py-3 rounded-md items-center justify-center'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto py-16 p-5'>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:[grid-template-columns:2fr_1fr_1fr_1fr_1fr]">
          <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
            <Link
              href='/'
              className='flex items-center justify-center lg:justify-start mb-6'
            >
              <div className='bg-prime text-light w-10 h-10 rounded-full flex items-center justify-center text-2xl mr-2'>
                <LuAmphora />
              </div>
              <span className='text-2xl logo'>Amphora</span>
            </Link>
            <p className='text-dark text-sm mb-6'>
              We provide a wide variety of products all in one place. 
            </p>
            <div className='flex justify-center lg:justify-start space-x-4'>
              {socialMediaIcons.map(({ icon, name }) => (
                <Link
                  href='#'
                  key={name}
                  className='social group flex items-center justify-center w-9 h-9 rounded-full bg-grey-light-extra hover:bg-prime text-dark hover:text-light'
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
          <div className='col-span-1 text-center lg:text-left'>
            <h3 className='text-dark font-medium mb-4 text-lg'>Categories</h3>
            <ul className='space-y-2.5'>
              {categories.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link 
                    href='/products'
                    className='text-dark hover:text-prime hover:translate-x-1 inline-flex items-center'
                  >
                    <span className='w-1.5 h-1.5 rounded bg-prime mr-2 inline-block'></span>
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href='/products'
                  className='text-dark hover:text-prime hover:translate-x-1 inlineflex items-center group'
                >
                  View All
                  <BsArrowRight className='inline ml-1 group-hover:translate-x-1 transition-transform'/>
                </Link>
              </li>
            </ul>
          </div>
          <div className='col-span-1 text-center lg:text-left'>
            <h3 className='text-dark mb-4 font-medium text-lg'>Shop</h3>
            <ul className='space-y-2.5'>
              {['All Products', 'New Arrivals', 'Top Selling', 'Deals', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <a 
                    href='#'
                    className='text-dark hover:text-prime hover:translate-x-1  items-center'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-1 text-center lg:text-left'>
            <h3 className='text-dark mb-4 font-medium text-lg'>Support</h3>
            <ul className='space-y-2.5'>
              {['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Track Order'].map((item) => (
                <li key={item}>
                  <a 
                    href='#'
                    className='text-dark hover:text-prime hover:translate-x-1  items-center'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='col-span-1 text-center lg:text-left'>
            <h3 className='text-dark mb-4 font-medium text-lg'>Company</h3>
            <ul className='space-y-2.5'>
              {['About Us', 'Blog', 'Careers', 'Press', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a 
                    href='#'
                    className='text-dark hover:text-prime hover:translate-x-1  items-center'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-grey-medium'>
        <div className='max-w-7xl mx-auto p-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='text-dark text-sm mb-4 md:mb-0'>
              &copy; {currentYear} {companyName}. All Rights Reserved.
            </div>
            <div className='flex items-center'>
              <div className='hidden sm:flex items-center mr-6 space-x-3'>
                {socialMediaIcons.map(({ icon, name }) => (
                <Link
                  href='#'
                  key={name}
                  className='social group flex items-center justify-center w-9 h-9 text-dark hover:text-prime'
                >
                  {icon}
                </Link>
              ))}
              </div>
              <div className='flex space-x-4 items-center'>
                <a 
                  href='#'
                  className='text-sm text-dark hover:text-prime'
                >
                  Terms
                </a>
                <span className='w-1 h-1 rounded-full bg-prime'></span>
                <a 
                  href='#'
                  className='text-sm text-dark hover:text-prime'
                >
                  Privacy
                </a>
                <span className='w-1 h-1 rounded-full bg-prime'></span>
                <a 
                  href='#'
                  className='text-sm text-dark hover:text-prime'
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
