"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingCup({
  children,
}: {
  children: React.ReactNode;
}) {
  const cupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cupRef.current) return;

    gsap.to(cupRef.current, {
      y: -12,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return <div ref={cupRef}>{children}</div>;
}