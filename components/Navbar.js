import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return router.pathname === path || router.pathname.startsWith(`${path}/`);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            DataSciHub
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/learn" 
              className={`text-gray-600 hover:text-primary-600 transition-colors ${
                isActive('/learn') ? 'text-primary-600 font-medium' : ''
              }`}
            >
              学习中心
            </Link>
            <Link 
              href="/forum" 
              className={`text-gray-600 hover:text-primary-600 transition-colors ${
                isActive('/forum') ? 'text-primary-600 font-medium' : ''
              }`}
            >
              社区论坛
            </Link>
            <Link 
              href="/news" 
              className={`text-gray-600 hover:text-primary-600 transition-colors ${
                isActive('/news') ? 'text-primary-600 font-medium' : ''
              }`}
            >
              新闻资讯
            </Link>
          </div>
          
          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* 移动端菜单 */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/learn" 
                className={`text-gray-600 hover:text-primary-600 transition-colors ${
                  isActive('/learn') ? 'text-primary-600 font-medium' : ''
                }`}
              >
                学习中心
              </Link>
              <Link 
                href="/forum" 
                className={`text-gray-600 hover:text-primary-600 transition-colors ${
                  isActive('/forum') ? 'text-primary-600 font-medium' : ''
                }`}
              >
                社区论坛
              </Link>
              <Link 
                href="/news" 
                className={`text-gray-600 hover:text-primary-600 transition-colors ${
                  isActive('/news') ? 'text-primary-600 font-medium' : ''
                }`}
              >
                新闻资讯
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 