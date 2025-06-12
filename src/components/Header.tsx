
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Experiência', href: '#experience' },
    { name: 'Compromisso', href: '#commitment' },
    { name: 'Contato', href: '#contact' },
    { name: 'Currículo', href: '#curriculum' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-perito-dark/90 shadow-md backdrop-blur-md' : 'bg-white/55 backdrop-blur-md'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#hero" className="flex items-center">
            <div className="font-serif text-2xl font-bold text-perito-primary dark:text-white hover:text-perito-accent transition-colors duration-300">
              Thiago Xavier
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-perito-accent dark:hover:text-perito-secondary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            {/* <Button
              variant="outline"
              className="border-perito-primary text-perito-primary hover:bg-perito-primary hover:text-white transition-all duration-300"
            >
              Contato
            </Button> */}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-perito-accent dark:hover:text-perito-secondary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              {/* <Button
                variant="outline"
                className="border-perito-primary text-perito-primary hover:bg-perito-primary hover:text-white transition-all duration-300 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
