"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";

const projects = [
  {
    title: "Torre Empresarial Lima",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=80",
    alt: "Lobby corporativo moderno",
  },
  {
    title: "Centro Comercial Sur",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&auto=format&fit=crop&q=80",
    alt: "Espacio comercial con solución de circulación vertical",
  },
  {
    title: "Residencias Del Mar",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&auto=format&fit=crop&q=80",
    alt: "Proyecto residencial con ascensor y alta calidad constructiva",
  },
];

export function Projects() {
  return (
    <section
      id="proyectos"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="text-center"
      >
        <h2 className="font-heading whitespace-pre-line text-5xl font-black leading-tight text-[var(--text)]">
          Nuestros Proyectos{"\n"}Destacados
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[var(--muted-fg)]">
          Torre corporativa, retail, viviendas y espacios con ascensores,
          soluciones de accesibilidad y circulación vertical optimizada para cada
          uso.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-4 p-6">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="rounded-full bg-[var(--muted)] text-xs font-normal text-[var(--text)]"
                >
                  instalación
                </Badge>
                <Badge
                  variant="secondary"
                  className="rounded-full bg-[var(--muted)] text-xs font-normal text-[var(--text)]"
                >
                  3 semanas
                </Badge>
                <Badge
                  variant="secondary"
                  className="rounded-full bg-[var(--muted)] text-xs font-normal text-[var(--text)]"
                >
                  corporativo
                </Badge>
              </div>
              <h3 className="font-heading text-xl font-bold text-[var(--text)]">
                {project.title}
              </h3>
              <Link
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--primary)] hover:underline"
              >
                Ver Caso de Estudio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="mt-12 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Button
          variant="outline"
          className="h-11 rounded-full border-[var(--text)] bg-transparent text-[var(--text)] hover:bg-[var(--primary)] hover:text-[var(--primary-fg)]"
        >
          Ver Todos los Proyectos
        </Button>
      </motion.div>
    </section>
  );
}
