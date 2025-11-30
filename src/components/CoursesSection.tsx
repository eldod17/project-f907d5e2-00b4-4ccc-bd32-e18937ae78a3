import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowLeft, BookOpen, Pen, MessageSquare, FileText } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "أساسيات اللغة العربية",
      level: "مبتدئ",
      levelColor: "bg-green-100 text-green-700",
      description: "تعلم القراءة والكتابة وأساسيات النحو والصرف للمبتدئين",
      duration: "١٢ أسبوع",
      students: "١٥٠",
      rating: "٤.٩",
      features: ["الحروف والحركات", "قواعد الإملاء", "القراءة الأساسية"],
    },
    {
      icon: Pen,
      title: "النحو والصرف المتقدم",
      level: "متقدم",
      levelColor: "bg-blue-100 text-blue-700",
      description: "إتقان قواعد النحو والصرف مع تمارين تطبيقية متنوعة",
      duration: "١٦ أسبوع",
      students: "٨٠",
      rating: "٤.٨",
      features: ["الإعراب الكامل", "تصريف الأفعال", "البلاغة العربية"],
      featured: true,
    },
    {
      icon: MessageSquare,
      title: "المحادثة والتواصل",
      level: "متوسط",
      levelColor: "bg-yellow-100 text-yellow-700",
      description: "تطوير مهارات المحادثة والتعبير الشفهي بطلاقة",
      duration: "٨ أسابيع",
      students: "٢٠٠",
      rating: "٤.٩",
      features: ["حوارات يومية", "العرض والتقديم", "النقاش والحوار"],
    },
    {
      icon: FileText,
      title: "الكتابة الإبداعية",
      level: "متقدم",
      levelColor: "bg-purple-100 text-purple-700",
      description: "فن كتابة المقالات والقصص والشعر بأسلوب أدبي راقي",
      duration: "١٠ أسابيع",
      students: "٦٠",
      rating: "٥.٠",
      features: ["كتابة المقال", "القصة القصيرة", "الشعر والنثر"],
    },
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-arabic opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-4 animate-fade-up">
            دوراتنا التعليمية
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            اختر الدورة <span className="text-gradient-gold">المناسبة لك</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            دورات متنوعة تناسب جميع المستويات والأعمار، مصممة بعناية 
            لتحقيق أفضل النتائج في أقصر وقت
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth animate-fade-up ${
                course.featured ? "ring-2 ring-secondary" : ""
              }`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {course.featured && (
                <div className="bg-gradient-gold text-primary-foreground text-center py-2 text-sm font-semibold">
                  الأكثر طلباً
                </div>
              )}

              <div className="p-6">
                {/* Icon & Level */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <course.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.levelColor}`}>
                    {course.level}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                <div className="flex items-center justify-between py-4 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 text-secondary fill-secondary" />
                    <span className="font-semibold text-foreground">{course.rating}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant={course.featured ? "gold" : "outline"}
                  className="w-full mt-4 group/btn"
                >
                  <span>سجل الآن</span>
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-up delay-700">
          <Button variant="default" size="lg">
            عرض جميع الدورات
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
