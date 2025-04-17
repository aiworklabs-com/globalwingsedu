
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex justify-between items-center py-2">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/4c095079-4c2b-4c2a-b11f-72373949fdb0.png" 
            alt="Global Wings Education Logo" 
            className="h-14"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gw-blue-dark hover:text-gw-blue font-medium">Home</a>
          <a href="#destinations" className="text-gw-blue-dark hover:text-gw-blue font-medium">Destinations</a>
          <a href="#services" className="text-gw-blue-dark hover:text-gw-blue font-medium">Services</a>
          <a href="#testimonials" className="text-gw-blue-dark hover:text-gw-blue font-medium">Testimonials</a>
          <a href="#contact" className="text-gw-blue-dark hover:text-gw-blue font-medium">Contact</a>
        </nav>

        <div className="hidden md:block">
          <Button className="btn-primary">Free Consultation</Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gw-blue-dark hover:text-gw-blue font-medium py-2 px-4 rounded-lg hover:bg-gray-100" onClick={toggleMenu}>Home</a>
            <a href="#destinations" className="text-gw-blue-dark hover:text-gw-blue font-medium py-2 px-4 rounded-lg hover:bg-gray-100" onClick={toggleMenu}>Destinations</a>
            <a href="#services" className="text-gw-blue-dark hover:text-gw-blue font-medium py-2 px-4 rounded-lg hover:bg-gray-100" onClick={toggleMenu}>Services</a>
            <a href="#testimonials" className="text-gw-blue-dark hover:text-gw-blue font-medium py-2 px-4 rounded-lg hover:bg-gray-100" onClick={toggleMenu}>Testimonials</a>
            <a href="#contact" className="text-gw-blue-dark hover:text-gw-blue font-medium py-2 px-4 rounded-lg hover:bg-gray-100" onClick={toggleMenu}>Contact</a>
            <Button className="btn-primary w-full mt-2">Free Consultation</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
