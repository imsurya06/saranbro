"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypingEffectProps {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
  cursorClassName?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 100,
  className,
  cursorClassName,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  useEffect(() => {
    if (isTypingComplete) {
      // Keep cursor visible for a short period, then hide it
      const cursorTimeout = setTimeout(() => setShowCursor(false), 1000); // Show cursor for 1 second after typing
      return () => clearTimeout(cursorTimeout);
    }
  }, [isTypingComplete]);

  return (
    <span className={cn("inline-block", className)}>
      {displayedText}
      {showCursor && (
        <span className={cn("inline-block w-0.5 h-full bg-white ml-1 animate-blink", cursorClassName)} />
      )}
    </span>
  );
};

export default TypingEffect;