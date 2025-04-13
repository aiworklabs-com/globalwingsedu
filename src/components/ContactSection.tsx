
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
    consent: false
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, destination: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your interest. We'll contact you shortly!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        message: '',
        consent: false
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gw-gray-light">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="heading-lg mb-6 gradient-text">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to start your international education journey? Contact us for a free consultation and take the first step towards your global future.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gw-blue text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gw-blue">Email Us</h4>
                  <p className="text-gray-600">info@globalwingsedu.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gw-blue text-white">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gw-blue">Call Us</h4>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gw-blue text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gw-blue">Visit Our Office</h4>
                  <p className="text-gray-600">123 Education Street, Suite 456<br />Global City, Country</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gw-blue text-white">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gw-blue">Working Hours</h4>
                  <p className="text-gray-600">Monday-Friday: 9am - 6pm<br />Saturday: 10am - 2pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gw-blue">Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Preferred Destination</label>
                <Select onValueChange={handleSelectChange} value={formData.destination}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a destination" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="australia">Australia</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="multiple">Multiple/Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your study goals and any questions you have"
                  rows={4}
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="consent" 
                  checked={formData.consent}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-500"
                >
                  I agree to receive information about Global Wings Education services
                </label>
              </div>
              
              <Button type="submit" className="btn-primary w-full" disabled={loading}>
                {loading ? "Sending..." : "Request Consultation"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
