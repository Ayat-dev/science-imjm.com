import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'À Propos': [
      { name: 'Notre Mission', href: '/about' },
      { name: 'Notre Équipe', href: '/about' },
      { name: 'Contact', href: '/contact' },
    ],
    'Contenus': [
      { name: 'Blog', href: '/blog' },
      { name: 'Projets', href: '/#projects' },
      { name: 'Newsletter', href: '/#newsletter' },
    ],
    'Boutique': [
      { name: 'Produits', href: '/shop' },
      { name: 'Panier', href: '/cart' },
      { name: 'Mon Compte', href: '/account' },
    ],
    'Légal': [
      { name: 'Mentions Légales', href: '/legal/mentions' },
      { name: 'Confidentialité', href: '/legal/privacy' },
      { name: 'CGV', href: '/legal/cgv' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'in' },
    { name: 'GitHub', url: 'https://github.com', icon: 'GH' },
    { name: 'YouTube', url: 'https://youtube.com', icon: 'YT' },
  ];

  return (
    <footer className="bg-charcoal text-white-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tech-blue to-violet-neon flex items-center justify-center">
                <Icon name="science" className="text-white" size="md" />
              </div>
              <span className="text-xl font-bold">Science IMJM</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Rendre la science moderne accessible et vivante à travers des articles, projets et produits innovants.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover-lift"
                  aria-label={social.name}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Science IMJM. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm">
              Fait avec passion pour la science 🧪 par @Ayat-Dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
