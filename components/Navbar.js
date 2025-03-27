import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              DataSciHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/learn" className="text-gray-600 hover:text-primary-600">
              学习中心
            </Link>
            <Link href="/forum" className="text-gray-600 hover:text-primary-600">
              社区论坛
            </Link>
            <Link href="/news" className="text-gray-600 hover:text-primary-600">
              行业动态
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/learn" className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50">
              学习中心
            </Link>
            <Link href="/forum" className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50">
              社区论坛
            </Link>
            <Link href="/news" className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50">
              行业动态
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 