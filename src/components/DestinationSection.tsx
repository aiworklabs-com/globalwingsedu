
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Building2, DollarSign } from 'lucide-react';

interface DestinationProps {
  country: string;
  image: string;
  description: string;
  universities: string;
  cost: string;
  requirements: string;
}

const destinations: DestinationProps[] = [
  {
    country: "USA",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Home to the world's top universities with diverse programs and vibrant campus life.",
    universities: "4,000+ colleges and universities",
    cost: "$20,000 - $60,000 per year",
    requirements: "SAT/ACT, TOEFL/IELTS, GPA 3.0+"
  },
  {
    country: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Quality education with work opportunities in a multicultural, safe environment.",
    universities: "43 universities, many in the global top 100",
    cost: "AUD 20,000 - 45,000 per year",
    requirements: "IELTS 6.0+, strong academics"
  },
  {
    country: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "Prestigious education with shorter programs and rich cultural heritage.",
    universities: "160+ universities including Oxford and Cambridge",
    cost: "£10,000 - £38,000 per year",
    requirements: "IELTS 6.5+, strong academic background"
  },
  {
    country: "Canada",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "High-quality education with post-study work permits and pathway to residency.",
    universities: "100+ universities and colleges",
    cost: "CAD 15,000 - 35,000 per year",
    requirements: "IELTS 6.0+, strong academics"
  }
];

const DestinationCard = ({ country, image, description, universities, cost, requirements }: DestinationProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={country} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
      </div>
      <CardContent className="pt-6 pb-8 px-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gw-blue">{country}</h3>
          <div className="flex items-center text-gw-gold">
            <MapPin size={18} />
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <GraduationCap size={16} className="text-gw-blue" />
            <span>{universities}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-gw-blue" />
            <span>{cost}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 size={16} className="text-gw-blue" />
            <span>{requirements}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DestinationSection = () => {
  return (
    <section id="destinations" className="section-padding bg-gw-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 gradient-text">Explore Destinations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the perfect study destination for your academic goals and personal preferences. Our expert counselors can guide you through each option.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.country}
              {...destination}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
