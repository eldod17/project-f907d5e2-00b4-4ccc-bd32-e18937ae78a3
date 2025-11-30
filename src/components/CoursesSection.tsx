import { Button } from "@/components/ui/button";
import { Clock, Users, Star, ArrowLeft, BookOpen, Pen, MessageSquare, FileText } from "lucide-react";
import courseImage from "@/assets/course.png";

const CoursesSection = () => {
  const courses = [
    {
      icon: BookOpen,
      title: "أساسيات اللغة العربية",
      subtitle: "كورس مجاني!",
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
      subtitle: "كورس مجاني!",
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
      subtitle: "كورس مجاني!",
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
      subtitle: "كورس مجاني!",
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
            دورات منصة الفارس التعليمية
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            اختر الدورة <span className="text-gradient-gold">المناسبة لك</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            دورات متنوعة تناسب جميع المستويات والأعمار، مصممة بعناية من قبل مستر حسن حافظ
            لتحقيق أفضل النتائج في أقصر وقت
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-smooth animate-fade-up flex flex-col"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              {/* Course Image - Top */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary to-primary">
                <img
                  src={courseImage}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4 text-right border-b-2 border-secondary pb-3">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-right flex-grow">
                  {course.description}
                </p>

                {/* Badges */}
                <div className="flex items-center gap-2 mb-6 flex-wrap justify-end">
                  <span className="inline-block bg-secondary/20 text-secondary px-3 py-1.5 rounded-full text-xs font-semibold border-2 border-secondary">
                    الدخول للكورس
                  </span>
                  <span className="inline-block bg-cyan-100 text-cyan-600 px-3 py-1.5 rounded-full text-xs font-semibold">
                    {course.subtitle}
                  </span>
                </div>

                {/* Course Info */}
                <div className="space-y-2 mb-6 text-right">
                  <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                    <span>{course.duration}</span>
                    <Clock className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                    <span>{course.students}</span>
                    <Users className="w-4 h-4 text-secondary" />
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold py-2.5"
                >
                  اشترك الآن!
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
