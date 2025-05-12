
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { animateElements } from '@/utils/animations';
import { educationData } from '@/data/portfolioData';

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElements({
              elements: '#education .animate-item',
              delay: 100,
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-background/95"
    >
      <div className="container mx-auto">
        <h2 className="section-title animate-item opacity-0">Education & Training</h2>
        <p className="section-subtitle animate-item opacity-0">
          My academic journey and professional development in the field of data science
        </p>

        <div className="max-w-4xl mx-auto mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-secondary/30 transform -translate-x-1/2 md:block hidden"></div>

          {/* Education items */}
          <div className="space-y-12 md:space-y-24 relative">
            {educationData.map((item, index) => (
              <div 
                key={item.id}
                className={`animate-item opacity-0 flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="md:w-1/2">
                  <Card className="overflow-hidden border border-secondary/30 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-sm text-primary font-medium">{item.duration}</span>
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <h4 className="text-muted-foreground">{item.institution}</h4>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot - only visible on md and up */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="h-5 w-5 rounded-full bg-primary"></div>
                </div>

                {/* Empty div for spacing on the other side */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
