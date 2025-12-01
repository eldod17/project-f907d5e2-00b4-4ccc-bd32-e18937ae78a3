import { useState, useEffect } from "react";
import { Star, Quote, ChevronRight, ChevronLeft } from "lucide-react";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "محمد أحمد",
      role: "طالب جامعي",
      avatar: "م",
      rating: 5,
      text: "تجربة رائعة مع الأستاذ! طريقة الشرح سهلة وممتعة، تحسن مستواي في اللغة العربية بشكل ملحوظ خلال شهرين فقط.",
    },
    {
      name: "سارة خالد",
      role: "معلمة ابتدائي",
      avatar: "س",
      rating: 5,
      text: "أنصح بهذه الدورات لكل من يريد إتقان اللغة العربية. المنهج منظم والتمارين متنوعة ومفيدة جداً.",
    },
    {
      name: "عبدالله محمود",
      role: "مهندس برمجيات",
      avatar: "ع",
      rating: 5,
      text: "على الرغم من انشغالي بالعمل، إلا أن مرونة المواعيد ساعدتني على الاستمرار في التعلم وتحقيق أهدافي.",
    },
    {
      name: "نورة عبدالرحمن",
      role: "طالبة ثانوي",
      avatar: "ن",
      rating: 5,
      text: "الأستاذ صبور جداً ويشرح بطريقة سلسة. حصلت على أعلى درجات الصف في مادة اللغة العربية بفضل الدورة.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-4 animate-fade-up">
            آراء طلابنا
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            ماذا يقول <span className="text-gradient-gold">طلابنا</span>؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            تجارب حقيقية من طلاب استفادوا من دوراتنا وحققوا تقدماً ملموساً في مستواهم اللغوي
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card animate-fade-up delay-300">
              <Quote className="w-12 h-12 text-secondary/20 mb-6" />
              
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 min-h-[100px]">
                {testimonials[activeIndex].text}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-xl font-bold">
                    {testimonials[activeIndex].avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-12 h-12 bg-card rounded-full shadow-soft flex items-center justify-center text-foreground hover:bg-muted transition-smooth"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-12 h-12 bg-card rounded-full shadow-soft flex items-center justify-center text-foreground hover:bg-muted transition-smooth"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  index === activeIndex
                    ? "bg-secondary w-8"
                    : "bg-muted hover:bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "+500", label: "طالب راضٍ" },
            { value: "4.9/5", label: "متوسط التقييم" },
            { value: "98%", label: "نسبة النجاح" },
            { value: "+1000", label: "تقييم إيجابي" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-6 bg-card rounded-2xl shadow-soft animate-fade-up`}
              style={{ animationDelay: `${(index + 5) * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
