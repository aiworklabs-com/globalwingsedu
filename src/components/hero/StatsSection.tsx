
import { GraduationCap, MapPin, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import StatCounter from './StatCounter';

const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
