import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '@/data/site';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href) || location.hash === href.replace('/', '');
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
          >
            Mreedon
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-semibold transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${
                  isActive(item.href)
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-indigo-600 md:hidden dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-indigo-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-16 border-b border-gray-200 bg-white/95 px-4 py-4 backdrop-blur-md md:hidden dark:border-gray-800 dark:bg-gray-950/95">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800 dark:hover:text-indigo-400 ${
                    isActive(item.href)
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-gray-800 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
