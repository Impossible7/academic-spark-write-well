
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Law Student, Harvard",
    content: "The research paper I received was impeccably written and thoroughly researched. The citations were perfect, and the arguments were compelling. Academic Spark truly exceeded my expectations.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "PhD Candidate, Yale",
    content: "I was struggling with my dissertation before I found Academic Spark. Their team provided invaluable guidance and support throughout the process. Their attention to detail is remarkable.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "LLM Student, Oxford",
    content: "The moot court memorial prepared by Academic Spark was outstanding. The research was thorough, and the arguments were presented logically. This helped my team secure the top position.",
    rating: 5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Law Professor, Stanford",
    content: "I recommend Academic Spark to all my students who need additional support. Their work is consistently of high quality, well-researched, and always delivered on time.",
    rating: 4
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    // Auto-slide functionality
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex]);

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
          <p className="text-text-dark/80 text-lg">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-background-light p-8 rounded-xl shadow-md">
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-text-dark/70">{testimonial.role}</p>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'
                            }`}
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-text-dark/80 italic">"{testimonial.content}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-primary" />
          </button>
        </div>
        
        {/* Indicator Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
