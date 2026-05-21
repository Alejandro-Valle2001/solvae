"use client";

import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeUp } from "@/lib/animations";

const faqItems = [
  {
    value: "q1",
    q: "¿Cuánto tiempo toma una instalación estándar?",
    a: "Depende del equipo: ascensor, elevador vertical, salvaescalera, montaescalera, montavehículo u otro sistema. Como referencia, muchas instalaciones estándar van de 3 a 8 semanas, incluyendo montaje, ajustes, pruebas de seguridad y certificación inicial.",
  },
  {
    value: "q2",
    q: "¿Ofrecen mantenimiento preventivo?",
    a: "Sí, contamos con planes mensuales, trimestrales y anuales con revisiones programadas, registro de hallazgos y repuestos OEM.",
  },
  {
    value: "q3",
    q: "¿Qué normativas cumplen sus equipos?",
    a: "Los equipos de elevación y accesibilidad se diseñan y documentan conforme a las normativas aplicables a cada tecnología —por ejemplo normas tipo ASME / EN donde corresponda— además de la regulación local en Perú, con soporte técnico para inspecciones.",
  },
  {
    value: "q4",
    q: "¿Con qué frecuencia se debe hacer mantenimiento?",
    a: "Recomendamos revisiones periódicas según uso: cada 3 meses es habitual en instalaciones domésticas de alto uso (ascensores, salvaescaleras u otros sistemas); en proyectos comerciales el plan se ajusta al tráfico y a la normativa del equipo.",
  },
];

export function FAQ() {
  return (
    <section id="recursos" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="rounded-3xl bg-[var(--dark-section)] p-8 md:p-12"
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm text-white/60">Lo que dicen nuestros clientes</p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-white/20" />
                  <div>
                    <p className="font-semibold text-white">Carlos Rivas</p>
                    <p className="text-sm text-white/70">Gerente de Proyectos</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      Su creatividad técnica y compromiso han marcado la
                      diferencia en cada edificio donde instalaron.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-full bg-white/20" />
                  <div>
                    <p className="font-semibold text-white">Ing. Paula Torres</p>
                    <p className="text-sm text-white/70">Arquitecta</p>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      Recomendaría Solvae a cualquier desarrollador
                      inmobiliario. Son un equipo de primer nivel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-heading whitespace-pre-line text-4xl font-bold leading-tight text-white">
              Preguntas{"\n"}Frecuentes
            </h2>
            <Accordion multiple={false} className="mt-8 w-full">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-b border-white/20 last:border-b-0"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-white hover:text-white hover:no-underline [&_svg]:text-white">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-white/85">
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="pb-4"
                    >
                      {item.a}
                    </motion.div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
