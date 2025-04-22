
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventRegistration = () => {
  const { eventSlug } = useParams();
  const navigate = useNavigate();

  // This would normally come from an API based on the eventSlug
  const event = {
    title: eventSlug?.split('-').join(' ').replace(/(^\w|\s\w)/g, l => l.toUpperCase()),
    date: "Event date will be fetched based on slug",
    time: "Event time will be fetched based on slug",
    location: "Event location will be fetched based on slug",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container-custom py-12">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center text-gw-blue" 
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Events
        </Button>
        
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gw-blue mb-6">
            Register for {event.title}
          </h1>
          
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <p className="text-gray-600">
              Registration form will be implemented here.
              <br />
              Event Details:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Date: {event.date}</li>
              <li>Time: {event.time}</li>
              <li>Location: {event.location}</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventRegistration;
