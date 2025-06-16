import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projets', href: '/projets' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Info Bar - Masqué sur mobile pour économiser l'espace */}
      <div className="gradient-emerald text-white py-2 hidden xl:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 hover-glow">
                <Phone size={14} className="animate-pulse-glow" />
                <span className="font-medium">+225 XX XX XX XX XX</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow">
                <Mail size={14} className="animate-pulse-glow" />
                <span className="font-medium">contact@tpnsikan.com</span>
              </div>
              <div className="flex items-center space-x-2 hover-glow">
                <MapPin size={14} className="animate-pulse-glow" />
                <span className="font-medium">Abidjan, Côte d'Ivoire</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-accent-gold font-bold animate-float">
              <Clock size={14} />
              <span>Devis Gratuit 24h • Expertise Certifiée</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - Optimisé Mobile */}
      <header className={`w-full z-50 transition-all duration-700 ${
        isScrolled 
          ? 'nav-modern shadow-2xl sticky top-0' 
          : 'bg-white/98 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 lg:py-4">
            
            {/* Logo Optimisé Mobile */}
            <Link to="/" className="flex items-center space-x-2 lg:space-x-4 hover-lift-strong group">
              <div className="relative">
                <img 
                  src="/images/logo tp n'sikan.png" 
                  alt="TP N'SIKAN PROJET ESPOIR" 
                  className="h-10 sm:h-12 lg:h-16 w-auto group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute -inset-1 lg:-inset-2 gradient-rainbow rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-xl lg:text-3xl font-black text-gradient-modern tracking-tight">
                  TP N'SIKAN
                </h1>
                <p className="text-xs lg:text-sm font-bold text-primary-gray tracking-widest uppercase">
                  PROJET ESPOIR
                </p>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-item font-bold text-sm transition-all duration-300 ${
                    location.pathname === item.href
                      ? 'text-primary-green active'
                      : 'text-gray-700 hover:text-primary-green'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="btn-futuristic animate-pulse-glow text-sm"
              >
                Devis Gratuit
              </Link>
            </div>

            {/* Mobile Menu Button - Plus grand pour faciliter le touch */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-2xl text-gray-700 hover:text-primary-green hover:bg-primary-green/10 transition-all duration-300 hover-lift-strong touch-manipulation"
              aria-label="Menu de navigation"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation - Optimisé pour le touch */}
          <div className={`lg:hidden transition-all duration-700 overflow-hidden ${
            isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="glass-card rounded-2xl p-4 mt-4">
              
              {/* Info contact mobile */}
              <div className="xl:hidden mb-4 p-4 gradient-emerald rounded-xl text-white text-sm">
                <div className="flex items-center justify-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Phone size={14} />
                    <span>+225 XX XX XX XX XX</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Mail size={14} />
                    <span>contact@tpnsikan.com</span>
                  </div>
                </div>
              </div>

              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-bold transition-all duration-300 hover-lift-strong px-6 py-4 rounded-xl touch-manipulation ${
                      location.pathname === item.href
                        ? 'text-white bg-gradient-emerald'
                        : 'text-gray-700 hover:text-primary-green hover:bg-primary-green/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* CTA Mobile */}
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="btn-futuristic text-center mt-4 touch-manipulation"
                >
                  Devis Gratuit
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;