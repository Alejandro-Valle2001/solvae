"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { fadeUp, fadeUpStagger } from "@/lib/animations";

/** Logos en public/clientes/ (actualizar el array si agregas quitan archivos). */
const clientLogoFiles = [
  "16-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "17-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "18-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "19-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "2-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "20-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "21-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "39da674d-aa76-442a-82e5-131471010e9a-rei4xwcvm400ip9esiixq3q4khz9twqijx5eg73ws8.jpg",
  "7-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "8-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "9-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "Binda-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "Lider-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "asociacion-ronald-mcdonalds-rei5jgrkf9iuwlxmuu4rxnsv8rogfwcsuo0gur4q0o.png",
  "aurora-grupo-inmobiliario-rei52mhnz4gww4ea722eresk38opj4hxjb8aba3ni0.png",
  "cientifica-rei5v088c1blg965gtpvjqylt2soy465rsd2z20pmg.png",
  "evergarden-rei5e0baqw1xi3uzpz7qyjdj38kqr5owfnnzjx8054.png",
  "gdc-rei5cq97g0avp7pw6xb12czxzcvr9zm1xbp71d4am0.png",
  "inarco-rei4y5r9igcvqsvr9ml7f1cqicoxyvrtx7o98ypz20.png",
  "jjc-rei595hbfpelimwy2vn52rhslkigzgetrmboagf8ag.png",
  "logo-ESPACIO-ESTRUCTURAS-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-besco-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-capac-scaled-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "logo-conforta-scaled-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "logo-cosapi-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-desarrolladora-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-galeon-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-tale-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "municipalidad-de-lima-rei5lkwhsuf310v1i91k1ml7cz96rdr254usq5zu0o.png",
  "rumi-rei5bddlkmfyxhow4c6fgpbz3bko5q80elry2z4rlk.png",
  "sanna-rei5x76oa4bojhzgnrujd71bpfziwovm2n5vaarn3s.png",
  "sise-rei5tsznlnoem6wyhb11d1vehcpt41ei9ucqwbstko.png",
  "tdc-rei56xl1asd83s501f3uotnm3tg9t6ln4mvehxpozc.png",
  "usil-rei5p5odt5bd7lnzmapg183cqrmh1wyaau8bh2owc8.png",
  "utp-rei5ndrcwevva48tzj2tbo80ckdiihwje1vau9bo3c.png",
] as const;

function clientAlt(filename: string) {
  const base = filename.replace(/\.[^.]+$/, "");
  return `Logo cliente: ${base.replace(/[-_]/g, " ").slice(0, 120)}`;
}

export function ClientsMarquee({ embedded = false }: { embedded?: boolean }) {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const row = clientLogoFiles.map((file) => {
    const src = `/clientes/${file}`;
    return (
      <div
        key={src}
        className="relative h-16 w-[10rem] shrink-0 opacity-80 transition-opacity hover:opacity-100 sm:h-[4.75rem] sm:w-44 lg:h-[5.25rem] lg:w-52"
      >
        <Image
          src={src}
          alt={clientAlt(file)}
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 176px, 220px"
        />
      </div>
    );
  });

  return (
    <section
      id="clientes"
      className={
        embedded
          ? "mt-4 pb-2"
          : "-mt-6 bg-white pt-2 pb-7 sm:-mt-8 sm:pb-8"
      }
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={fadeUpStagger}
        className="mx-auto flex w-full max-w-none flex-col gap-4 px-2 sm:flex-row sm:items-center sm:gap-6 sm:px-3 md:px-4 lg:px-5 xl:px-6"
      >
        <motion.div variants={fadeUp} className="shrink-0">
          <p className="font-heading whitespace-nowrap text-2xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-3xl lg:text-4xl">
            Nuestros clientes
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="relative min-h-[4.25rem] min-w-0 flex-1 overflow-hidden sm:min-h-[5rem] lg:min-h-[5.75rem]"
        >
          <div
            className="flex w-max animate-marquee items-center gap-12 pr-12 sm:gap-16 sm:pr-16 lg:gap-20 lg:pr-20"
            aria-label="Logos de clientes"
          >
            {row}
            {row}
          </div>
          {/* Desvanecimiento hacia la izquierda (junto al título); encima del scroll. */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white from-0% via-white/85 via-35% to-transparent to-100% sm:w-44 lg:w-52"
            aria-hidden
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
