
// Simple vanilla JS animations

interface AnimateElementsProps {
  elements: string;
  delay?: number;
  duration?: number;
  opacity?: [number, number];
  translateY?: [number, number];
  translateX?: [number, number];
  scale?: [number, number];
}

/**
 * Animate multiple elements with fade and transform effects
 */
export const animateElements = ({
  elements,
  delay = 0,
  duration = 800,
  opacity = [0, 1],
  translateY = [20, 0],
  translateX = [0, 0],
  scale = [1, 1],
}: AnimateElementsProps) => {
  try {
    const elementsToAnimate = document.querySelectorAll(elements);
    if (!elementsToAnimate.length) return;

    elementsToAnimate.forEach((element, index) => {
      const el = element as HTMLElement;
      // Set initial styles
      el.style.opacity = String(opacity[0]);
      el.style.transform = `translate(${translateX[0]}px, ${translateY[0]}px) scale(${scale[0]})`;
      el.style.transition = `opacity ${duration}ms, transform ${duration}ms`;
      el.style.transitionTimingFunction = 'cubic-bezier(0.25, 0.1, 0.25, 1.0)';
      
      // Apply staggered delay
      const staggeredDelay = delay + (index * 100);
      
      // Animate after delay
      setTimeout(() => {
        el.style.opacity = String(opacity[1]);
        el.style.transform = `translate(${translateX[1]}px, ${translateY[1]}px) scale(${scale[1]})`;
      }, staggeredDelay);
    });
  } catch (error) {
    console.error('Animation error:', error);
  }
};

/**
 * Animate progress bars to their target width
 */
export const animateProgressBars = (selector: string, delay = 300) => {
  try {
    const progressBars = document.querySelectorAll(`${selector} .progress-bar-fill`);
    if (!progressBars.length) return;

    progressBars.forEach((bar, index) => {
      const el = bar as HTMLElement;
      const targetWidth = el.getAttribute('data-width') || '0%';
      
      // Set initial styles
      el.style.width = '0%';
      el.style.transition = `width 1000ms cubic-bezier(0.42, 0, 0.58, 1)`;
      
      // Apply staggered delay
      const staggeredDelay = delay + (index * 100);
      
      // Animate after delay
      setTimeout(() => {
        el.style.width = targetWidth;
      }, staggeredDelay);
    });
  } catch (error) {
    console.error('Progress bar animation error:', error);
  }
};

/**
 * Initialize intersection observer for scroll animations
 */
export const initScrollAnimations = () => {
  try {
    const sections = document.querySelectorAll('.section-animate');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  } catch (error) {
    console.error('Scroll animation error:', error);
  }
};

/**
 * Text reveal animation
 */
export const textRevealAnimation = (selector: string, delay = 0) => {
  try {
    const elements = document.querySelectorAll(`${selector} .text-reveal-item`);
    if (!elements.length) return;
    
    elements.forEach((element, index) => {
      const el = element as HTMLElement;
      
      // Set initial styles
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 1400ms, transform 1400ms';
      el.style.transitionTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)';
      
      // Apply staggered delay based on element index
      const staggeredDelay = delay + (index * 150);
      
      // Animate after delay
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, staggeredDelay);
    });
  } catch (error) {
    console.error('Text reveal animation error:', error);
    return null;
  }
};

/**
 * Hover animation
 */
export const hoverAnimation = (element: HTMLElement, scale = 1.05) => {
  try {
    element.style.transition = 'transform 200ms ease-out';
    element.style.transform = `scale(${scale})`;
  } catch (error) {
    console.error('Hover animation error:', error);
  }
};

/**
 * Hover out animation
 */
export const hoverOutAnimation = (element: HTMLElement) => {
  try {
    element.style.transition = 'transform 200ms ease-out';
    element.style.transform = 'scale(1)';
  } catch (error) {
    console.error('Hover out animation error:', error);
  }
};

/**
 * Page transition animation
 */
export const pageTransition = () => {
  try {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
    overlay.style.zIndex = '9999';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 400ms ease';
    
    document.body.appendChild(overlay);
    
    // Trigger animation
    setTimeout(() => {
      overlay.style.opacity = '1';
    }, 10);
    
    // Remove overlay after animation
    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 400);
    }, 600);
  } catch (error) {
    console.error('Page transition animation error:', error);
  }
};

/**
 * Floating animation for elements
 */
export const addFloatingAnimation = (element: HTMLElement, intensity = 'medium') => {
  try {
    // Remove any existing animation
    element.style.animation = 'none';
    
    // Define animation intensities
    const intensities = {
      light: '3px',
      medium: '6px',
      strong: '10px'
    };
    
    const distance = intensities[intensity as keyof typeof intensities] || intensities.medium;
    const duration = Math.random() * 2 + 3; // Random duration between 3-5s
    const delay = Math.random() * 2; // Random delay between 0-2s
    
    // Apply floating animation
    element.style.animation = `floating ${duration}s ease-in-out ${delay}s infinite`;
    if (!document.querySelector('#floating-keyframes')) {
      const style = document.createElement('style');
      style.id = 'floating-keyframes';
      style.textContent = `
        @keyframes floating {
          0% { transform: translate(0, 0); }
          50% { transform: translate(0, -${distance}); }
          100% { transform: translate(0, 0); }
        }
      `;
      document.head.appendChild(style);
    }
  } catch (error) {
    console.error('Floating animation error:', error);
  }
};

/**
 * Background gradient animation
 */
export const animateBackgroundGradient = (element: HTMLElement) => {
  try {
    if (!element) return;
    
    element.style.backgroundSize = '400% 400%';
    element.style.animation = 'gradient-animation 15s ease infinite';
    
    if (!document.querySelector('#gradient-keyframes')) {
      const style = document.createElement('style');
      style.id = 'gradient-keyframes';
      style.textContent = `
        @keyframes gradient-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `;
      document.head.appendChild(style);
    }
  } catch (error) {
    console.error('Gradient animation error:', error);
  }
};

/**
 * Typewriter effect
 */
export const typewriterEffect = (element: HTMLElement, text: string, speed = 50) => {
  try {
    if (!element) return;
    
    element.textContent = '';
    let i = 0;
    
    const type = () => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };
    
    type();
  } catch (error) {
    console.error('Typewriter effect error:', error);
  }
};
