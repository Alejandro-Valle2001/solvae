"use client";

import { motion } from "framer-motion";

import { fadeInFromSide } from "@/lib/animations";

export function Testimonial() {
  return (
    <section
      id="nosotros"
      className="mx-auto max-w-4xl scroll-mt-24 px-4 py-16 sm:px-6"
    >
      <motion.article
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeInFromSide}
        className="rounded-3xl bg-white p-8 shadow-lg"
      >
        <div className="flex flex-wrap items-center gap-4">
          <div
            className="h-10 w-10 shrink-0 rounded-full bg-[var(--muted)]"
            aria-hidden
          />
          <div>
            <p className="font-heading font-semibold text-[var(--text)]">
              Arq. Roberto Méndez
            </p>
            <p className="text-sm text-[var(--muted-fg)]">
              Director de Infraestructura, Torres del Pacífico
            </p>
          </div>
        </div>
        <blockquote className="mt-6 text-lg leading-relaxed text-[var(--text)]">
          Quedé impresionado con el profesionalismo del equipo de Solvae. Su
          atención al detalle y cumplimiento de plazos fue excepcional.
          Recomiendo sus servicios sin dudar.
        </blockquote>
        <p
          className="mt-6 text-xl tracking-widest text-amber-400"
          aria-label="5 de 5 estrellas"
        >
          ★★★★★
        </p>
      </motion.article>
    </section>
  );
}
