
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const AnimatedBackground = () => {
  const isMobile = useIsMobile();
  
  return (
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
  );
};

export default AnimatedBackground;
