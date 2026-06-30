"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "../../lib/animations";

export default function StaggerReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = Array.from(container.children);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.fromTo(
          items,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
           duration: motion.duration.normal,
stagger: motion.stagger.normal,
ease: motion.ease.default,
          }
        );

        observer.disconnect();
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid gap-14 md:grid-cols-3"
    >
      {children}
    </div>
  );
}