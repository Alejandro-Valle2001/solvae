"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/lib/animations";

const statCardMotion = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export function Features() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <Badge className="rounded-full border-0 bg-[var(--primary)] px-3 py-1 text-xs font-medium text-[var(--primary-fg)] hover:bg-[var(--primary)]">
            Nuestro Estándar
          </Badge>
          <h2 className="font-heading mt-6 whitespace-pre-line text-4xl font-black leading-tight text-[var(--text)]">
            Calidad En Cada{"\n"}Proyecto Que Entregamos
          </h2>
          <p className="mt-5 max-w-lg text-[var(--muted-fg)]">
            Diseñamos soluciones a medida para cada obra —desde ascensores y
            elevadores hasta salvaescaleras, montaescaleras y parqueos— con
            seguridad, durabilidad y confort en cada instalación.
          </p>
          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button className="h-11 rounded-full bg-[var(--primary)] px-8 text-[var(--primary-fg)] hover:bg-[var(--primary)]/90">
              Solicitar Consulta
            </Button>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={statCardMotion}
              className="rounded-2xl bg-[var(--muted)] p-6"
            >
              <CheckSquare className="h-6 w-6 text-[var(--primary)]" />
              <p className="mt-4 text-sm font-bold uppercase tracking-wide text-[var(--text)]">
                Soluciones exactas
              </p>
              <p className="mt-2 text-sm text-[var(--muted-fg)]">
                Ingeniería y fabricación según recorrido, carga, normativa y
                nivel de uso real de tu proyecto.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={statCardMotion}
              className="rounded-2xl bg-[var(--muted)] p-6"
            >
              <CheckSquare className="h-6 w-6 text-[var(--primary)]" />
              <p className="mt-4 text-sm font-bold uppercase tracking-wide text-[var(--text)]">
                Enfoque dinámico
              </p>
              <p className="mt-2 text-sm text-[var(--muted-fg)]">
                Coordinación en sitio, pruebas de seguridad y puesta en marcha
                sin sorpresas.
              </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1581092918056-0c4c296977a7?w=1200&auto=format&fit=crop&q=80"
              alt="Ingenieros revisando planos de movilidad vertical"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-4 left-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-white px-4 py-2 text-sm font-bold shadow-md">
              12+ Proyectos Completados
            </div>
            <div className="rounded-2xl bg-white px-4 py-2 text-sm font-bold shadow-md">
              1.6k+ Clientes Satisfechos
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={statCardMotion}
          className="rounded-2xl bg-[var(--muted)] p-8"
        >
          <p className="font-heading text-5xl font-black text-[var(--text)]">
            2M+
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-[var(--text)]">
            Certificaciones ISO
          </p>
          <p className="mt-3 text-sm text-[var(--muted-fg)]">
            Procesos auditados y trazabilidad en cada fase de instalación y
            mantenimiento.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={statCardMotion}
          className="rounded-2xl bg-[var(--muted)] p-8"
        >
          <p className="font-heading text-5xl font-black text-[var(--text)]">
            1.6k+
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-wide text-[var(--text)]">
            Instalaciones activas
          </p>
          <p className="mt-3 text-sm text-[var(--muted-fg)]">
            Unidades operando con monitoreo preventivo y soporte técnico local.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
