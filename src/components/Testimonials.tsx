
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "NegotioAI saved me $350 on a 3-night stay in Manhattan! The process was so easy—just pasted the booking URL and got my discount the next day."
    },
    {
      name: "Michael Chen",
      location: "London, UK",
      rating: 5,
      text: "I was skeptical at first, but they managed to get me not just a lower rate but also free breakfast for my week-long business trip. Impressive service!"
    },
    {
      name: "Elena Rodriguez",
      location: "Barcelona, Spain",
      rating: 4,
      text: "Used this for booking our honeymoon suite. Got a 15% discount plus a complimentary bottle of champagne. Will definitely use again for future trips."
    }
  ];
  
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-negotio-lightBlue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-negotio-blue mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't take our word for it—hear from travelers who have already saved with NegotioAI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 relative border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center mt-4">
                <div className="bg-negotio-teal/20 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  <span className="text-negotio-teal font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-negotio-blue">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
