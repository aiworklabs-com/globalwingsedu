
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, GraduationCap, MapPin, Award, Users, Sparkles, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Update counter for infinite animation
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => (prev + 1) % 1000);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div 
      ref={containerRef}
      className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden h-[100vh] flex items-center"
    >
      {/* Animated background elements - now with automatic animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid with automatic motion */}
        <motion.div 
          className="absolute inset-0" 
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Floating orbs - maintained but with adjusted animation */}
        {Array.from({ length: isMobile ? 6 : 15 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl"
            initial={{ 
              width: Math.random() * (isMobile ? 100 : 200) + (isMobile ? 30 : 50),
              height: Math.random() * (isMobile ? 100 : 200) + (isMobile ? 30 : 50),
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.1 + Math.random() * 0.3
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              opacity: [0.1 + Math.random() * 0.3, 0.2 + Math.random() * 0.4, 0.1 + Math.random() * 0.3]
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto relative z-10 px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300" />
              <span>Transforming Global Education</span>
            </motion.div>
            
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Your Gateway to
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500 animate-gradient-x">
                Global Education
              </span>
            </motion.h1>
            
            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Expert guidance for your international education journey through immersive learning experiences across the globe.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Button 
                className="group bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-6 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Explore Destinations</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={isMobile ? 16 : 18} />
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border border-purple-500/30 backdrop-blur-md text-white hover:bg-white/10 px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-6 rounded-full transition-all duration-300 text-sm sm:text-base"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Book Consultation</span>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative hidden sm:block"
          >
            <div className="relative">
              {/* 3D Rotating Globe - kept with automatic animation */}
              <motion.div 
                className="absolute -top-10 sm:-top-16 lg:-top-20 -right-10 sm:-right-16 lg:-right-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 opacity-40"
                animate={{ 
                  rotate: 360
                }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <Globe className="w-full h-full text-purple-300" />
              </motion.div>
              
              {/* Main image with frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_80px_rgba(120,60,255,0.15)] backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 to-transparent z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students studying abroad" 
                  className="w-full object-cover h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]"
                />
                
                {/* Floating card */}
                <motion.div 
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/10 backdrop-blur-xl rounded-xl p-3 sm:p-4 border border-white/20 z-20"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                >
                  <motion.div 
                    className="flex justify-between items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                  >
                    <div>
                      <div className="text-xs uppercase tracking-wider text-purple-300">Your Journey Begins</div>
                      <div className="text-xs sm:text-sm font-medium">Global Education Pathways</div>
                    </div>
                    <motion.div 
                      className="flex space-x-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <StatCounter 
            icon={<GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2 sm:mb-3 text-purple-400" />} 
            end={1000} 
            suffix="+" 
            label="Students Placed" 
            delay={0} 
          />
          <StatCounter 
            icon={<MapPin className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2 sm:mb-3 text-purple-400" />} 
            end={4} 
            label="Countries" 
            delay={200} 
          />
          <StatCounter 
            icon={<Award className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2 sm:mb-3 text-purple-400" />} 
            end={200} 
            suffix="+" 
            label="Universities" 
            delay={400} 
          />
          <StatCounter 
            icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 mb-2 sm:mb-3 text-purple-400" />} 
            end={15} 
            suffix="+" 
            label="Years Experience" 
            delay={600} 
          />
        </motion.div>
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
  const countRef = useRef<HTMLSpanElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);
  
  const startCounting = () => {
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const step = Math.max(1, Math.floor(end / 100));
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.min(Math.floor(end * progress), end);
      
      setCount(currentCount);
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
    
    return () => clearInterval(timer);
  };

  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: delay / 1000
        }}
      >
        {icon}
      </motion.div>
      <span ref={countRef} className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 flex items-center">
        <span>{count}</span><span>{suffix}</span>
      </span>
      <span className="text-xs sm:text-sm text-purple-200">{label}</span>
    </motion.div>
  );
};

export default Hero;
