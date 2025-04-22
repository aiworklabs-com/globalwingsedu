
import { 
  GraduationCap, 
  FileCheck, 
  Briefcase, 
  CreditCard, 
  Plane, 
  Home, 
  Building2, 
  LifeBuoy 
} from 'lucide-react';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DestinationSection from '@/components/DestinationSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialSection from '@/components/TestimonialSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import EventsSection from '@/components/EventsSection';

const Index = () => {
  const services = [
    {
      icon: <GraduationCap size={24} />,
      title: "University Selection",
      description: "Personalized guidance to help you select the right universities based on your academic profile, career goals, and budget."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Application Assistance",
      description: "Comprehensive support with preparing and submitting winning applications, including SOP and essays."
    },
    {
      icon: <Briefcase size={24} />,
      title: "Visa Guidance",
      description: "Expert advice on student visa requirements and thorough preparation for visa interviews."
    },
    {
      icon: <CreditCard size={24} />,
      title: "Scholarship Assistance",
      description: "Help identifying and applying for scholarships and financial aid opportunities to fund your education."
    },
    {
      icon: <Plane size={24} />,
      title: "Pre-Departure Support",
      description: "Comprehensive guidance to prepare you for your journey and life abroad, ensuring a smooth transition."
    },
    {
      icon: <Home size={24} />,
      title: "Accommodation Services",
      description: "Assistance with finding suitable and affordable housing options near your university."
    },
    {
      icon: <Building2 size={24} />,
      title: "Career Counseling",
      description: "Professional guidance to align your study choices with your long-term career aspirations."
    },
    {
      icon: <LifeBuoy size={24} />,
      title: "Post-Arrival Support",
      description: "Ongoing assistance after you reach your destination to help you settle in and navigate any challenges."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DestinationSection />
      
      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4 gradient-text">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive support at every stage of your international education journey, ensuring a smooth and successful experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      <EventsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
