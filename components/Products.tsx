"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { featuredProducts } from "@/lib/products";

export function Products() {
  return (
    <section id="productos" className="bg-[var(--bg)] pb-20 pt-14 sm:pb-24 sm:pt-20">
      <div className="bg-[var(--cta-red)] py-4 text-center">
        <h2 className="font-heading text-xl font-black uppercase tracking-[0.18em] text-white sm:text-2xl">
          Nuestros Equipos
        </h2>
      </div>

      <div className="mx-auto w-full max-w-none px-4 pt-10 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {featuredProducts.map((p) => (
            <motion.div key={p.id} variants={fadeUp}>
              <Link
                href={p.href}
                className="group flex flex-col overflow-hidden rounded-2xl bg-[var(--muted)] ring-1 ring-black/[0.06] transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-center text-base font-bold leading-snug text-white sm:text-lg">
                      {p.name}
                    </p>
                    <p className="text-center text-[13px] leading-snug text-white/80">
                      {p.description}
                    </p>
                    <span className="mt-1 rounded-full bg-[var(--cta-red)] px-5 py-2 text-[13px] font-semibold text-white">
                      Ver más
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-4 py-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <Image
                      src="/images/logosolvae.png"
                      alt="Solvae"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text)] sm:text-[12px]">
                    {p.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/#productos"
            className="rounded-full bg-[var(--cta-red)] px-8 py-3 text-[13px] font-black uppercase tracking-widest text-white transition hover:bg-[var(--cta-red-hover)]"
          >
            Ver Todos los Productos
          </Link>
        </div>
      </div>
    </section>
  );
}
