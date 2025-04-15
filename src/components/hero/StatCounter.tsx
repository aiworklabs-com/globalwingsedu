
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

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

export default StatCounter;
