import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../ui/Icon';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Boutique', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-soft py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tech-blue to-violet-neon flex items-center justify-center transition-transform group-hover:scale-110">
              <Icon name="science" className="text-white" size="md" />
            </div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-tech-blue to-violet-neon bg-clip-text text-transparent">
              Science IMJM
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors relative group ${
                  location.pathname === item.href
                    ? 'text-tech-blue'
                    : 'text-gray-700 hover:text-tech-blue'
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-tech-blue transition-all ${
                    location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/account"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Mon compte"
            >
              <Icon name="user" />
            </Link>
            <Link
              to="/cart"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative"
              aria-label="Panier"
            >
              <Icon name="cart" />
              <span className="absolute top-0 right-0 w-5 h-5 bg-accent-orange text-white text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 transition-colors ${
                    location.pathname === item.href
                      ? 'text-tech-blue'
                      : 'text-gray-700 hover:text-tech-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                <Link
                  to="/account"
                  className="flex items-center space-x-2 text-gray-700 hover:text-tech-blue transition-colors"
                >
                  <Icon name="user" size="sm" />
                  <span className="font-medium">Mon Compte</span>
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center space-x-2 text-gray-700 hover:text-tech-blue transition-colors"
                >
                  <Icon name="cart" size="sm" />
                  <span className="font-medium">Panier (0)</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
