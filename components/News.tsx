"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { fadeUp } from "@/lib/animations";

const items = [
  {
    title: "Nueva línea de soluciones de accesibilidad",
    excerpt:
      "Incorporamos configuraciones para hogares, comercios y edificios públicos con tiempos de entrega optimizados.",
  },
  {
    title: "Mantenimiento predictivo y trazabilidad",
    excerpt:
      "Reportes claros, checklist por visita y recomendaciones basadas en uso real para minimizar paradas.",
  },
  {
    title: "Proyectos llave en mano",
    excerpt:
      "Ingeniería, instalación, pruebas y acompañamiento documental para inspecciones y certificaciones.",
  },
];

export function News() {
  return (
    <section
      id="noticias"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div className="max-w-2xl">
          <h2 className="font-heading text-4xl font-black text-[var(--text)]">
            Noticias
          </h2>
          <p className="mt-3 text-[var(--muted-fg)]">
            Novedades de productos, mantenimiento y proyectos de accesibilidad.
          </p>
        </div>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <motion.article
            key={it.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="rounded-3xl bg-[var(--muted)] p-7 ring-1 ring-black/[0.06]"
          >
            <h3 className="font-heading text-lg font-bold text-[var(--text)]">
              {it.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted-fg)]">
              {it.excerpt}
            </p>
            <button
              type="button"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--cta-red)] hover:underline"
            >
              Ver más <ArrowUpRight className="h-4 w-4" />
            </button>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

