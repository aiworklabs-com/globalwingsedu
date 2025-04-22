import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  registrationLink: string;
}

const EventCard = ({ title, date, time, location, image, registrationLink }: EventCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <img 
          src={image} 
          alt={title}
          className="object-cover w-full h-full rounded-t-lg"
        />
      </AspectRatio>
      
      <CardHeader>
        <h3 className="text-xl font-semibold text-gw-blue line-clamp-2">{title}</h3>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{time}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{location}</span>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full" asChild>
          <Link to={registrationLink}>
            Register Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
