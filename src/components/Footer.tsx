import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "عن المعلم" },
    { href: "#courses", label: "الدورات" },
    { href: "#testimonials", label: "آراء الطلاب" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Instagram, href: "#", label: "انستغرام" },
    { icon: Youtube, href: "#", label: "يوتيوب" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-bold text-secondary">🐎</span>
              <span className="text-2xl font-bold">منصة الفارس</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              من��ة الفارس التعليمية متخصصة في تعليم اللغة العربية لجميع المستويات والأعمار،
              نقدم تجربة تعليمية فريدة تجمع بين الأصالة والحداثة مع مستر حسن حافظ.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-smooth"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>info@arabic-teacher.com</li>
              <li>+966 50 123 4567</li>
              <li>المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} منصة الفارس. جميع الحقوق محفوظة.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            صُنع بـ
            <Heart className="w-4 h-4 text-secondary fill-secondary" />
            لنشر اللغة العربية مع مستر حسن حافظ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
