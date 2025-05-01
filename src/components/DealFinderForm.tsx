
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, Mail, Phone, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const DealFinderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    bookingUrl: "",
    name: "",
    hotelEmail: "",
    hotelPhone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request submitted successfully!",
        description: "We'll start negotiating your discount right away.",
      });
      // Reset form
      setFormData({
        bookingUrl: "",
        name: "",
        hotelEmail: "",
        hotelPhone: ""
      });
    }, 1500);
  };

  return (
    <section id="deal-finder" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-negotio-blue mb-4">Find Your Hotel Deal</h2>
            <p className="text-lg text-gray-600">
              Paste a booking link from any travel website, add the hotel contact info, and we'll handle the negotiation for you.
            </p>
          </div>
          
          <Card className="border-2 border-negotio-teal/20 shadow-lg">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="bookingUrl" className="text-negotio-blue flex items-center">
                    <Link className="mr-2 h-4 w-4" /> Booking URL
                  </Label>
                  <Input
                    id="bookingUrl"
                    name="bookingUrl"
                    placeholder="Paste booking link from Booking.com, Expedia, etc."
                    value={formData.bookingUrl}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-negotio-teal focus:ring-negotio-teal"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-negotio-blue flex items-center">
                    <User className="mr-2 h-4 w-4" /> Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-negotio-teal focus:ring-negotio-teal"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="hotelEmail" className="text-negotio-blue flex items-center">
                    <Mail className="mr-2 h-4 w-4" /> Hotel Email
                  </Label>
                  <Input
                    id="hotelEmail"
                    name="hotelEmail"
                    type="email"
                    placeholder="Enter the hotel's email address"
                    value={formData.hotelEmail}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-negotio-teal focus:ring-negotio-teal"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="hotelPhone" className="text-negotio-blue flex items-center">
                    <Phone className="mr-2 h-4 w-4" /> Hotel Phone Number
                  </Label>
                  <Input
                    id="hotelPhone"
                    name="hotelPhone"
                    type="tel"
                    placeholder="Enter the hotel's phone number"
                    value={formData.hotelPhone}
                    onChange={handleChange}
                    className="border-gray-300 focus:border-negotio-teal focus:ring-negotio-teal"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-negotio-blue to-negotio-teal hover:from-negotio-teal hover:to-negotio-blue text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300"
                >
                  {isSubmitting ? "Submitting..." : "Find Me a Better Deal"}
                </Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                By submitting this form, you allow us to negotiate with the hotel on your behalf.
                <br />We never share your personal information with third parties.
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DealFinderForm;
