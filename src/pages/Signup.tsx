import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, User, Phone, Sparkles, BookOpen, Award, Users } from "lucide-react";
import teacherImage from "@/assets/teacher.png";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "خطأ",
        description: "كلمتا المرور غير متطابقتين",
        variant: "destructive",
      });
      return;
    }

    if (!agreedToTerms) {
      toast({
        title: "خطأ",
        description: "يرجى الموافقة على الشروط والأحكام",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate signup (no backend)
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "تم إنشاء الحساب بنجاح! 🎉",
        description: "مرحباً بك في عائلتنا التعليمية",
      });
      navigate("/");
    }, 1500);
  };

  const features = [
    { icon: BookOpen, text: "دروس تفاعلية متميزة" },
    { icon: Award, text: "شهادات معتمدة" },
    { icon: Users, text: "مجتمع تعليمي نشط" },
  ];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" dir="rtl">
      {/* Left Side - Banner with Teacher Image */}
      <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary-dark min-h-[350px] lg:min-h-screen">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }} />
        </div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
          {/* Teacher Image with Interactive Effects */}
          <div className="relative mb-6 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/40 to-accent/40 rounded-full blur-3xl scale-125 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative">
              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute -top-4 left-1/2 w-3 h-3 bg-gold rounded-full" />
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-accent rounded-full" />
                <div className="absolute -bottom-4 left-1/2 w-3 h-3 bg-secondary rounded-full" />
              </div>
              
              <div className="w-44 h-44 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-gold/60 shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                <img 
                  src={teacherImage} 
                  alt="المعلم" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-gold animate-pulse" />
            <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-accent animate-pulse delay-500" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            انضم إلى رحلة التعلم! ✨
          </h2>
          <p className="text-white/80 text-lg max-w-md leading-relaxed mb-8">
            أنشئ حسابك الآن وابدأ رحلتك في تعلم اللغة العربية مع أفضل المعلمين والمناهج التعليمية المتطورة.
          </p>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 transform hover:translate-x-2 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-6 h-6 text-gold" />
                <span className="text-white font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-8 bg-background">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-gold/80 shadow-lg mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">إنشاء حساب جديد</h1>
            <p className="text-muted-foreground">أدخل بياناتك للانضمام إلى منصتنا</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">الاسم الكامل</Label>
              <div className="relative group">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="أدخل اسمك الكامل"
                  value={formData.name}
                  onChange={handleChange}
                  className="pr-10 h-12 bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">البريد الإلكتروني</Label>
              <div className="relative group">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="pr-10 h-12 bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">رقم الهاتف</Label>
              <div className="relative group">
                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="01xxxxxxxxx"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pr-10 h-12 bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">كلمة المرور</Label>
                <div className="relative group">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="pr-10 pl-10 h-12 bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-foreground">تأكيد كلمة المرور</Label>
                <div className="relative group">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pr-10 pl-10 h-12 bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input 
                type="checkbox" 
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-5 h-5 mt-0.5 rounded border-border text-primary focus:ring-primary cursor-pointer" 
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                أوافق على{" "}
                <a href="#" className="text-primary hover:text-primary-dark transition-colors font-medium">
                  الشروط والأحكام
                </a>{" "}
                و{" "}
                <a href="#" className="text-primary hover:text-primary-dark transition-colors font-medium">
                  سياسة الخصوصية
                </a>
              </label>
            </div>

            <Button
              type="submit"
              variant="gold"
              className="w-full h-12 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  جاري إنشاء الحساب...
                </div>
              ) : (
                "إنشاء الحساب"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">أو التسجيل عبر</span>
            </div>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-12 hover:bg-muted/50 transition-colors">
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="h-12 hover:bg-muted/50 transition-colors">
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </Button>
          </div>

          {/* Login Link */}
          <p className="text-center text-muted-foreground">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" className="text-primary hover:text-primary-dark font-semibold transition-colors">
              تسجيل الدخول
            </Link>
          </p>

          {/* Back to Home */}
          <div className="text-center">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← العودة إلى الصفحة الرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
