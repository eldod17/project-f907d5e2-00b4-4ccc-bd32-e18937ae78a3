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
      <div className="absolute top-32 left-10 w-20 h-20 rounded-full bg-secondary/20 animate-float blur-xl hidden md:block" />
      <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-secondary/10 animate-float delay-300 blur-2xl hidden md:block" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Left Side */}
          <div className="text-center lg:text-right space-y-6 order-1 lg:order-1 animate-fade-up">
            {/* Arabic Calligraphy Style Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              <span className="text-gradient-gold">الفارس</span>
              <br />
              <span className="text-foreground">في اللغة العربية</span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3 animate-fade-up delay-100">
              <p className="text-xl md:text-2xl text-secondary font-semibold">
                هنا تبدأ حكايتك مع اللغة…
              </p>
              <p className="text-lg text-foreground/80">
                <span className="text-secondary font-semibold">فرهاً،</span>
                <span className="text-primary font-semibold"> تفوقاً،</span>
                <span className="text-secondary font-semibold"> ونجاحاً</span>
              </p>
            </div>

            {/* Marketing Message */}
            <div className="mt-6 p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-secondary/20 shadow-gold animate-fade-up delay-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-xl">
                  "
                </div>
                <div>
                  <p className="text-foreground italic leading-relaxed mb-3">
                    اللغة العربية ليست مجرد مادة دراسية، بل هي هويتنا وتراثنا وجسر التواصل مع ماضينا العريق. أؤمن بأن كل طالب لديه القدرة على الإبداع في اللغة العربية، ودوري هو إيقاظ هذه القدرة وتوجيهها نحو التميز والإبداع.
                  </p>
                  <p className="text-secondary font-bold text-lg">
                    مستر حسن
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-up delay-200">
              <Button variant="hero" size="lg" className="group">
                <span>احجز حصتك الآن</span>
                <BookOpen className="w-5 h-5 transition-transform group-hover:rotate-12" />
              </Button>
              <Button variant="hero-outline" size="lg" className="group">
                <span>اشتري كتابك</span>
              </Button>
            </div>
          </div>

          {/* Teacher Image - Right Side */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-2 animate-scale-in delay-300">
            <div className="relative">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-full blur-3xl" />
              
              {/* Image Container with Circle Border */}
              <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
                {/* Circular Border */}
                <div className="absolute inset-0 border-8 border-secondary/40 rounded-full" />
                
                {/* Image */}
                <img
                  src={teacherImage}
                  alt="مستر حسن حافظ"
                  className="w-full h-full object-cover rounded-full relative z-10 drop-shadow-2xl"
                />
              </div>

              {/* Decorative Arabic Letters - Animated */}
              <div className="absolute -top-6 -left-6 text-6xl text-secondary/30 font-bold animate-bounce hidden md:block" style={{ animationDelay: '0s' }}>ع</div>
              <div className="absolute -bottom-6 -right-6 text-6xl text-secondary/30 font-bold animate-bounce hidden md:block" style={{ animationDelay: '0.2s' }}>ب</div>
              <div className="absolute top-1/2 -left-12 text-5xl text-secondary/20 font-bold animate-bounce hidden md:block" style={{ animationDelay: '0.4s' }}>ي</div>
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
