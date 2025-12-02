import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import courseImage from "@/assets/course.png";

const CoursesSection = () => {
  const courses = [
    {
      id: 240,
      title: "أساسيات اللغة العربية",
      subtitle: "تعلم القراءة والكتابة وأساسيات النحو والصرف للمبتدئين",
      image: courseImage,
      price: "50.00",
      date: "الجمعة، ٢٨ نوفمبر ٢٠٢٥",
      time: "03:00 مساءً",
      accentColor: "teal",
    },
    {
      id: 241,
      title: "النحو والصرف المتقدم",
      subtitle: "إتقان قواعد النحو والصرف مع تمارين تطبيقية متنوعة",
      image: courseImage,
      price: "75.00",
      date: "الخميس، ٢٧ نوفمبر ٢٠٢٥",
      time: "04:00 مساءً",
      accentColor: "sky",
    },
    {
      id: 242,
      title: "المحادثة والتواصل",
      subtitle: "تطوير مهارات المحادثة والتعبير الشفهي بطلاقة",
      image: courseImage,
      price: "60.00",
      date: "الأربعاء، ٢٦ نوفمبر ٢٠٢٥",
      time: "05:00 مساءً",
      accentColor: "teal",
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
          {courses.map((course, index) => {
            const accentClasses = {
              teal: {
                border: "border-teal-400 dark:border-teal-600",
                accent: "bg-teal-500",
                hover: "hover:bg-teal-500",
                button: "from-teal-500 to-sky-500",
              },
              sky: {
                border: "border-sky-400 dark:border-sky-600",
                accent: "bg-sky-500",
                hover: "hover:bg-sky-500",
                button: "from-sky-500 to-cyan-500",
              },
            };
            const colors = accentClasses[course.accentColor] || accentClasses.teal;

            return (
              <div key={course.id} className="group">
                <div className="rounded-md overflow-hidden w-full">
                  <img
                    src={course.image}
                    alt="course"
                    className="w-full transform text-center group-hover:scale-110 group-hover:brightness-110 group-hover:saturate-150 transition-all duration-300"
                  />
                </div>
                <div className={`px-5 -mt-10 relative z-10`}>
                  <div className={`rounded-md w-full bg-slate-50 dark:bg-slate-900 text-foreground px-4 py-6 shadow-lg hover:shadow-xl group-hover:shadow-lg transition-all duration-300 border ${colors.border}`}>
                    <div className="flex flex-col space-y-6">
                      {/* Header Section */}
                      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                        <div className="flex flex-col space-y-4 w-full">
                          <div className="font-bold text-lg text-right pr-3">
                            {course.title}
                          </div>
                          <div className={`h-1 rounded-lg transition-all duration-300 ${colors.accent} w-12`} />
                          <div className="text-muted-foreground text-sm text-right">
                            <span>{course.subtitle}</span>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-3 shrink-0">
                          <a
                            href={`/course/${course.id}`}
                            className={`border-2 ${colors.accent} rounded-full px-3 py-1 ${colors.hover} text-white transition-all duration-300 text-sm font-semibold text-center`}
                          >
                            الدخول للكورس
                          </a>
                          <a
                            href={`/course/${course.id}/subscribe/previous_invoices/`}
                            className={`bg-gradient-to-r ${colors.button} text-white rounded-full px-3 py-1 flex justify-center items-center text-sm font-semibold`}
                          >
                            اشترك الآن !
                          </a>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="flex-col flex space-y-3">
                        <div className="px-10">
                          <div className="h-px bg-slate-300 dark:bg-slate-700 transition-all duration-300" />
                        </div>

                        {/* Footer Section with Price and Date */}
                        <div className="w-full font-semibold text-sm flex flex-col-reverse sm:flex-row space-y-4 space-y-reverse sm:space-y-0 sm:space-x-reverse sm:space-x-4 justify-between items-start sm:items-center">
                          <div>
                            <div className={`${colors.accent} text-slate-100 rounded-lg py-1 px-3 space-x-2 space-x-reverse`}>
                              <span className="bg-slate-200 dark:bg-slate-800 text-foreground px-2 py-px rounded-md transition-all duration-300">
                                {course.price}
                              </span>
                              <span>جنيهًا</span>
                            </div>
                          </div>
                          <div className="flex sm:justify-end sm:items-start flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-1 items-start sm:space-x-reverse text-muted-foreground text-xs flex-wrap">
                            <div className="flex flex-col space-y-2 shrink-0">
                              <div className="flex justify-between space-x-1 space-x-reverse">
                                <span className="flex items-center">{course.date}</span>
                                <span className="font-normal flex items-center ml-1">
                                  <Clock className="w-4 h-4" />
                                </span>
                              </div>
                              <div className="flex justify-between space-x-1 space-x-reverse">
                                <span className="flex items-center">{course.time}</span>
                                <span className="font-normal flex items-center ml-1">
                                  <Clock className="w-4 h-4" />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
