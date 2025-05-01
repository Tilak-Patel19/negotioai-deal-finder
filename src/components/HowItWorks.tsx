
import { 
  Link, Mail, Phone, Check 
} from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Link,
      title: "Paste Booking URL",
      description: "Copy the booking URL from any travel website and paste it into our form."
    },
    {
      icon: Mail,
      title: "Add Contact Info",
      description: "Provide the hotel's email, phone number, and your name so we can negotiate on your behalf."
    },
    {
      icon: Check,
      title: "Get Your Discount",
      description: "Our AI negotiates with the hotel and secures you a better rate than what's publicly available."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-negotio-lightBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-negotio-blue mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting a better hotel deal has never been easier. Our AI negotiation system does all the hard work for you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-negotio-blue to-negotio-teal rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <div className="mt-6 text-center">
                <div className="bg-negotio-teal/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-negotio-teal" />
                </div>
                <h3 className="text-xl font-semibold text-negotio-blue mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
