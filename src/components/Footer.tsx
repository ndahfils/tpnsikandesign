import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/logo tp n'sikan.png" 
                alt="TP N'SIKAN PROJET ESPOIR" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-primary-green">TP N'SIKAN</h3>
                <p className="text-sm text-gray-300">PROJET ESPOIR</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre partenaire de confiance pour tous vos projets de construction et de rénovation. 
              Nous transformons vos rêves en réalité avec expertise et passion.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/tpnsikanprojetespoir" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-primary-green transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-green transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-green transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-green">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projets" className="text-gray-300 hover:text-white transition-colors">Projets</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-green">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary-green mt-1 flex-shrink-0" />
                <p className="text-gray-300">Abidjan, Côte d'Ivoire</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary-green flex-shrink-0" />
                <p className="text-gray-300">+225 XX XX XX XX XX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary-green flex-shrink-0" />
                <p className="text-gray-300">contact@tpnsikan.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 TP N'SIKAN PROJET ESPOIR. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;