
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  // Delayed rendering to improve initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Reduce number of orbs significantly
  const orbCount = isMobile ? 3 : 6;
  
  if (!isVisible) return <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Simplified grid with less animation */}
      <motion.div 
        className="absolute inset-0" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{
          opacity: { duration: 0.5 },
          backgroundPosition: { duration: 20, repeat: Infinity, ease: "linear" }
        }}
        style={{ 
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Reduced number of orbs with simpler animation */}
      {Array.from({ length: orbCount }).map((_, i) => {
        // Pre-calculate random positions to avoid layout shifts
        const width = Math.random() * (isMobile ? 70 : 150) + (isMobile ? 30 : 50);
        const initialX = Math.random() * window.innerWidth;
        const initialY = Math.random() * window.innerHeight;
        const opacity = 0.1 + Math.random() * 0.2;
        
        return (
          <motion.div 
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl"
            initial={{ 
              width,
              height: width,
              x: initialX,
              y: initialY,
              opacity
            }}
            animate={{
              x: [initialX, initialX + 50, initialX - 50],
              y: [initialY, initialY - 50, initialY + 50],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
