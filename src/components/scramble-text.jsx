"use client";

import { useState, useEffect, useRef } from "react";

export function ScrambleText({ 
  text, 
  speed = 30, 
  chars = "abcdefghijklmnopqrstuvwxyz0123456789-",
  className = ""
}) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);
  const iterationsRef = useRef(0);

  const scramble = () => {
    const original = text.split('');
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    iterationsRef.current = 0;
    const maxIterations = original.length * 2;

    intervalRef.current = setInterval(() => {
      iterationsRef.current += 1;

      const out = original
        .map((ch, i) => {
          if (iterationsRef.current > i * 2) return ch;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      setDisplayText(out);

      if (iterationsRef.current >= maxIterations) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplayText(original.join(''));
      }
    }, speed);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <span 
      onMouseEnter={scramble} 
      className={`inline-block select-none ${className}`}
    >
      {displayText}
    </span>
  );
}
