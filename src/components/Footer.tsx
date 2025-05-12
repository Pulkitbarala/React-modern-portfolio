
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-secondary/30 bg-background">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <a 
            href="#home" 
            className="font-bold text-xl text-primary mb-4"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Portfolio
          </a>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} All Rights Reserved
          </p>
          
          <p className="text-sm text-muted-foreground mt-2 flex items-center">
            Made with <Heart className="h-3 w-3 mx-1 text-red-500" /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
}
