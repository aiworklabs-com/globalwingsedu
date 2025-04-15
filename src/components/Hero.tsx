
import { Button } from '@/components/ui/button';
import { GraduationCap, MapPin, Award, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after a small delay for animation to trigger
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gw-blue via-gw-blue-dark to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Animated circles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full bg-gw-gold/10 animate-pulse`}
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAyIj4KICAgICAgICAgICAgPHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')] opacity-20"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="flex flex-col lg:flex-row items-center py-20 md:py-28">
          <div 
            className={`lg:w-1/2 mb-10 lg:mb-0 z-10 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h1 className="heading-xl mb-6 font-bold">
              Your Gateway to<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gw-gold to-gw-gold-light animate-pulse">
                Global Education
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl text-white/90">
              Expert guidance for your international education journey to the USA, Australia, UK, and Canada. Turn your study abroad dreams into reality with Global Wings Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-secondary group transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Explore Destinations</span>
                <MapPin className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Book Consultation</span>
              </Button>
            </div>
          </div>
          <div 
            className={`lg:w-1/2 flex justify-center lg:justify-end z-10 transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative w-full max-w-lg">
              {/* Glowing orb effects */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gw-gold/30 rounded-full filter blur-3xl opacity-70 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-4 w-72 h-72 bg-gw-blue-light/30 rounded-full filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gw-blue-dark/50 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students studying abroad" 
                  className="w-full aspect-video object-cover transform transition-transform duration-10000 hover:scale-110"
                />
                
                {/* Floating UI elements */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/40 backdrop-blur-md rounded-lg p-3 z-20 transform transition-all duration-500 hover:translate-y-[-5px]">
                  <div className="flex justify-between items-center">
                    <div className="text-white">
                      <div className="text-xs uppercase tracking-wider text-gw-gold">Your Journey Begins</div>
                      <div className="text-sm font-medium">Global Education Pathways</div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-2 h-2 rounded-full bg-gw-gold opacity-70"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section with animated counting */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 md:py-12 border-t border-white/20">
          <StatCounter icon={<GraduationCap className="w-10 h-10 mb-3 text-gw-gold" />} end={1000} suffix="+" label="Students Placed" delay={0} />
          <StatCounter icon={<MapPin className="w-10 h-10 mb-3 text-gw-gold" />} end={4} label="Countries" delay={300} />
          <StatCounter icon={<Award className="w-10 h-10 mb-3 text-gw-gold" />} end={200} suffix="+" label="Universities" delay={600} />
          <StatCounter icon={<Users className="w-10 h-10 mb-3 text-gw-gold" />} end={15} suffix="+" label="Years Experience" delay={900} />
        </div>
      </div>
    </div>
  );
};

interface StatCounterProps {
  icon: React.ReactNode;
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatCounter = ({ icon, end, suffix = "", label, delay = 0 }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;
    
    // Use smaller steps for larger numbers
    const step = Math.max(1, Math.floor(end / 30));
    
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <div 
      className={`flex flex-col items-center text-center transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {icon}
      <span className="text-3xl font-bold mb-1 flex items-center">
        <span>{count}</span><span>{suffix}</span>
      </span>
      <span className="text-sm text-white/80">{label}</span>
    </div>
  );
};

export default Hero;
