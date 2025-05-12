
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { animateElements, hoverAnimation, hoverOutAnimation } from '@/utils/animations';
import { projectsData } from '@/data/portfolioData';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>('all');
  const [projects, setProjects] = useState(projectsData);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            try {
              animateElements({
                elements: '#projects .animate-item',
                delay: 100,
                translateY: [30, 0],
              });
            } catch (error) {
              console.error('Projects animation error:', error);
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

  // Get unique tags for filter
  const allTags = Array.from(
    new Set(projectsData.flatMap(project => project.tags))
  );

  // Handle filter change
  const handleFilterChange = (tag: string) => {
    setFilter(tag);
    if (tag === 'all') {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => 
        project.tags.includes(tag)
      );
      setProjects(filtered);
    }
    
    // Re-animate the filtered items
    setTimeout(() => {
      animateElements({
        elements: '#projects .project-card',
        delay: 50,
        translateY: [20, 0],
        duration: 600
      });
    }, 100);
  };

  // Handle hover animations
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    try {
      hoverAnimation(event.currentTarget, 1.03);
    } catch (error) {
      console.error('Hover animation error:', error);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    try {
      hoverOutAnimation(event.currentTarget);
    } catch (error) {
      console.error('Hover out animation error:', error);
    }
  };

  // Project image placeholders
  const projectImages = [
    "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
    "https://source.unsplash.com/photo-1461749280684-dccba630e2f6",
    "https://source.unsplash.com/photo-1581091226825-a6a2a5aee158",
    "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    "https://source.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background/95 to-background"
    >
      <div className="container mx-auto">
        <h2 className="section-title animate-item opacity-0">My Projects</h2>
        <p className="section-subtitle animate-item opacity-0">
          Check out some of my recent data science projects and applications
        </p>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-item opacity-0">
          <Button
            variant={filter === 'all' ? "default" : "outline"}
            size="sm"
            onClick={() => handleFilterChange('all')}
            className={`transition-all duration-300 ${filter === 'all' ? 'bg-primary text-background' : 'text-muted-foreground hover:text-foreground'}`}
          >
            All
          </Button>
          
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={filter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => handleFilterChange(tag)}
              className={`transition-all duration-300 ${filter === tag ? 'bg-primary text-background' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="animate-item opacity-0 project-card"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                animationDelay: `${index * 100}ms`,
                transition: 'all 0.3s ease'
              }}
            >
              <Card className="h-full border border-secondary/30 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video w-full overflow-hidden bg-secondary/30 relative">
                  <img 
                    src={projectImages[index % projectImages.length]} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <h4 className="text-white font-medium">{project.title}</h4>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="outline"
                        className="bg-secondary/30 text-muted-foreground border-secondary/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2 p-6 pt-0">
                  {project.demoLink && (
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex items-center gap-1 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    </Button>
                  )}
                  
                  {project.codeLink && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex items-center gap-1 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span>Code</span>
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
