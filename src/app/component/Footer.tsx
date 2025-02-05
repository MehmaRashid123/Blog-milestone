import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="https://www.svgrepo.com/show/353810/google-developers.svg" 
              alt="Google Developers Logo" 
              width={50} 
              height={50} 
            />
          </Link>

          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025 MehmaRashid123. All Rights Reserved.
          </p>
          
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* GitHub Link */}
            <Link href="https://github.com/MehmaRashid123" target="_blank" rel="noopener noreferrer" className="text-gray-500 mx-3">
              <FaGithub className="w-5 h-5" />
            </Link>
            {/* LinkedIn Link */}
            <Link href="https://www.linkedin.com/in/mehma-rashid-9ba58b338" target="_blank" rel="noopener noreferrer" className="text-gray-500 mx-3">
              <FaLinkedinIn className="w-5 h-5" />
            </Link>
            {/* Email Link */}
            <Link href="mailto:mehmarashid65@gmail.com" className="text-gray-500 mx-3">
              <FaEnvelope className="w-5 h-5" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default Footer
