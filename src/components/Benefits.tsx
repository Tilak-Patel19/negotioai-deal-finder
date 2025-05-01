
import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Save Time & Money",
      description: "No need to spend hours comparing prices or awkwardly haggling with hotel staff."
    },
    {
      title: "Expert Negotiation",
      description: "Our AI uses data-driven techniques that hotels respect and respond to positively."
    },
    {
      title: "Zero Upfront Cost",
      description: "You only pay if we successfully negotiate a better deal for you."
    },
    {
      title: "Better Than Public Rates",
      description: "Access rates that aren't published on booking websites or offered to the general public."
    },
    {
      title: "Maintain Privacy",
      description: "We handle all negotiations on your behalf without revealing personal details."
    },
    {
      title: "Personalized Offers",
      description: "Hotels often throw in extra perks like room upgrades when dealing with our service."
    }
  ];

  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-negotio-blue mb-4">Why Use NegotioAI?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped thousands of travelers save money on their hotel bookings without the hassle of negotiation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-negotio-teal/10 rounded-full p-2 mr-4">
                  <Check className="h-5 w-5 text-negotio-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-negotio-blue mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
