"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: conectar con backend / Resend
  };

  return (
    <section
      id="contacto"
      className="bg-[var(--bg)] px-4 py-14 sm:px-6 md:px-8 lg:px-10 xl:px-12"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="overflow-hidden rounded-2xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.07] lg:flex lg:min-h-[560px]"
      >
        {/* ── Bloque izquierdo: todo el contenido ── */}
        <div className="flex flex-col bg-white p-8 sm:p-10 lg:w-[55%] lg:p-12">
          {/* Logo + título */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logosolvae.png"
              alt="Solvae"
              width={42}
              height={42}
              className="object-contain"
            />
            <div>
              <h2 className="font-heading text-2xl font-black leading-tight text-[var(--text)] sm:text-3xl">
                Solicita una Cotización
              </h2>
              <p className="text-[13px] text-[var(--muted-fg)]">
                Escribe tus datos y uno de nuestros asesores te llamará.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-3.5 flex-1">
            <div className="grid gap-3.5 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="¿Cuál es tu nombre?"
                required
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-[var(--text)] placeholder:text-gray-400 focus:border-[var(--cta-red)] focus:outline-none focus:ring-2 focus:ring-[var(--cta-red)]/20 transition"
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="¿A qué número te llamamos?"
                className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-[var(--text)] placeholder:text-gray-400 focus:border-[var(--cta-red)] focus:outline-none focus:ring-2 focus:ring-[var(--cta-red)]/20 transition"
              />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="¿A qué correo te escribimos?"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[var(--text)] placeholder:text-gray-400 focus:border-[var(--cta-red)] focus:outline-none focus:ring-2 focus:ring-[var(--cta-red)]/20 transition"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="¿Quieres contarnos algo adicional?"
              rows={4}
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-[var(--text)] placeholder:text-gray-400 focus:border-[var(--cta-red)] focus:outline-none focus:ring-2 focus:ring-[var(--cta-red)]/20 transition"
            />
            <button
              type="submit"
              className="rounded-xl bg-[var(--cta-red)] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--cta-red-hover)] active:scale-[0.98]"
            >
              Solicita una cotización
            </button>
          </form>

          {/* Datos de contacto */}
          <div className="mt-8 flex flex-wrap gap-8 border-t border-gray-100 pt-7">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--cta-red)]">
                Llámanos o escríbenos
              </p>
              <div className="mt-2 space-y-1.5">
                <a href="tel:+51905455235" className="flex items-center gap-2 text-sm text-[var(--muted-fg)] hover:text-[var(--text)]">
                  <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                  (+51) 905 455 235
                </a>
                <a href="tel:+016329203" className="flex items-center gap-2 text-sm text-[var(--muted-fg)] hover:text-[var(--text)]">
                  <Phone className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                  (+01) 632 9203
                </a>
                <a href="mailto:atencionalcliente@solvae.pe" className="flex items-center gap-2 text-sm text-[var(--muted-fg)] hover:text-[var(--text)]">
                  <Mail className="h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                  atencionalcliente@solvae.pe
                </a>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--cta-red)]">
                Visítanos
              </p>
              <div className="mt-2 flex items-start gap-2 text-sm text-[var(--muted-fg)]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={1.8} />
                Jr. Juan Francisco Rivas 947, La Victoria, Lima.
              </div>
            </div>
          </div>
        </div>

        {/* ── Bloque derecho: mapa ── */}
        <div className="relative min-h-[320px] flex-1 lg:min-h-0">
          <iframe
            title="Ubicación Solvae"
            src="https://maps.google.com/maps?cid=10065771856531500745&output=embed&hl=es"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", minHeight: "320px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
