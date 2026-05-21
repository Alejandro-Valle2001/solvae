"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

const slides = [
  {
    src: "/images/image.png",
    alt: "Equipo Solvae",
  },
  {
    src: "/images/image%20copy.png",
    alt: "Equipo Solvae celebrando",
  },
];

export function Purpose() {
  const [i, setI] = useState(0);
  const n = slides.length;

  const prev = useCallback(() => setI((p) => (p - 1 + n) % n), [n]);
  const next = useCallback(() => setI((p) => (p + 1) % n), [n]);

  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="border-b border-transparent bg-[var(--bg)] pb-16 pt-6 sm:pb-20 sm:pt-8">
      <div className="mx-auto w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Una sola pieza: texto + carrusel sin canal entre medias */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="overflow-hidden rounded-2xl bg-[var(--muted)] shadow-[0_20px_50px_-28px_rgb(15_23_42/0.22)] ring-1 ring-black/[0.07]"
        >
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            <article className="flex min-h-0 flex-col justify-between p-7 sm:p-9 lg:h-full lg:w-[60%] lg:min-h-[18rem] lg:p-10 xl:p-11">
              <header>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
                  Solvae
                </p>
                <h2 className="font-heading mt-4 text-left text-[clamp(1.85rem,3.8vw,3.35rem)] font-black leading-[1.08] tracking-tight text-[var(--text)]">
                  Nuestro propósito es promover la accesibilidad en el país.
                </h2>
              </header>

              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-[var(--muted-fg)] sm:mt-10 sm:text-base lg:leading-[1.75]">
                <p>
                  En Solvae llevamos más de una década quitando barreras físicas
                  en edificios de todo tipo. Creemos que la accesibilidad es un
                  derecho, no un privilegio, y que moverse con seguridad marca la
                  diferencia en la calidad de vida de las personas.
                </p>
                <p>
                  Integramos toda la línea de{" "}
                  <strong className="font-medium text-[var(--text)]">
                    movilidad vertical y accesibilidad
                  </strong>
                  : ascensores y elevadores (incluidos verticales y
                  domésticos), sillas y plataformas salvaescaleras rectas o
                  curvas, montaescaleras, montavehículos y sistemas de parqueo,
                  con instalación, modernización y mantenimiento bajo normativa
                  de seguridad y un diseño adaptado a cada espacio.
                </p>
                <p>
                  Nuestro compromiso es lograr entornos más inclusivos, donde la
                  movilidad signifique autonomía, dignidad y bienestar para
                  quienes viven y trabajan en ellos día a día.
                </p>
              </div>
            </article>

            <div className="flex min-h-[240px] min-w-0 flex-col border-t border-black/[0.08] lg:min-h-0 lg:w-[40%] lg:border-t-0 lg:border-l lg:border-black/[0.08]">
              <div
                className="relative isolate flex h-full min-h-[240px] flex-1 flex-col lg:min-h-[18rem]"
                role="region"
                aria-roledescription="carousel"
                aria-label="Momentos Solvae y proyectos"
              >
                <div className="relative min-h-[220px] flex-1 sm:min-h-[260px] lg:min-h-0 lg:flex-1">
                  {/* Imagen de fondo fija: evita flash blanco durante la transición */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={slides[i === 0 ? 1 : 0].src}
                      alt=""
                      fill
                      aria-hidden
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.55, ease: "easeInOut" }}
                      className="absolute inset-0 z-10"
                    >
                      <Image
                        src={slides[i].src}
                        alt={slides[i].alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority={i === 0}
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"
                        aria-hidden
                      />
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute inset-y-0 left-0 flex w-12 items-center justify-start bg-gradient-to-r from-black/20 to-transparent pl-2 md:w-14 md:pl-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="size-10 rounded-full border-0 bg-white/95 p-0 text-[var(--text)] shadow-md backdrop-blur-sm hover:bg-white md:size-11"
                      onClick={prev}
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="size-5 md:size-6" strokeWidth={2} />
                    </Button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex w-12 items-center justify-end bg-gradient-to-l from-black/20 to-transparent pr-2 md:w-14 md:pr-3">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      className="size-10 rounded-full border-0 bg-white/95 p-0 text-[var(--text)] shadow-md backdrop-blur-sm hover:bg-white md:size-11"
                      onClick={next}
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="size-5 md:size-6" strokeWidth={2} />
                    </Button>
                  </div>

                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-black/55 to-transparent"
                    aria-hidden
                  />

                  <div className="absolute bottom-3 left-0 right-0 z-20 flex items-center justify-center gap-2 sm:bottom-4 sm:gap-2.5">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setI(idx)}
                        className={cn(
                          "pointer-events-auto h-2 rounded-full shadow-sm transition-all duration-300",
                          idx === i
                            ? "w-10 bg-[var(--primary)] ring-2 ring-white/40"
                            : "w-2 bg-white/50 hover:bg-white/80 sm:w-2"
                        )}
                        aria-label={`Ir a imagen ${idx + 1} de ${n}`}
                        aria-current={idx === i}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
