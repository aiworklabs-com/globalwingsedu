
import { ArrowRight, BookOpen, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroContent = () => {
  const isMobile = useIsMobile();
  
  return (
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
      
      <HeroImage />
    </div>
  );
};

const HeroImage = () => {
  return (
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
  );
};

export default HeroContent;
