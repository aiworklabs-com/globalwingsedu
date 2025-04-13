
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialProps {
  content: string;
  name: string;
  role: string;
  image: string;
  country: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Global Wings helped me secure admission to my dream university in the USA. Their counselors guided me through each step of the process, from selecting universities to visa preparation.",
    name: "Priya Sharma",
    role: "Computer Science Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    country: "USA"
  },
  {
    content: "The team at Global Wings made my Australian education journey seamless. They provided valuable insights about the country and helped me find scholarships that significantly reduced my financial burden.",
    name: "Ahmed Khan",
    role: "Business Administration Student",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    country: "Australia"
  },
  {
    content: "I was confused about the application process for UK universities, but Global Wings simplified everything. Their expertise and personalized guidance were invaluable in my successful application.",
    name: "Li Wei",
    role: "Marketing Student",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    country: "UK"
  },
  {
    content: "Thanks to Global Wings, my transition to studying in Canada was smooth. Their comprehensive support from application to accommodation arrangements exceeded my expectations.",
    name: "Carlos Rodriguez",
    role: "Environmental Science Student",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    country: "Canada"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 gradient-text">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from students who have successfully embarked on their international education journey with our guidance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-gradient-to-br from-gw-blue to-gw-blue-dark text-white">
            <CardContent className="pt-8 pb-8">
              <div className="flex justify-center mb-6">
                <Quote size={48} className="text-gw-gold opacity-50" />
              </div>
              <p className="text-xl text-center mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gw-gold mb-3">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                <p className="text-white/80 text-sm">{testimonials[currentIndex].role}</p>
                <div className="mt-1 inline-block bg-gw-gold/20 px-3 py-1 rounded-full text-xs font-medium text-gw-gold">
                  {testimonials[currentIndex].country}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gw-blue text-gw-blue hover:bg-gw-blue hover:text-white"
              onClick={handlePrev}
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gw-blue text-gw-blue hover:bg-gw-blue hover:text-white"
              onClick={handleNext}
            >
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
