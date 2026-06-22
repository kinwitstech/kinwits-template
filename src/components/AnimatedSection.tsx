import type { HTMLAttributes } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

/**
 * Section wrapper with a scroll-triggered fade/slide-in entrance.
 * Centralizes the reveal animation (and reduced-motion handling, via
 * useScrollAnimation) that was previously copy-pasted across every section.
 */
const AnimatedSection = ({ className, children, ...props }: HTMLAttributes<HTMLElement>) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default AnimatedSection;
