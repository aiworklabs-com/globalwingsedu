
import { useRef } from 'react';
import AnimatedBackground from './hero/AnimatedBackground';
import HeroContent from './hero/HeroContent';
import StatsSection from './hero/StatsSection';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden h-[100vh] flex items-center"
    >
      {/* Animated background elements */}
      <AnimatedBackground />
      
      {/* Main content */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 py-8 sm:py-12">
        <HeroContent />
        
        {/* Stats Section */}
        <StatsSection />
      </div>
    </div>
  );
};

export default Hero;
