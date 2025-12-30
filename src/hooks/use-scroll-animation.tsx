"use client";

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number; // Percentage of element visibility to trigger
  rootMargin?: string; // Margin around the root (viewport)
  animationClass?: string; // Tailwind class for the animation (e.g., 'animate-fadeIn')
  initialClass?: string; // Tailwind class for initial hidden state (e.g., 'opacity-0')
}

const useScrollAnimation = <T extends HTMLElement>({ // Made the hook generic with type T
  threshold = 0.1,
  rootMargin = '0px',
  animationClass = 'animate-fadeIn',
  initialClass = 'opacity-0',
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<T>(null); // Use the generic type T for the ref
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after animation to prevent re-triggering
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  const classes = `${initialClass} ${isVisible ? animationClass : ''}`;

  return { ref, classes };
};

export default useScrollAnimation;