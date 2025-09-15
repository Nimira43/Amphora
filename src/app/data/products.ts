export type Product = {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
}

export type Category = {
  name: string
  slug: string
  colour: string
  description: string
}

export const productsList: Product[] = [
  {
    id: 'product001',
    name: 'Smartphone Pro X',
    price: 999,
    description: 'A high-end smartphone with advanced camera and display technology.',
    image: '/images/product001.png',
    category: 'smartphones',
  },
  {
    id: 'product002',
    name: 'Smartphone Mini 12',
    price: 699,
    description: 'Compact and powerful smartphone with a sleek design.',
    image: '/images/product002.png',
    category: 'smartphones',
  },
  {
    id: 'product003',
    name: 'Smartphone Z',
    price: 1299,
    description: 'Next-gen foldable phone with a stunning AMOLED display.',
    image: '/images/product003.png',
    category: 'smartphones',
  },
  {
    id: 'product004',
    name: 'Ultra HD 4K TV',
    price: 1299,
    description: 'A stunning 4K UHD television with an immersive viewing experience.',
    image: '/images/product004.png',
    category: 'televisions',
  },
  {
    id: 'product005',
    name: 'Smart OLED TV',
    price: 1599,
    description: 'An OLED TV with perfect blacks and vibrant colours for the best experience.',
    image: '/images/product005.png',
    category: 'televisions',
  },
  {
    id: 'product006',
    name: 'Curved 8K Smart TV',
    price: 2999,
    description: 'A revolutionary 8K curved TV with AI-enhanced picture quality.',
    image: '/images/product006.png',
    category: 'televisions',
  },
  {
    id: 'product007',
    name: 'Wireless Noise-Canceling Headphones',
    price: 299,
    description: 'Premium headphones with active noise cancellation and superior sound quality.',
    image: '/images/product007.png',
    category: 'headphones',
  },
  {
    id: 'product008',
    name: 'Gaming Headset X1',
    price: 199,
    description: 'A high-performance gaming headset with 7.1 surround sound.',
    image: '/images/product008.png',
    category: 'headphones',
  },
  {
    id: 'product009',
    name: 'Sports Earbuds Pro',
    price: 149,
    description: 'Water-resistant wireless earbuds designed for active users.',
    image: '/images/product009.png',
    category: 'headphones',
  },
  {
    id: 'product010',
    name: 'Gaming Laptop Ultra',
    price: 1899,
    description: 'A high-end gaming laptop with an RTX 4090 GPU and 240Hz display.',
    image: '/images/product010.png',
    category: 'laptops',
  },
  {
    id: 'product011',
    name: 'Business Laptop Pro',
    price: 1299,
    description: 'A sleek and powerful laptop designed for productivity and business users.',
    image: '/images/product011.png',
    category: 'laptops',
  },
  {
    id: 'product012',
    name: '2-in-1 Convertible Laptop',
    price: 1099,
    description: 'A flexible 2-in-1 touchscreen laptop with a stylus pen.',
    image: '/images/product012.png',
    category: 'laptops',
  },
  {
    id: 'product013',
    name: 'Smartwatch Series 7',
    price: 399,
    description: 'A sleek and stylish smartwatch with health tracking features.',
    image: '/images/product013.png',
    category: 'smartwatches',
  },
  {
    id: 'product014',
    name: 'Rugged Adventure Smartwatch',
    price: 499,
    description: 'Built for durability and extreme conditions with GPS tracking.',
    image: '/images/product014.png',
    category: 'smartwatches',
  },
  {
    id: 'product015',
    name: 'Luxury Titanium Smartwatch',
    price: 899,
    description: 'A premium smartwatch with a titanium build and sapphire crystal display.',
    image: '/images/product015.png',
    category: 'smartwatches',
  },
  {
    id: 'product016',
    name: 'Professional DSLR Camera',
    price: 1499,
    description: 'High-resolution DSLR camera with advanced shooting features for professionals.',
    image: '/images/product016.png',
    category: 'cameras',
  },
  {
    id: 'product017',
    name: 'Mirrorless 4K Camera',
    price: 1199,
    description: 'Compact mirrorless camera with 4K video recording and interchangeable lenses.',
    image: '/images/product017.png',
    category: 'cameras',
  },
  {
    id: 'product018',
    name: 'Action Camera Pro',
    price: 349,
    description: 'Waterproof action camera for capturing your adventures in stunning detail.',
    image: '/images/product018.png',
    category: 'cameras',
  },
  {
    id: 'product019',
    name: 'Premium Tablet Pro',
    price: 899,
    description: 'High-performance tablet with a stunning display and powerful processor.',
    image: '/images/product019.png',
    category: 'tablets',
  },
  {
    id: 'product020',
    name: 'Drawing Tablet',
    price: 649,
    description: 'Specialised tablet for digital artists with pressure sensitivity.',
    image: '/images/product020.png',
    category: 'tablets',
  },
  {
    id: 'product021',
    name: 'Compact Tablet Mini',
    price: 399,
    description: 'Portable tablet that fits in your pocket with all-day battery life.',
    image: '/images/product021.png',
    category: 'tablets',
  },
  {
    id: 'product022',
    name: 'Smart Home Speaker',
    price: 199,
    description: 'Voice-controlled speaker with integrated AI assistant.',
    image: '/images/product022.png',
    category: 'speakers',
  },
  {
    id: 'product023',
    name: 'Portable Bluetooth Speaker',
    price: 129,
    description: 'Waterproof portable speaker with up to 20 hours of battery life.',
    image: '/images/product023.png',
    category: 'speakers',
  },
  {
    id: 'product024',
    name: 'Premium Soundbar',
    price: 499,
    description: 'High-fidelity soundbar with wireless subwoofer for immersive home theater audio.',
    image: '/images/product024.png',
    category: 'speakers',
  },
]

export const categories: Category[] = [
  {
    name: 'Smartphones',
    slug: 'smartphones',
    colour: '#0000ff',
    description: 'Latest mobile devices with cutting-edge features',
  },
  {
    name: 'Smart TVs',
    slug: 'televisions',
    colour: '#006400',
    description: 'High-definition displays for immersive viewing',
  },
  {
    name: 'Headphones',
    slug: 'headphones',
    colour: '#ffa500',
    description: 'Premium audio gear for music enthusiasts',
  },
  {
    name: 'Laptops',
    slug: 'laptops',
    colour: '#800080',
    description: 'Powerful computers for work and entertainment',
  },
  {
    name: 'Smart Watches',
    slug: 'smartwatches',
    colour: '#ff0000',
    description: 'Wearable tech to track fitness and stay connected',
  },
  {
    name: 'Cameras',
    slug: 'cameras',
    colour: '#a52a2a',
    description: 'Capture memories with high-quality photography',
  },
  {
    name: 'Tablets',
    slug: 'tablets',
    colour: '#008080',
    description: 'Versatile devices for work and entertainment',
  },
  {
    name: 'Speakers',
    slug: 'speakers',
    colour: '#daa520',
    description: 'Premium sound systems for your home',
  },
]
