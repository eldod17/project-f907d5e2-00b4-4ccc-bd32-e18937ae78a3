import { GraduationCap, Award, BookOpen, Heart } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "خبرة أكاديمية",
      description: "حاصل على شهادات متخصصة في تعليم اللغة العربية",
    },
    {
      icon: Award,
      title: "منهجية حديثة",
      description: "استخدام أحدث الأساليب التعليمية التفاعلية",
    },
    {
      icon: BookOpen,
      title: "مناهج متنوعة",
      description: "دورات تناسب جميع المستويات من المبتدئ للمتقدم",
    },
    {
      icon: Heart,
      title: "شغف بالتعليم",
      description: "حب حقيقي لنقل المعرفة وتطوير المهارات",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-4 animate-fade-up">
            تعرف على مستر حسن حافظ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            لماذا تختار <span className="text-gradient-gold">منصة الفارس</span>؟
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            نقدم لك تجربة تعليمية فريدة تجمع بين الأصالة والحداثة، 
            مع التركيز على احتياجات كل طالب بشكل فردي مع مستر حسن حافظ
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group bg-card p-8 rounded-2xl shadow-card hover:shadow-hover transition-all duration-500 cursor-pointer animate-fade-up transform hover:-translate-y-2 hover:scale-105`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <feature.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-1">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                رسالتنا في التعليم
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                نؤمن بأن تعلم اللغة العربية ليس مجرد حفظ قواعد، بل هو رحلة 
                اكتشاف للثقافة والتراث العربي العريق. نسعى لجعل كل طالب 
                يتقن اللغة بثقة ويحب استخدامها في حياته اليومية.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                مع خبرة تمتد لأكثر من عشر سنوات في مجال التعليم، نقدم 
                منهجية تعليمية متكاملة تراعي الفروق الفردية وتحقق 
                أهداف كل طالب.
              </p>
              
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 pt-6">
                {[
                  { value: "+10", label: "سنوات خبرة" },
                  { value: "+500", label: "طالب تخرج" },
                  { value: "98%", label: "نسبة الرضا" },
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <div className="text-3xl font-bold text-primary animate-count-up">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Arabic Calligraphy */}
            <div className="relative flex items-center justify-center">
              <div className="text-[120px] md:text-[180px] font-bold text-primary/5 select-none animate-pulse-slow">
                ع
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-8xl font-bold text-secondary/20 animate-float">
                    العربية
                  </div>
                  <div className="text-2xl text-muted-foreground/50 mt-4 animate-fade-in">
                    لغة الضاد
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;