import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          {/* Image component for logo */}
          <Image 
            src="https://www.svgrepo.com/show/353810/google-developers.svg" 
            alt="Google Developers Logo" 
            width={50} 
            height={50} 
          />
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
          <Link href="/blog" className="mr-5 hover:text-gray-900">Blog</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">Contact</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
