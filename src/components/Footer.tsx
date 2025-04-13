
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gw-blue text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-2xl mb-4">
              <span className="text-gw-gold">Global</span> Wings
            </div>
            <p className="text-gray-300 mb-6">
              Your trusted partner for international education consultancy. We help students achieve their dreams of studying abroad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gw-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gw-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gw-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gw-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gw-gold transition-colors">Home</a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-gw-gold transition-colors">Destinations</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gw-gold transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-gw-gold transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gw-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Study Destinations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-gw-gold transition-colors">USA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gw-gold transition-colors">Australia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gw-gold transition-colors">UK</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gw-gold transition-colors">Canada</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Education Street, Suite 456</p>
              <p>Global City, Country</p>
              <p>Phone: +1 (234) 567-8900</p>
              <p>Email: info@globalwingsedu.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gw-blue-light/30 text-center text-gray-400 text-sm">
          <p>© {currentYear} Global Wings Education. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gw-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gw-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
