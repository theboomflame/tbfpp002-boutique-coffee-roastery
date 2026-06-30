"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";

interface PhilosophyCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function PhilosophyCard({
  icon,
  title,
  description,
}: PhilosophyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = -((y / rect.height) - 0.5) * 8;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      duration: 0.35,
      ease: "power2.out",
      transformPerspective: 1000,
      transformOrigin: "center",
    });
  };

  const reset = () => {
    if (!cardRef.current) return;

    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        group
        relative
        overflow-hidden
        rounded-[40px]
        bg-white
        p-12
        text-center
        shadow-[0_15px_40px_rgba(0,0,0,.05)]
        transition-all
        duration-700
        hover:-translate-y-3
        hover:shadow-[0_35px_80px_rgba(0,0,0,.10)]
        will-change-transform
      "
    >
      {/* Ambient Glow */}

      <div
        className="
          absolute
          left-1/2
          top-10
          h-40
          w-40
          -translate-x-1/2
          rounded-full
          opacity-0
          blur-3xl
          transition-all
          duration-700
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(circle, rgba(183,138,86,.28), transparent 72%)",
        }}
      />

      {/* Icon */}

      <div
        className="
          relative
          mx-auto
          flex
          h-28
          w-28
          items-center
          justify-center
          rounded-full
          border
          border-[#E9DDD0]
          bg-[#FBF7F2]
          transition-all
          duration-700
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Image
          src={icon}
          alt={title}
          width={46}
          height={46}
        />
      </div>

      {/* Title */}

      <h3 className="font-heading mt-10 text-[2rem] leading-tight text-[#2D221C]">
        {title}
      </h3>

      {/* Divider */}

      <div className="mx-auto mt-6 h-px w-16 bg-[#D9C7B0]" />

      {/* Description */}

      <p className="mt-7 leading-8 text-[#6B4F3A]">
        {description}
      </p>
    </article>
  );
}