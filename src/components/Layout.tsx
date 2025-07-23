import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '服务介绍', href: '/services' },
  { name: '案例展示', href: '/cases' },
  { name: '团队介绍', href: '/team' },
  { name: '联系我们', href: '/contact' },
];

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <nav className="mx-auto max-w-6xl px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-between py-6">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <span className="text-2xl font-light text-gray-900">熵变智元</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-light transition-colors duration-300 hover:text-blue-600 ${
                    location.pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-gray-900 text-white px-8 py-2 text-sm font-medium hover:bg-gray-800 transition-all duration-300"
              >
                联系我们
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6">
              <div className="space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block text-lg font-light transition-colors duration-300 hover:text-blue-600 ${
                      location.pathname === item.href ? 'text-blue-600' : 'text-gray-700'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  className="block w-full bg-gray-900 text-white px-8 py-3 text-center font-medium hover:bg-gray-800 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  联系我们
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <span className="text-2xl font-light text-gray-900">熵变智元</span>
              </div>
              <p className="text-gray-500 font-light max-w-sm">
                专注于AI Agent技术研发，为企业提供智能化解决方案。
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-light text-gray-900">快速链接</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-500 hover:text-gray-900 transition-colors duration-300 font-light"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-light text-gray-900">联系方式</h3>
              <ul className="space-y-3 text-gray-500 font-light">
                <li>shangbianai@sbzytech.cn</li>
                <li>400-888-9999</li>
                <li>北京市海淀区中关村软件园</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8">
            <p className="text-sm text-gray-400 font-light text-center">
              © 2024 熵变智元(北京)科技有限公司. 保留所有权利.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}