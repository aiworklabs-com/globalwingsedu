
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, ExternalLink, GraduationCap, MapPin, DollarSign, Building2, School } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { countryData } from '@/data/countryData';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';

const CountryDestination = () => {
  const { countryId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Scroll to top when the component mounts or route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Find the country data based on the URL parameter
  const country = countryData.find(c => c.id === countryId);
  
  // Handle if country is not found
  if (!country) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container-custom flex-1 flex flex-col items-center justify-center py-16">
          <h1 className="text-2xl font-bold mb-4">Country not found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Country Image */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src={country.heroImage || country.image} 
          alt={`${country.name} landscape`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{country.name}</h1>
            <div className="flex items-center justify-center text-white">
              <MapPin className="mr-2" />
              <span className="text-xl">Study Destination</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back Button */}
      <div className="container-custom py-6">
        <Button 
          variant="ghost" 
          className="flex items-center text-gw-blue" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Destinations
        </Button>
      </div>
      
      {/* Main Content */}
      <div className="container-custom py-6 flex-1">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="universities">Universities</TabsTrigger>
            <TabsTrigger value="costs">Costs & Requirements</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-gw-blue">About Studying in {country.name}</h2>
              <p className="text-gray-700 mb-6">{country.fullDescription || country.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gw-gray-light p-4 rounded-lg">
                  <div className="flex items-center text-gw-blue mb-2">
                    <GraduationCap className="mr-2" />
                    <h3 className="font-semibold">Education System</h3>
                  </div>
                  <p className="text-gray-700">{country.educationSystem}</p>
                </div>
                
                <div className="bg-gw-gray-light p-4 rounded-lg">
                  <div className="flex items-center text-gw-blue mb-2">
                    <Building2 className="mr-2" />
                    <h3 className="font-semibold">Student Life</h3>
                  </div>
                  <p className="text-gray-700">{country.studentLife}</p>
                </div>
                
                <div className="bg-gw-gray-light p-4 rounded-lg">
                  <div className="flex items-center text-gw-blue mb-2">
                    <DollarSign className="mr-2" />
                    <h3 className="font-semibold">Work Opportunities</h3>
                  </div>
                  <p className="text-gray-700">{country.workOpportunities}</p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="universities" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gw-blue">Top Universities in {country?.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {country?.universities.map((uni) => (
                  <Card key={uni.name} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardHeader className="bg-gw-blue text-white p-4 flex flex-row items-center space-y-0 gap-4">
                      <Avatar className="h-14 w-14 bg-white border-2 border-white">
                        {uni.logo ? (
                          <AvatarImage src={uni.logo} alt={uni.name} />
                        ) : (
                          <AvatarFallback className="bg-white text-gw-blue">
                            <School className="h-8 w-8" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">{uni.name}</CardTitle>
                        <CardDescription className="text-white/80 mt-1">{uni.location}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="mb-3">
                        <div className="text-sm font-medium text-gw-blue mb-1">World Ranking</div>
                        <div className="flex items-center">
                          <span className="text-2xl font-bold text-gw-gold">{uni.ranking}</span>
                          <span className="text-gray-500 text-sm ml-1">World Rank</span>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <div className="text-sm font-medium text-gw-blue mb-1">Programs</div>
                        <ScrollArea className="h-20 w-full rounded-md border p-2">
                          <div className="text-sm text-gray-700">
                            {uni.programs.join(", ")}
                          </div>
                        </ScrollArea>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 px-4 py-3 border-t">
                      <a 
                        href={uni.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center text-gw-blue hover:text-gw-gold transition-colors"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" /> Visit University Website
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="costs" className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gw-blue">Costs & Requirements</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gw-blue">Tuition Fees</h3>
                <div className="bg-gw-gray-light p-4 rounded-lg mb-4">
                  <p className="text-gray-700">{country.tuitionDetails || country.cost}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gw-blue mb-2">Undergraduate</h4>
                    <p className="text-gray-700">{country.undergradCosts}</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gw-blue mb-2">Graduate</h4>
                    <p className="text-gray-700">{country.gradCosts}</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gw-blue mb-2">Living Expenses</h4>
                    <p className="text-gray-700">{country.livingCosts}</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gw-blue">Entry Requirements</h3>
                <div className="bg-gw-gray-light p-4 rounded-lg mb-4">
                  <p className="text-gray-700">{country.requirementDetails || country.requirements}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gw-blue mb-2">Academic Requirements</h4>
                    <p className="text-gray-700">{country.academicRequirements}</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gw-blue mb-2">Language Requirements</h4>
                    <p className="text-gray-700">{country.languageRequirements}</p>
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gw-blue mb-2">Visa Requirements</h4>
                    <p className="text-gray-700">{country.visaRequirements}</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default CountryDestination;
