import { Button } from "@/components/ui/button";
import { Play, Star, Users, BookOpen } from "lucide-react";
import teacherImage from "@/assets/teacher.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-arabic opacity-30" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-20 w-20 h-20 rounded-full bg-secondary/20 animate-float blur-xl" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-secondary/10 animate-float delay-300 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full animate-fade-up">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                +١٠ سنوات خبرة في التعليم
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up delay-100">
              تعلّم اللغة العربية
              <br />
              <span className="text-gradient-gold">بأسلوب احترافي</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200">
              رحلة تعليمية ممتعة ومميزة مع معلم متخصص في تدريس اللغة العربية 
              لجميع المستويات والأعمار
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Button variant="hero" size="lg" className="group">
                <span>ابدأ رحلة التعلم</span>
                <BookOpen className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </Button>
              <Button variant="hero-outline" size="lg" className="group">
                <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>شاهد الفيديو التعريفي</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 animate-fade-up delay-400">
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-secondary">+٥٠٠</div>
                <div className="text-primary-foreground/70 text-sm mt-1">طالب ناجح</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-secondary">+١٠٠٠</div>
                <div className="text-primary-foreground/70 text-sm mt-1">ساعة تدريس</div>
              </div>
              <div className="text-center lg:text-right">
                <div className="text-3xl md:text-4xl font-bold text-secondary">٤.٩</div>
                <div className="text-primary-foreground/70 text-sm mt-1">تقييم الطلاب</div>
              </div>
            </div>
          </div>

          {/* Teacher Image */}
          <div className="relative flex justify-center lg:justify-start animate-scale-in delay-200">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-secondary/30 blur-3xl rounded-full scale-75" />
              
              {/* Image Container */}
              <div className="relative">
                <img
                  src={teacherImage}
                  alt="معلم اللغة العربية"
                  className="w-full max-w-md lg:max-w-lg h-auto relative z-10 drop-shadow-2xl"
                />
                
                {/* Floating Card */}
                <div className="absolute -left-4 top-1/4 bg-card p-4 rounded-2xl shadow-card animate-float delay-500">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">+٥٠٠</div>
                      <div className="text-xs text-muted-foreground">طالب نشط</div>
                    </div>
                  </div>
                </div>

                {/* Rating Card */}
                <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-2xl shadow-card animate-float delay-700">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">تقييم ممتاز</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
