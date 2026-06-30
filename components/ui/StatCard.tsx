"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatCard({
  value,
  suffix = "",
  label,
}: StatCardProps) {
  const [count, setCount] = useState(0);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        let start = 0;

        const duration = 1800;

        const increment = value / (duration / 16);

        const timer = setInterval(() => {
          start += increment;

          if (start >= value) {
            setCount(value);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        observer.disconnect();
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={cardRef}
      className="
      rounded-[28px]
      bg-white
      p-8
      text-center
      transition-all
      duration-500
      hover:-translate-y-2
      hover:shadow-[0_25px_45px_rgba(0,0,0,.08)]
    "
    >
      <h3 className="font-heading text-5xl text-[#2D221C]">
        {count}
        {suffix}
      </h3>

      <p className="mt-4 uppercase tracking-[0.25em] text-[#B78A56]">
        {label}
      </p>
    </div>
  );
}