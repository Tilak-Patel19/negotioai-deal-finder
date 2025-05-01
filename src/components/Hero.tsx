
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-white to-negotio-lightBlue">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-negotio-blue leading-tight">
              <span className="text-negotio-teal">Save money</span> on hotels without haggling
            </h1>
            <p className="text-xl text-gray-600">
              We negotiate discounts on your behalf. Simply paste a booking link, and our AI handles the rest!
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="#deal-finder" 
                className="bg-gradient-to-r from-negotio-blue to-negotio-teal text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transition-all inline-flex items-center"
              >
                Find Your Deal
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2">✓</div>
                <span>No signup required</span>
              </div>
              <div className="flex items-center">
                <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2">✓</div>
                <span>Free to use</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-negotio-teal/10 rounded-full animate-float"></div>
              <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-negotio-blue/10 rounded-full animate-float" style={{animationDelay: "2s"}}></div>
              
              <div className="relative bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-100 w-3/4 rounded"></div>
                    <div className="h-24 bg-negotio-lightBlue rounded flex items-center justify-center">
                      <span className="text-negotio-blue font-medium">Hotel booking preview</span>
                    </div>
                    <div className="h-10 bg-negotio-teal text-white flex items-center justify-center rounded">
                      <span className="font-medium">20% discount applied!</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="h-6 bg-gray-100 w-1/3 rounded"></div>
                      <div className="h-6 bg-gray-100 w-1/3 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
