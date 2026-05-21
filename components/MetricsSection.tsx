"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BG_RED = "#6b1519";
const METRIC_RED = "#e85a5a";

const metrics = [
  { value: "+11", label: "Años de experiencia" },
  { value: "+520", label: "Clientes" },
  { value: "+1,000", label: "Elevadores entregados" },
  { value: "+18,500", label: "Servicios atendidos" },
  { value: "+8", label: "Proveedores" },
] as const;

export function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + rect.height * 2.2;
      const scrolled = vh - rect.top;
      setProgress(Math.min(1, Math.max(0, scrolled / total)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const mapOffset = -58 + progress * 58;
  const mapOpacity = 0.22 + progress * 0.38;
  const mapScale = 1.08 + progress * 0.12;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 sm:py-12"
      style={{ backgroundColor: BG_RED }}
      aria-labelledby="metrics-heading"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute left-1/2 will-change-[transform,opacity]"
          style={{
            top: `${mapOffset}%`,
            opacity: mapOpacity,
            width: "min(200%, 90rem)",
            height: "320%",
            transform: `translateX(-50%) scale(${mapScale})`,
          }}
        >
          <Image
            src="/images/mundo.png"
            alt=""
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 200vw, 90rem"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <h2
          id="metrics-heading"
          className="text-center text-base font-semibold text-white sm:text-lg"
        >
          ¡Puedes contar con nosotros!
        </h2>

        <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-6 lg:mt-7 lg:grid-cols-5 lg:gap-4">
          {metrics.map((item) => (
            <li key={item.label} className="text-center">
              <p
                className="font-heading text-2xl font-black leading-none sm:text-3xl lg:text-4xl"
                style={{ color: METRIC_RED }}
              >
                {item.value}
              </p>
              <p className="mt-2 text-xs font-medium text-white/90 sm:text-sm">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
