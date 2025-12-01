import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <div className="transition-all duration-1000 ease-in-out transform hover:scale-[1.01]">
          <HeroSection />
        </div>
        
        {/* Decorative divider between Hero and About */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="transition-all duration-1000 ease-in-out transform hover:translate-y-[-10px]">
          <AboutSection />
        </div>
        
        {/* Decorative divider between About and Courses */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-secondary/10 font-bold select-none animate-fade-in">﹡</div>
          </div>
        </div>
        
        <div className="transition-all duration-1000 ease-in-out transform hover:translate-y-[-10px]">
          <CoursesSection />
        </div>
        
        {/* Decorative divider between Courses and Testimonials */}
        <div className="relative py-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <div className="transition-all duration-1000 ease-in-out transform hover:translate-y-[-10px]">
          <TestimonialsSection />
        </div>
        
        {/* Decorative divider between Testimonials and Contact */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-5xl text-secondary/10 font-bold select-none animate-pulse">﹡﹡</div>
          </div>
        </div>
        
        <div className="transition-all duration-1000 ease-in-out transform hover:translate-y-[-10px]">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;