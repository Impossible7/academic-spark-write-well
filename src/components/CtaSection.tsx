
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <div className="py-16 md:py-24 bg-background-light">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Excel in Your Academic Journey?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Get professional academic writing support tailored to your specific needs. Our team of expert writers is ready to help you achieve academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-accent text-lg px-8 py-3">Start Your Project</Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg px-8 py-3">
                Contact Us Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
