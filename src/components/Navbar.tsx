import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "الرئيسية" },
    { href: "#about", label: "عن المعلم" },
    { href: "#courses", label: "الدورات" },
    { href: "#testimonials", label: "آراء الطلاب" },
    { href: "#contact", label: "تواصل معنا" },
  ];

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between h-20 px-6 rounded-b-3xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-secondary/20"
            : "bg-white/80 backdrop-blur-md border-b border-secondary/20"
        }`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <span className="text-3xl font-bold text-secondary group-hover:scale-110 transition-transform"></span>
            <span className="text-2xl font-bold text-foreground group-hover:text-secondary transition-smooth">منصة الفارس</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-foreground font-medium transition-smooth relative group ${
                  index === 0 ? "text-secondary" : "hover:text-secondary"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-2 right-0 h-1 bg-secondary transition-all duration-300 ${
                  index === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-foreground font-medium hover:text-secondary transition-smooth">
              تسجيل الدخول
            </Link>
            <Button 
              variant="outline" 
              size="default"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg px-6"
              asChild
            >
              <Link to="/signup">إنشاء حساب</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-b-3xl p-4 shadow-lg animate-fade-up">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={`block py-3 px-4 text-foreground hover:text-secondary hover:bg-secondary/10 rounded-lg font-medium transition-smooth animate-fade-up`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-secondary/20">
              <Link 
                to="/login" 
                className="text-foreground font-medium hover:text-secondary transition-smooth py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                تسجيل الدخول
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg w-full"
                asChild
              >
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>إنشاء حساب</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
