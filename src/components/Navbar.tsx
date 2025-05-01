
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <span className="text-negotio-blue text-2xl font-bold">Negotio<span className="text-negotio-teal">AI</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-gray-600 hover:text-negotio-teal transition-colors">How it works</a>
          <a href="#benefits" className="text-gray-600 hover:text-negotio-teal transition-colors">Benefits</a>
          <a href="#testimonials" className="text-gray-600 hover:text-negotio-teal transition-colors">Testimonials</a>
        </div>
        
        <div>
          <Button className="bg-gradient-to-r from-negotio-blue to-negotio-teal text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
