"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingBeans() {
  const bean1 = useRef<HTMLDivElement>(null);
  const bean2 = useRef<HTMLDivElement>(null);
  const bean3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const beans = [bean1.current, bean2.current, bean3.current];

    beans.forEach((bean, index) => {
      if (!bean) return;

      gsap.to(bean, {
        y: -15,
        rotation: index % 2 === 0 ? 12 : -12,
        duration: 2.5 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <>
      <div
        ref={bean1}
        className="absolute left-[40px] top-[90px] z-20"
      >
        <Image
          src="/images/coffee-bean.png"
          alt="Coffee Bean"
          width={42}
          height={42}
        />
      </div>

      <div
        ref={bean2}
        className="absolute right-[45px] top-[170px] z-20"
      >
        <Image
          src="/images/coffee-bean.png"
          alt="Coffee Bean"
          width={34}
          height={34}
        />
      </div>

      <div
        ref={bean3}
        className="absolute bottom-[80px] left-[90px] z-20"
      >
        <Image
          src="/images/coffee-bean.png"
          alt="Coffee Bean"
          width={38}
          height={38}
        />
      </div>
    </>
  );
}