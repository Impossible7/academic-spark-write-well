
const AboutHero = () => {
  return (
    <div className="bg-primary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Academic Spark</h1>
          <p className="text-xl opacity-90 mb-8">
            We're dedicated to helping students and scholars achieve academic excellence through professional writing services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center">
              <div className="bg-white/10 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-sm opacity-80">Years Experience</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white/10 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">250+</p>
                <p className="text-sm opacity-80">Expert Writers</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-white/10 rounded-full p-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold">5,000+</p>
                <p className="text-sm opacity-80">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
