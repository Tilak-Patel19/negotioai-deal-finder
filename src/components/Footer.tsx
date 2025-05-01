
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-negotio-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              Negotio<span className="text-negotio-teal">AI</span>
            </div>
            <p className="text-gray-300 max-w-sm">
              Your personal AI assistant for negotiating better hotel deals. 
              Save money without the hassle of bargaining.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-negotio-teal transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-negotio-teal transition-colors">How it Works</a></li>
              <li><a href="#benefits" className="text-gray-300 hover:text-negotio-teal transition-colors">Benefits</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-negotio-teal transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-negotio-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-negotio-teal transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-negotio-teal transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} NegotioAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Made with ❤️ for savvy travelers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
