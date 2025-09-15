import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Amphora',
  description: 'E-commerce store using Next JS 15 and Tailwind 4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={poppins.className}>
      <body
        className={
          'antialiased min-h-screen flex flex-col m-0 p-0 '
        }
      >
        {children}
      </body>
    </html>
  )
}
