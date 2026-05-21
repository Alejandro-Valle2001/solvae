"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const services = [
  {
    id: "correctivo",
    title: "Mantenimiento Correctivo",
    description:
      "Implementamos ascensores, plataformas salvaescaleras, montavehículos, sistemas de parqueo y más, garantizando que cada instalación cumpla con los más altos estándares de calidad y seguridad.",
    src: "/images/mante.jpg",
  },
  {
    id: "preventivo",
    title: "Mantenimiento Preventivo",
    description:
      "Revisamos y ajustamos periódicamente los equipos para asegurar su óptimo rendimiento y prolongar su vida útil, evitando fallas y reduciendo costos futuros.",
    src: "/images/mante2.png",
  },
  {
    id: "especializados",
    title: "Servicios Especializados",
    description:
      "En caso de averías o fallos, nuestro equipo técnico especializado actúa de forma rápida y eficaz para restablecer el funcionamiento seguro del equipo.",
    src: "/images/serv.jpg",
  },
  {
    id: "emergencias",
    title: "Atención de Emergencias",
    description:
      "Disponemos de un servicio de respuesta inmediata para resolver incidencias urgentes, minimizando el tiempo de inactividad de los equipos.",
    src: "/images/aten.jpg",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-[var(--bg)] pb-16 pt-14 sm:pb-20 sm:pt-20">
      {/* Banda separadora */}
      <div className="bg-[var(--cta-red)] py-4 text-center">
        <h2 className="font-heading text-xl font-black uppercase tracking-[0.18em] text-white sm:text-2xl">
          Nuestros Servicios
        </h2>
      </div>

      <div className="mx-auto w-full max-w-none px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.id}
              variants={fadeUp}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/[0.06]"
            >
              {/* Imagen */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.src}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col px-5 py-5">
                <h3 className="text-sm font-black uppercase tracking-wide text-[var(--text)] sm:text-[13px]">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[var(--muted-fg)]">
                  {s.description}
                </p>

                {/* Botón inferior */}
                <div className="mt-5 flex justify-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--cta-red)] text-white shadow-sm">
                    <ChevronDown className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
