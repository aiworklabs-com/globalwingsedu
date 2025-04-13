
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, GraduationCap, Building2, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { countryData } from '@/data/countryData';

const DestinationCard = ({ id, country, image, description, universities, cost, requirements }: {
  id: string;
  country: string;
  image: string;
  description: string;
  universities: string;
  cost: string;
  requirements: string;
}) => {
  return (
    <Link to={`/country/${id}`} className="block">
      <Card className="overflow-hidden card-hover h-full">
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
    </Link>
  );
};

const DestinationSection = () => {
  const destinations = countryData.map(country => ({
    id: country.id,
    country: country.name,
    image: country.image,
    description: country.description,
    universities: country.universities.length > 0 
      ? `${country.universities.length}+ top universities`
      : "Many top universities",
    cost: country.cost,
    requirements: country.requirements
  }));

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
              id={destination.id}
              country={destination.country}
              image={destination.image}
              description={destination.description}
              universities={destination.universities}
              cost={destination.cost}
              requirements={destination.requirements}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationSection;
