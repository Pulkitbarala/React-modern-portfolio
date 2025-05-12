
import { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { animateElements, animateProgressBars } from '@/utils/animations';
import { skillsData } from '@/data/portfolioData';

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<string>('technical');
  const initialRender = useRef(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            try {
              // Animate all items with the animate-item class
              animateElements({
                elements: '#skills .animate-item',
                delay: 100,
              });
              
              // Wait for elements to fade in, then animate progress bars
              setTimeout(() => {
                animateProgressBars('#skills', 300);
              }, 500);
            } catch (error) {
              console.error('Skills animation error:', error);
            }
            
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

  // Re-animate progress bars when tab changes
  useEffect(() => {
    // Skip first render to avoid duplicate animations
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    
    try {
      // First make sure all skill cards are visible with opacity 1
      const skillCards = document.querySelectorAll(`.tab-content-${activeTab} .skill-card`);
      skillCards.forEach((card) => {
        (card as HTMLElement).style.opacity = '1';
      });
      
      // Then animate the progress bars
      setTimeout(() => {
        animateProgressBars(`#${activeTab}-content`, 50);
      }, 50);
    } catch (error) {
      console.error('Tab change animation error:', error);
    }
  }, [activeTab]);

  const technicalSkills = skillsData.filter(skill => skill.category === 'technical');
  const toolsSkills = skillsData.filter(skill => skill.category === 'tools');
  const softSkills = skillsData.filter(skill => skill.category === 'soft');

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background/95 to-background"
    >
      <div className="container mx-auto">
        <h2 className="section-title animate-item opacity-0">My Skills</h2>
        <p className="section-subtitle animate-item opacity-0">
          I've developed expertise across various tools, technologies, and methodologies
        </p>

        <Tabs 
          defaultValue="technical" 
          className="w-full max-w-4xl mx-auto"
          onValueChange={handleTabChange}
        >
          <div className="flex justify-center mb-8 animate-item opacity-0">
            <TabsList className="bg-secondary/50">
              <TabsTrigger 
                value="technical" 
                className="data-[state=active]:bg-primary data-[state=active]:text-background transition-all duration-300"
              >
                Technical Skills
              </TabsTrigger>
              <TabsTrigger 
                value="tools" 
                className="data-[state=active]:bg-primary data-[state=active]:text-background transition-all duration-300"
              >
                Tools & Technologies
              </TabsTrigger>
              <TabsTrigger 
                value="soft" 
                className="data-[state=active]:bg-primary data-[state=active]:text-background transition-all duration-300"
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Technical Skills */}
          <TabsContent value="technical" id="technical-content" className="tab-content-technical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalSkills.map((skill) => (
                <Card key={skill.id} className="skill-card animate-item opacity-0 bg-card/50 backdrop-blur-sm border-secondary/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar-fill h-full bg-primary rounded-full"
                        data-width={`${skill.percentage}%`}
                        style={{ width: '0%' }} // Initial width, will be animated
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Tools & Technologies */}
          <TabsContent value="tools" id="tools-content" className="tab-content-tools">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolsSkills.map((skill) => (
                <Card key={skill.id} className="skill-card animate-item opacity-0 bg-card/50 backdrop-blur-sm border-secondary/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar-fill h-full bg-primary rounded-full"
                        data-width={`${skill.percentage}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Soft Skills */}
          <TabsContent value="soft" id="soft-content" className="tab-content-soft">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill) => (
                <Card key={skill.id} className="skill-card animate-item opacity-0 bg-card/50 backdrop-blur-sm border-secondary/50 hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{skill.name}</h3>
                      <span className="text-sm text-primary">{skill.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
                      <div 
                        className="progress-bar-fill h-full bg-primary rounded-full"
                        data-width={`${skill.percentage}%`}
                        style={{ width: '0%' }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
