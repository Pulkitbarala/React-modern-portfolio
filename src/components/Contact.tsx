import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { animateElements } from '@/utils/animations';
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateElements({
              elements: '#contact .animate-item',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-background to-background/95"
    >
      <div className="container mx-auto">
        <h2 className="section-title animate-item opacity-0">Get In Touch</h2>
        <p className="section-subtitle animate-item opacity-0">
          I'm always open to new opportunities and collaborations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="animate-item opacity-0">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out if you're interested in working together or just want to connect!
              </p>
            </div>

            <Card className="animate-item opacity-0 border-secondary/30 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/30 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-item opacity-0 border-secondary/30 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/30 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-item opacity-0 border-secondary/30 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/30 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    San Francisco, CA
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-item opacity-0">
            <Card className="border-secondary/30 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-label="Your Name"
                        className="bg-secondary/20 border-secondary/30 placeholder:text-muted-foreground/70"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-label="Your Email"
                        className="bg-secondary/20 border-secondary/30 placeholder:text-muted-foreground/70"
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        aria-label="Subject"
                        className="bg-secondary/20 border-secondary/30 placeholder:text-muted-foreground/70"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        aria-label="Your Message"
                        className="min-h-[150px] bg-secondary/20 border-secondary/30 placeholder:text-muted-foreground/70"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="flex items-center justify-center"
                    >
                      {isSubmitting ? <Loader className="animate-spin mr-2" /> : <Send className="mr-2" />}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
