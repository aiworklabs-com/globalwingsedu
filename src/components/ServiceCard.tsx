
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="card-hover h-full">
      <CardContent className="pt-6">
        <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full bg-gw-blue/10 text-gw-blue">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gw-blue">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="text-gw-blue hover:text-gw-blue-light p-0 flex items-center gap-2">
          Learn more <ArrowRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
