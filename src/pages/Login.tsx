import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock, Sparkles } from "lucide-react";
import teacherImage from "@/assets/teacher.png";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login (no backend)
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "تم تسجيل الدخول بنجاح! ✨",
        description: "مرحباً بك في منصتنا التعليمية",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row" dir="rtl">
      {/* Left Side - Banner with Teacher Image */}
      <div className="lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary-dark min-h-[300px] lg:min-h-screen">
        {/* Animated Background Patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-secondary/30 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        </div>
        
        {/* Floating Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-gold/20 animate-float"
              style={{
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animationDelay: `${i * 0.5}s`,
                fontSize: `${Math.random() * 30 + 20}px`,
              }}
            >
              ✦
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
          {/* Teacher Image with Glow Effect */}
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gold/30 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />
            <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-gold/50 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src={teacherImage} 
                alt="المعلم" 
                className="w-full h-full object-cover"
              />
            </div>
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-gold animate-pulse" />
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            مرحباً بعودتك! 👋
          </h2>
          <p className="text-white/80 text-lg max-w-md leading-relaxed">
            سعداء برؤيتك مجدداً في منصتنا التعليمية. استمر في رحلة التعلم واكتشف المزيد من المحتوى المميز.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">+500</div>
              <div className="text-white/70 text-sm">طالب نشط</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold">+50</div>
              <div className="text-white/70 text-sm">درس تفاعلي</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="lg:w-1/2 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark shadow-lg mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">تسجيل الدخول</h1>
            <p className="text-muted-foreground">أدخل بياناتك للوصول إلى حسابك</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">البريد الإلكتروني</Label>
              <div className="relative group">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pr-10 h-12 bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">كلمة المرور</Label>
              <div className="relative group">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary focus:ring-primary" />
                <span className="text-muted-foreground">تذكرني</span>
              </label>
              <a href="#" className="text-primary hover:text-primary-dark transition-colors font-medium">
                نسيت كلمة المرور؟
              </a>
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
                  جاري تسجيل الدخول...
                </div>
              ) : (
                "تسجيل الدخول"
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">أو</span>
            </div>
          </div>

          {/* Social Login */}
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

          {/* Sign Up Link */}
          <p className="text-center text-muted-foreground">
            ليس لديك حساب؟{" "}
            <Link to="/signup" className="text-primary hover:text-primary-dark font-semibold transition-colors">
              إنشاء حساب جديد
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

export default Login;
