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
            <div className="relative w-72 h-96">
              <svg
                viewBox="0 0 180 280"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Student Body - Professional Line Art Style */}
                <g 
                  stroke="hsl(var(--secondary))" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 2000,
                    strokeDashoffset: strokeDashoffset * 2,
                    transition: 'stroke-dashoffset 0.02s linear'
                  }}
                >
                  {/* Spiky Hair */}
                  <path d="M70 35 Q65 20 75 15 Q80 25 85 12 Q90 22 95 10 Q100 20 105 8 Q110 18 115 15 Q120 25 125 20 Q130 35 125 40" />
                  <path d="M68 38 Q60 30 70 25" />
                  <path d="M125 38 Q130 30 122 28" />
                  
                  {/* Head outline */}
                  <path d="M70 40 Q65 55 70 70 Q80 85 95 85 Q110 85 120 70 Q125 55 120 40" />
                  
                  {/* Left Ear */}
                  <path d="M68 50 Q62 50 62 58 Q62 66 68 66" />
                  
                  {/* Right Ear */}
                  <path d="M122 50 Q128 50 128 58 Q128 66 122 66" />
                  
                  {/* Face Details */}
                  <ellipse cx="82" cy="52" rx="4" ry="5" /> {/* Left eye */}
                  <ellipse cx="108" cy="52" rx="4" ry="5" /> {/* Right eye */}
                  <circle cx="83" cy="51" r="1.5" /> {/* Left pupil */}
                  <circle cx="109" cy="51" r="1.5" /> {/* Right pupil */}
                  <path d="M92 58 Q95 60 98 58" /> {/* Nose */}
                  <path d="M85 70 Q95 76 105 70" /> {/* Smile */}
                  
                  {/* Neck */}
                  <path d="M88 85 L88 95" />
                  <path d="M102 85 L102 95" />
                  
                  {/* T-Shirt Body */}
                  <path d="M60 100 Q70 95 95 95 Q120 95 130 100 L128 170 Q95 175 62 170 Z" />
                  
                  {/* T-Shirt Collar (V-neck) */}
                  <path d="M80 95 L95 110 L110 95" />
                  
                  {/* T-Shirt Sleeves */}
                  <path d="M60 100 Q50 105 45 125 Q50 130 60 125 Q65 115 60 100" />
                  <path d="M130 100 Q140 105 145 125 Q140 130 130 125 Q125 115 130 100" />
                  
                  {/* Left Arm (holding book) */}
                  <path d="M45 125 Q40 140 35 160 Q30 175 25 190" />
                  <path d="M60 125 Q55 145 50 165 Q45 180 40 195" />
                  
                  {/* Hand holding book */}
                  <path d="M25 190 Q20 195 22 200 Q25 205 30 200" />
                  <path d="M40 195 Q35 200 38 205 Q42 210 45 205" />
                  
                  {/* Book/Notebook */}
                  <rect x="15" y="195" width="40" height="55" rx="3" />
                  <line x1="35" y1="195" x2="35" y2="250" /> {/* Book spine */}
                  <line x1="20" y1="205" x2="32" y2="205" />
                  <line x1="20" y1="215" x2="32" y2="215" />
                  <line x1="20" y1="225" x2="30" y2="225" />
                  <line x1="38" y1="205" x2="50" y2="205" />
                  <line x1="38" y1="215" x2="50" y2="215" />
                  
                  {/* Right Arm (relaxed, holding strap) */}
                  <path d="M145 125 Q150 145 148 165" />
                  <path d="M130 125 Q135 150 132 170" />
                  
                  {/* Right Hand */}
                  <path d="M148 165 Q152 170 150 175 Q147 178 145 175" />
                  
                  {/* Backpack */}
                  <path d="M125 105 Q155 110 160 140 Q162 180 155 210 Q150 220 140 220 L138 170" />
                  <path d="M140 110 L145 110 Q155 115 158 135" /> {/* Strap */}
                  <path d="M145 175 Q155 175 158 180 Q160 190 155 195 Q150 198 145 195" /> {/* Pocket */}
                  <line x1="148" y1="182" x2="155" y2="182" />
                  
                  {/* Backpack top handle */}
                  <path d="M140 105 Q145 95 150 105" />
                  
                  {/* Pants/Shorts */}
                  <path d="M62 170 L58 220 Q60 225 70 225 L80 180" />
                  <path d="M128 170 L132 220 Q130 225 120 225 L110 180" />
                  <path d="M80 180 Q95 185 110 180" />
                  
                  {/* Legs */}
                  <path d="M65 225 L60 265" />
                  <path d="M75 225 L72 265" />
                  <path d="M115 225 L118 265" />
                  <path d="M125 225 L130 265" />
                  
                  {/* Shoes */}
                  <path d="M55 265 Q50 268 48 275 Q52 280 65 278 Q75 275 75 270 Q72 265 65 265" />
                  <path d="M115 265 Q110 268 108 275 Q112 280 125 278 Q135 275 135 270 Q132 265 125 265" />
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
