import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "تم إرسال رسالتك بنجاح!",
      description: "سنتواصل معك في أقرب وقت ممكن.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      value: "+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧",
      description: "متاح ٢٤/٧",
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@arabic-teacher.com",
      description: "رد خلال ٢٤ ساعة",
    },
    {
      icon: MessageCircle,
      title: "واتساب",
      value: "+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧",
      description: "تواصل فوري",
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      value: "٨ ص - ١٠ م",
      description: "السبت - الخميس",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-arabic opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold mb-4 animate-fade-up">
            تواصل مع منصة الفارس
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-up delay-100">
            ابدأ رحلتك <span className="text-gradient-gold">التعليمية مع مستر حسن حافظ</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            لا تتردد في التواصل معنا للاستفسار عن دورات منصة الفارس أو حجز جلسة تعريفية مجانية مع مستر حسن حافظ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 md:p-10 shadow-card animate-fade-up delay-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              أرسل لنا رسالة
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    required
                    className="bg-background border-border focus:border-secondary transition-smooth"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    رقم الجوال
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="٠٥X XXX XXXX"
                    required
                    className="bg-background border-border focus:border-secondary transition-smooth"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="bg-background border-border focus:border-secondary transition-smooth"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رسالتك
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب رسالتك هنا..."
                  rows={5}
                  required
                  className="bg-background border-border focus:border-secondary transition-smooth resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    جاري الإرسال...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </span>
                )}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-4">
                {["رد سريع خلال ٢٤ ساعة", "استشارة مجانية", "دعم فني مستمر", "خصومات حصرية"].map(
                  (benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className={`bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-smooth cursor-pointer group animate-fade-up`}
                style={{ animationDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-primary font-medium">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl p-6 shadow-soft animate-fade-up delay-800">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-secondary" />
                <h4 className="font-semibold text-foreground">موقعنا</h4>
              </div>
              <div className="bg-muted rounded-xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                  <p className="text-muted-foreground">المملكة العربية السعودية</p>
                  <p className="text-sm text-muted-foreground">دروس أونلاين متاحة عالمياً</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
