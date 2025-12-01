import { useEffect, useState } from "react";

const tips = [
  {
    question: "حاسس إنك تايه في النحو؟",
    answer: "ما تقلقش... إحنا ماشيين على خطة واضحة. من أول القواعد الأساسية... لحد أصعب المسائل الإعرابية."
  },
  {
    question: "حاسس إنك لوحدك؟",
    answer: "فيه متابعة مستمرة ورد على أسئلتك أول بأول. كل سؤال تقف فيه... هتلاقيني معاك لحد ما توصله بنفسك."
  },
  {
    question: "القواعد كتير؟",
    answer: "مش بنحفظ قواعد وخلاص! هنفهم كل قاعدة جاية منين، ونطبقها في الجمل. لما تفهم، الضغط هيروح."
  }
];

const TipsSection = () => {
  const [drawProgress, setDrawProgress] = useState(0);
  const [isDrawing, setIsDrawing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDrawProgress(prev => {
        if (isDrawing) {
          if (prev >= 100) {
            setTimeout(() => setIsDrawing(false), 1000);
            return 100;
          }
          return prev + 0.5;
        } else {
          if (prev <= 0) {
            setTimeout(() => setIsDrawing(true), 500);
            return 0;
          }
          return prev - 0.5;
        }
      });
    }, 20);

    return () => clearInterval(interval);
  }, [isDrawing]);

  const strokeDashoffset = 1000 - (drawProgress * 10);

  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Tips Cards */}
          <div className="flex-1 space-y-6">
            {/* Main Card */}
            <div className="bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-2xl p-8 relative">
              <div className="absolute -top-4 right-8 bg-secondary/20 p-2 rounded-lg">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                  <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                  <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                  <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary-foreground mb-3 text-center">
                {tips[0].question}
              </h3>
              <p className="text-primary-foreground/80 text-center leading-relaxed">
                {tips[0].answer}
              </p>
            </div>

            {/* Two Cards Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {tips.slice(1).map((tip, index) => (
                <div 
                  key={index}
                  className="bg-primary/40 backdrop-blur-sm border border-secondary/20 rounded-2xl p-6 relative hover:border-secondary/40 transition-all duration-300"
                >
                  <div className="absolute -top-4 right-6 bg-secondary/20 p-2 rounded-lg">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                      <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                      <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                      <div className="w-2 h-2 bg-secondary rounded-sm"></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-primary-foreground mb-2 text-center">
                    {tip.question}
                  </h3>
                  <p className="text-primary-foreground/80 text-sm text-center leading-relaxed">
                    {tip.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Title and Student SVG */}
          <div className="flex-1 flex flex-col items-center lg:items-end gap-8">
            {/* Title */}
            <div className="text-center lg:text-right relative">
              <div className="absolute -right-4 top-0 bottom-0 w-1 bg-secondary rounded-full hidden lg:block"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                خليك دايمًا سابق
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                بخطوة عن
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
                الامتحان.
              </h2>
            </div>

            {/* Animated Student SVG */}
            <div className="relative w-64 h-80">
              <svg
                viewBox="0 0 200 300"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Student Body - Line Art Style */}
                <g 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 1000,
                    strokeDashoffset: strokeDashoffset,
                    transition: 'stroke-dashoffset 0.02s linear'
                  }}
                >
                  {/* Head */}
                  <circle cx="100" cy="50" r="25" />
                  
                  {/* Hair */}
                  <path d="M75 45 Q75 25 100 25 Q125 25 125 45" />
                  <path d="M80 30 Q85 20 100 20 Q115 20 120 30" />
                  
                  {/* Face */}
                  <circle cx="90" cy="48" r="3" /> {/* Left eye */}
                  <circle cx="110" cy="48" r="3" /> {/* Right eye */}
                  <path d="M95 60 Q100 65 105 60" /> {/* Smile */}
                  
                  {/* Neck */}
                  <line x1="100" y1="75" x2="100" y2="90" />
                  
                  {/* Body/Shirt */}
                  <path d="M70 95 L100 90 L130 95 L125 160 L75 160 Z" />
                  
                  {/* Collar */}
                  <path d="M85 90 L100 105 L115 90" />
                  
                  {/* Left Arm holding book */}
                  <path d="M70 95 L50 130 L55 180" />
                  <path d="M50 130 L45 135 L50 180 L60 180 L55 135" />
                  
                  {/* Right Arm with backpack strap */}
                  <path d="M130 95 L150 120 L145 140" />
                  
                  {/* Backpack */}
                  <rect x="135" y="100" width="30" height="50" rx="5" />
                  <line x1="140" y1="110" x2="160" y2="110" />
                  <line x1="140" y1="120" x2="160" y2="120" />
                  
                  {/* Book in hand */}
                  <rect x="40" y="150" width="30" height="40" rx="2" />
                  <line x1="45" y1="160" x2="65" y2="160" />
                  <line x1="45" y1="170" x2="65" y2="170" />
                  <line x1="45" y1="180" x2="60" y2="180" />
                  
                  {/* Pants */}
                  <path d="M75 160 L70 240" />
                  <path d="M125 160 L130 240" />
                  <path d="M100 160 L100 200" />
                  <path d="M75 160 L100 165 L125 160" />
                  
                  {/* Shoes */}
                  <ellipse cx="65" cy="245" rx="12" ry="8" />
                  <ellipse cx="135" cy="245" rx="12" ry="8" />
                  
                  {/* Arabic letter floating - ع */}
                  <text x="160" y="70" fontSize="20" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1">ع</text>
                  
                  {/* Arabic letter floating - ب */}
                  <text x="40" y="100" fontSize="16" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1">ب</text>
                  
                  {/* Arabic letter floating - ن */}
                  <text x="170" y="150" fontSize="18" fill="none" stroke="hsl(var(--secondary))" strokeWidth="1">ن</text>
                </g>
              </svg>
              
              {/* Glow effect */}
              <div 
                className="absolute inset-0 blur-xl opacity-20"
                style={{
                  background: `radial-gradient(circle, hsl(var(--secondary)) ${drawProgress}%, transparent 70%)`
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-secondary/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 border border-secondary/10 rounded-full animate-pulse delay-300"></div>
    </section>
  );
};

export default TipsSection;
