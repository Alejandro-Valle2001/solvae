"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import { ClientsMarquee } from "@/components/ClientsMarquee";
import { Button, buttonVariants } from "@/components/ui/button";
import { fadeUp, fadeUpStagger } from "@/lib/animations";
import { cn } from "@/lib/utils";

const heroImages = {
  left: "/images/Acorn-130-3-scaled.jpg",
  center: "/images/montavehiculo-3-1.png",
  right: "/images/plataforma-salvaescalera-Delta.jpeg",
};

const gallerySlides = [
  { src: heroImages.center, alt: "Montavehículo Solvae" },
  { src: heroImages.left, alt: "Silla salvaescalera" },
  { src: heroImages.right, alt: "Plataforma salvaescalera" },
] as const;

const GALLERY_INTERVAL_MS = 5000;

function HeroImageGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % gallerySlides.length),
      GALLERY_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="sync">
        <motion.div
          key={gallerySlides[index].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={gallerySlides[index].src}
            alt={gallerySlides[index].alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {gallerySlides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ver imagen ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index
                ? "w-6 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const topControls = useAnimationControls();

  useEffect(() => {
    topControls.start("visible");
  }, [topControls]);

  return (
    <section
      id="productos"
      className="px-2 pb-6 pt-4 sm:px-3 sm:pt-5 md:px-4 lg:px-5 xl:px-6"
    >
      <div className="mx-auto grid w-full max-w-none grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
        {/* ── Top row: contenido + galería de imágenes ── */}
        <motion.div
          initial="hidden"
          animate={topControls}
          variants={fadeUpStagger}
          className="contents"
        >
          <motion.div
            variants={fadeUp}
            className="relative flex min-h-0 flex-col justify-center overflow-hidden rounded-2xl bg-[var(--muted)] p-7 shadow-sm ring-1 ring-black/[0.06] sm:p-9 md:p-10 lg:col-span-7 lg:min-h-[30rem] xl:min-h-[32rem]"
          >
            <Image
              src="/images/mundo.png"
              alt=""
              fill
              aria-hidden
              className="pointer-events-none select-none object-cover object-center opacity-[0.04]"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
            <p className="relative z-10 flex flex-wrap items-center gap-x-1 gap-y-1 font-medium text-[11px] uppercase tracking-[0.18em] text-[var(--muted-fg)] sm:text-xs">
              Accesibilidad · Ascensores · Salvaescaleras · Montaescaleras ·
              Parqueos{" "}
              <ArrowDownRight className="h-4 w-4 shrink-0 text-[var(--cta-red)]" />
            </p>
            <h1 className="font-heading relative z-10 mt-5 text-left text-3xl font-black leading-[1.08] tracking-tight text-[var(--text)] text-balance sm:text-4xl lg:text-[2.4rem] xl:text-5xl">
              Ascensores y salvaescaleras en Lima, Perú
            </h1>
            <p className="relative z-10 mt-6 max-w-xl text-left text-[13px] leading-relaxed text-[var(--muted-fg)] sm:text-sm">
              Somos especialistas en movilidad vertical y accesibilidad:
              Instalamos ascensores residenciales y comerciales, plataformas
              salvaescaleras, montavehículos, sistemas de parqueo y más con los
              más altos estándares de seguridad.
            </p>
            <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button className="h-12 rounded-full border-0 bg-[var(--cta-red)] px-8 text-[var(--cta-red-fg)] hover:bg-[var(--cta-red-hover)]">
                  Solicitar cotización
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#proyectos"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "h-12 rounded-full border-[var(--text)] px-7 text-[var(--text)] hover:bg-[var(--muted)]"
                  )}
                >
                  Conocer más
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/[0.06] sm:min-h-[340px] lg:col-span-5 lg:min-h-[30rem] xl:min-h-[32rem]"
          >
            <HeroImageGallery />
          </motion.div>
        </motion.div>

        {/* ── Bottom row: 4 stat / image cards (ocultas por ahora) ──
        <motion.div
          initial="hidden"
          animate={bottomControls}
          variants={fadeUpStagger}
          className="contents"
        >
          <motion.div
            variants={fadeUp}
            className="relative min-h-[11rem] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/[0.05] sm:min-h-[12.5rem] lg:col-span-3"
          >
            <BentoImage
              src={heroImages.left}
              alt="Silla salvaescalera"
              className="absolute inset-0 h-full w-full"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[var(--cta-red)] p-6 shadow-md ring-1 ring-red-950/15 sm:p-7 lg:col-span-3"
          >
            ...
          </motion.div>

          <motion.div ... plataforma salvaescalera ... />

          <motion.div ... 18.5k servicios ... />
        </motion.div>
        ── */}
      </div>

      <ClientsMarquee embedded />
    </section>
  );
}
