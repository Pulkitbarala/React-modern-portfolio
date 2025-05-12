
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { textRevealAnimation, animateBackgroundGradient, addFloatingAnimation } from '@/utils/animations';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (sectionRef.current) {
      // Call the animation function with a delay
      try {
        setTimeout(() => {
          textRevealAnimation('#hero-text', 300);
        }, 100);
        
        // Animate background gradient
        if (backgroundRef.current) {
          animateBackgroundGradient(backgroundRef.current);
        }
        
        // Add floating animation to the scroll indicator
        if (scrollIndicatorRef.current) {
          addFloatingAnimation(scrollIndicatorRef.current, 'light');
        }
      } catch (error) {
        console.error('Animation error:', error);
      }
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background gradient */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary opacity-80"
      ></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floating ${Math.random() * 3 + 5}s ease-in-out ${Math.random() * 2}s infinite`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto" id="hero-text">
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-4 text-reveal-item opacity-0">
            Hello, I'm
          </h2>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-reveal-item opacity-0">
            <span className="text-foreground">Your Name</span>
          </h1>
          
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-reveal-item opacity-0">
            <span className="text-primary">Aspiring Data Scientist</span>
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto text-reveal-item opacity-0">
            Transforming raw data into meaningful insights and powerful predictive models. Dedicated to solving real-world problems through data science.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-reveal-item opacity-0">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 transition-all duration-300 hover:shadow-lg"
              onClick={scrollToAbout}
            >
              About Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-lg"
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
      
      {/* Add extra style for floating animation */}
      <style jsx global>{`
        @keyframes floating {
          0% { transform: translate(0, 0); }
          50% { transform: translate(0, -10px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </section>
  );
}
