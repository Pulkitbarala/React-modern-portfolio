import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { animateElements, textRevealAnimation } from '@/utils/animations';
import { Linkedin, Mail, Twitter } from 'lucide-react';
import { Github } from 'lucide-react'; // Fixed from GitHub to Github
import { socialLinks } from '@/data/portfolioData';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElements({
              elements: '#about .animate-item',
              delay: 100,
            });
            textRevealAnimation('#about .text-reveal-item', 200);
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
      id="about"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-background/95"
    >
      <div className="container mx-auto">
        <h2 className="section-title animate-item text-reveal-item opacity-0">About Me</h2>
        <p className="section-subtitle animate-item text-reveal-item opacity-0">
          Learn more about my background, passions, and the journey that brought me to data science
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* Image column */}
          <div className="flex justify-center md:justify-end animate-item text-reveal-item opacity-0">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/30 border-2 border-primary/30">
                <img src="/images/image.png" alt="Your Name" className="w-full h-full object-cover" />
              </div>
              {/* Background decoration */}
              <div className="absolute -z-10 -top-4 -left-4 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/20"></div>
            </div>
          </div>

          {/* Content column */}
          <div className="space-y-6">
            <div className="animate-item text-reveal-item opacity-0">
              <h3 className="text-2xl font-semibold mb-3">Who am I?</h3>
              <p className="text-muted-foreground">
                I'm an aspiring data scientist passionate about extracting insights from data and building 
                predictive models that solve real-world problems. With a strong foundation in statistics, 
                mathematics, and programming, I aim to bridge the gap between data and decision-making.
              </p>
            </div>

            <div className="animate-item text-reveal-item opacity-0">
              <h3 className="text-2xl font-semibold mb-3">My Approach</h3>
              <p className="text-muted-foreground">
                I believe in a holistic approach to data science that combines technical expertise with 
                domain knowledge and business acumen. My goal is to not just analyze data, but to tell 
                compelling stories that drive meaningful action and create value.
              </p>
            </div>

            <div className="animate-item text-reveal-item opacity-0">
              <h3 className="text-2xl font-semibold mb-3">Areas of Interest</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Machine Learning</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Deep Learning</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Natural Language Processing</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Computer Vision</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Time Series Analysis</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">Data Visualization</Badge>
              </div>
            </div>
            
            {/* Social links */}
            <div className="pt-4 animate-item text-reveal-item opacity-0">
              <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon === 'github' && <Github className="h-5 w-5" />}
                    {link.icon === 'linkedin' && <Linkedin className="h-5 w-5" />}
                    {link.icon === 'twitter' && <Twitter className="h-5 w-5" />}
                    {link.icon === 'mail' && <Mail className="h-5 w-5" />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
