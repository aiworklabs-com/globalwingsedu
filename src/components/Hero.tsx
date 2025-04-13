
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gw-blue to-gw-blue-dark text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIxIj4KICAgICAgICAgICAgPHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-24">
          <div className="lg:w-1/2 mb-10 lg:mb-0 z-10">
            <h1 className="heading-xl mb-6">
              Your Gateway to<br />
              <span className="text-gw-gold">Global Education</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Expert guidance for your international education journey to the USA, Australia, UK, and Canada. Turn your study abroad dreams into reality with Global Wings Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-secondary">Explore Destinations</Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Book Consultation
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gw-gold/30 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-4 w-72 h-72 bg-gw-blue-light/30 rounded-full filter blur-3xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students studying abroad" 
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 md:py-12 border-t border-white/20">
          <div className="flex flex-col items-center text-center">
            <GraduationCap className="w-10 h-10 mb-3 text-gw-gold" />
            <span className="text-3xl font-bold mb-1">1000+</span>
            <span className="text-sm text-white/80">Students Placed</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <MapPin className="w-10 h-10 mb-3 text-gw-gold" />
            <span className="text-3xl font-bold mb-1">4</span>
            <span className="text-sm text-white/80">Countries</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Award className="w-10 h-10 mb-3 text-gw-gold" />
            <span className="text-3xl font-bold mb-1">200+</span>
            <span className="text-sm text-white/80">Universities</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-10 h-10 mb-3 text-gw-gold" />
            <span className="text-3xl font-bold mb-1">15+</span>
            <span className="text-sm text-white/80">Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
