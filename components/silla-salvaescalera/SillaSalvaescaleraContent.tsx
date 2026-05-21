"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Calendar,
  Check,
  Clock,
  Headphones,
  Home,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const RED = "#E8202E";
const WA_GREEN = "#25D366";

const container =
  "mx-auto w-full max-w-none px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6";

const trustBadges = [
  { icon: Clock, label: "Instalación en 48-72 horas" },
  { icon: Home, label: "Evaluación gratuita en tu hogar" },
  { icon: ShieldCheck, label: "Equipos europeos certificados" },
];

const trustPillars = [
  { icon: Building2, label: "Instalaciones en hogares y empresas" },
  { icon: ShieldCheck, label: "Equipos de marcas europeas" },
  { icon: Headphones, label: "Soporte técnico especializado" },
];

const trustGallery = [
  { src: "/images/curvas1.jpg", alt: "Silla salvaescalera curva" },
  { src: "/images/curvas2.jpg", alt: "Silla salvaescalera curva en hogar" },
  { src: "/images/solvae1.jpg", alt: "Silla salvaescalera recta" },
];

const stairliftOptions = [
  {
    id: "recta",
    title: "Silla Salvaescalera Recta",
    description:
      "Ideal para escaleras sin curvas ni descansos. Es la opción más rápida y económica.",
    features: ["Instalación rápida", "Menor costo", "Alta disponibilidad"],
    cta: "Ver opción recta",
    href: "/silla-salvaescalera",
    accent: RED,
    image: "/images/solvae1.jpg",
    imageAlt: "Silla salvaescalera recta instalada en escalera",
  },
  {
    id: "curva",
    title: "Silla Salvaescalera Curva",
    description:
      "Diseñada para escaleras con giros, descansos o formas especiales. Fabricación a medida.",
    features: ["Adaptación total", "Máxima seguridad", "Diseño personalizado"],
    cta: "Ver opción curva",
    href: "/silla-salvaescalera",
    accent: "#991b1b",
    image: "/images/curvas1.jpg",
    imageAlt: "Silla salvaescalera curva instalada en escalera",
  },
] as const;

const faqItems = [
  {
    q: "¿Cuánto tarda la instalación de una silla salvaescalera?",
    a: "En escaleras rectas estándar, la instalación suele completarse entre 48 y 72 horas después de la evaluación técnica en sitio.",
  },
  {
    q: "¿Funciona si se corta la luz?",
    a: "Sí. Los equipos incluyen batería de respaldo para completar el recorrido y dejar el asiento en posición segura.",
  },
  {
    q: "¿Se puede instalar en escaleras curvas?",
    a: "Sí, con riel personalizado. La evaluación gratuita define si tu escalera es recta o curva y el modelo adecuado.",
  },
  {
    q: "¿Qué mantenimiento requiere?",
    a: "Recomendamos revisiones periódicas según el uso. Ofrecemos planes de mantenimiento preventivo con repuestos y soporte técnico.",
  },
  {
    q: "¿La evaluación en casa tiene costo?",
    a: "No. Agendamos una visita sin compromiso para medir la escalera y recomendarte la mejor opción.",
  },
];

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[var(--text)] placeholder:text-gray-400 focus:border-[#E8202E] focus:outline-none focus:ring-2 focus:ring-[#E8202E]/20 transition";

export function SillaSalvaescaleraContent() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    district: "",
    stairType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* Hero — fondo claro, dos columnas como referencia */}
      <section className="bg-white py-10 sm:py-12 lg:py-16">
        <div
          className={cn(
            container,
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16"
          )}
        >
          <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <h1 className="font-heading text-3xl font-black leading-[1.1] tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              Sillas Salvaescaleras en Lima
            </h1>
            <p
              className="font-heading mt-3 text-xl font-bold sm:text-2xl"
              style={{ color: RED }}
            >
              Instalación rápida y segura
            </p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--muted-fg)] sm:text-base">
              Recupera la independencia en tu hogar. Instalamos sillas
              salvaescaleras rectas y curvas para adultos mayores y personas con
              movilidad reducida.
            </p>

            <ul className="mt-8 grid grid-cols-3 gap-x-2 sm:gap-x-4 lg:gap-x-5">
              {trustBadges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex min-w-0 items-center gap-1.5 sm:gap-2"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 bg-white sm:h-9 sm:w-9"
                    style={{ borderColor: RED, color: RED }}
                  >
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
                  </span>
                  <span className="text-[10px] font-medium leading-tight text-[var(--text)] sm:text-[11px] lg:text-xs">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid max-w-lg grid-cols-2 gap-2 sm:gap-3">
              <a
                href="#evaluacion"
                className="flex h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2 text-[9px] font-black uppercase tracking-wide text-white shadow-sm transition hover:opacity-90 sm:h-12 sm:gap-2 sm:px-4 sm:text-[11px] lg:text-xs"
                style={{ backgroundColor: RED }}
              >
                <Calendar className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                Agendar evaluación gratis
              </a>
              <a
                href="https://wa.me/51905455235"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-2 text-[9px] font-black uppercase tracking-wide text-white shadow-sm transition hover:opacity-90 sm:h-12 sm:gap-2 sm:px-4 sm:text-[11px] lg:text-xs"
                style={{ backgroundColor: WA_GREEN }}
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl sm:min-h-[400px] lg:min-h-[480px]">
            <Image
              src="/images/salvaescalerasportada.jpg"
              alt="Silla salvaescalera instalada en escalera de hogar"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute bottom-5 right-5 z-10 flex max-w-[15rem] items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] sm:bottom-6 sm:right-6 sm:max-w-[17rem] sm:px-5 sm:py-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${RED}12`, color: RED }}
              >
                <Users className="h-6 w-6" />
              </span>
              <div>
                <p className="font-heading text-3xl font-black leading-none text-[var(--text)]">
                  10+
                </p>
                <p className="mt-1 text-xs leading-snug text-[var(--muted-fg)] sm:text-[13px]">
                  Años mejorando la accesibilidad en el Perú
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Subir escaleras se ha vuelto un riesgo? */}
      <section className="bg-white py-12 sm:py-14 lg:py-16">
        <div
          className={cn(
            container,
            "grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16"
          )}
        >
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[360px] lg:min-h-[400px]">
            <Image
              src="/images/salvaescaleras1.jpg"
              alt="Adulto mayor subiendo escaleras con apoyo"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span
              className="mb-5 block h-1 w-12 rounded-full"
              style={{ backgroundColor: RED }}
              aria-hidden
            />
            <h2 className="font-heading text-2xl font-black leading-tight text-[var(--text)] sm:text-3xl lg:text-[2.1rem]">
              ¿Subir escaleras se ha vuelto un riesgo?
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[var(--muted-fg)] sm:text-base">
              Las escaleras pueden convertirse en un obstáculo diario,
              especialmente para adultos mayores o personas con movilidad
              reducida.
            </p>
            <p
              className="mt-5 text-sm font-bold leading-relaxed sm:text-base"
              style={{ color: RED }}
            >
              Evita caídas, esfuerzo innecesario y dependencia de terceros.
            </p>
            <p className="font-heading mt-5 text-sm font-bold leading-relaxed text-[var(--text)] sm:text-base">
              Una solución segura puede cambiar tu calidad de vida en días.
            </p>
          </div>
        </div>
      </section>

      {/* ¿Qué tipo de salvaescalera necesitas? */}
      <section className="bg-white pb-14 pt-12 sm:pb-16 sm:pt-14 lg:pb-20 lg:pt-16">
        <div className={container}>
          <div className="text-center">
            <span
              className="mx-auto mb-5 block h-1 w-12 rounded-full"
              style={{ backgroundColor: RED }}
              aria-hidden
            />
            <h2 className="font-heading text-2xl font-black text-[var(--text)] sm:text-3xl">
              ¿Qué tipo de salvaescalera necesitas?
            </h2>
            <p className="mt-3 text-sm text-[var(--muted-fg)] sm:text-base">
              Tenemos la solución perfecta para tu escalera.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {stairliftOptions.map((option) => (
              <article
                key={option.id}
                className="overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm"
              >
                <div className="grid sm:grid-cols-[minmax(0,42%)_1fr]">
                  <div className="relative min-h-[200px] w-full sm:min-h-[280px]">
                    <Image
                      src={option.image}
                      alt={option.imageAlt}
                      fill
                      className="object-cover object-center sm:rounded-none"
                      sizes="(max-width: 640px) 100vw, 42vw"
                    />
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <h3
                      className="font-heading text-lg font-black sm:text-xl"
                      style={{ color: option.accent }}
                    >
                      {option.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-fg)]">
                      {option.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {option.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2.5 text-sm font-medium text-[var(--text)]"
                        >
                          <Check
                            className="h-4 w-4 shrink-0"
                            style={{ color: option.accent }}
                            strokeWidth={3}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={option.href}
                      className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-xs font-black uppercase tracking-wide text-white transition hover:opacity-90"
                      style={{ backgroundColor: option.accent }}
                    >
                      {option.cta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Confianza + CTA */}
      <section
        className="my-8 py-8 sm:my-10 sm:py-10 lg:my-12"
        style={{ backgroundColor: RED }}
      >
        <div className={container}>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
            <div className="max-w-md px-4 sm:px-6 md:px-8 lg:max-w-lg lg:px-10 xl:px-12">
              <div className="flex items-center gap-2.5">
                <span
                  className="block h-0.5 w-8 rounded-full bg-white/90"
                  aria-hidden
                />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/90">
                  Confianza que nos respalda
                </p>
              </div>
              <h2 className="font-heading mt-3 text-xl font-black leading-tight text-white sm:text-2xl lg:text-[1.65rem]">
                Más de 10 años mejorando la accesibilidad en Perú
              </h2>

              <ul className="mt-5 grid gap-4 sm:grid-cols-3 sm:gap-3">
                {trustPillars.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex flex-col gap-2">
                    <Icon
                      className="h-7 w-7 text-white"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <span className="text-[11px] font-medium leading-snug text-white/95 sm:text-xs">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 sm:gap-2.5 lg:gap-3 lg:overflow-visible lg:pr-4">
              {trustGallery.map((img) => (
                <div
                  key={img.src}
                  className="relative h-44 w-36 shrink-0 overflow-hidden rounded-xl sm:h-48 sm:w-40 lg:h-52 lg:w-44 xl:w-48"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 144px, 192px"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-5 rounded-2xl bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
            <div className="min-w-0 flex-1">
              <h3 className="font-heading text-xl font-black leading-tight text-[var(--text)] sm:text-2xl">
                Agenda tu{" "}
                <span style={{ color: RED }}>evaluación gratuita</span> hoy
                mismo
              </h3>
              <p className="mt-2 text-sm text-[var(--muted-fg)] sm:whitespace-nowrap">
                Un especialista visitará tu hogar para recomendarte la mejor solución sin costo.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:shrink-0">
              <a
                href="#evaluacion"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-xs font-black uppercase tracking-wide text-white transition hover:opacity-90"
                style={{ backgroundColor: RED }}
              >
                <Calendar className="h-4 w-4" />
                Agendar evaluación gratis
              </a>
              <a
                href="https://wa.me/51905455235"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-xs font-black uppercase tracking-wide text-white transition hover:opacity-90"
                style={{ backgroundColor: WA_GREEN }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario + FAQ */}
      <section
        id="evaluacion"
        className="scroll-mt-28 bg-white pb-12 pt-14 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20"
      >
        <div className={cn(container, "grid gap-12 lg:grid-cols-2 lg:gap-16")}>
          <div>
            <h2 className="font-heading text-2xl font-black text-[var(--text)] sm:text-3xl">
              Solicita tu evaluación sin costo
            </h2>
            <p className="mt-3 text-sm text-[var(--muted-fg)]">
              Completa el formulario y un asesor te contactará.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
                }
                placeholder="Nombre completo"
                required
                className={inputClass}
              />
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
                }
                placeholder="Teléfono / WhatsApp"
                required
                className={inputClass}
              />
              <select
                name="district"
                value={form.district}
                onChange={(e) =>
                  setForm((f) => ({ ...f, district: e.target.value }))
                }
                required
                className={inputClass}
              >
                <option value="">Distrito</option>
                <option value="lima">Lima</option>
                <option value="miraflores">Miraflores</option>
                <option value="san-isidro">San Isidro</option>
                <option value="surco">Santiago de Surco</option>
                <option value="la-molina">La Molina</option>
                <option value="otro">Otro</option>
              </select>
              <select
                name="stairType"
                value={form.stairType}
                onChange={(e) =>
                  setForm((f) => ({ ...f, stairType: e.target.value }))
                }
                required
                className={inputClass}
              >
                <option value="">Tipo de escalera</option>
                <option value="recta">Recta</option>
                <option value="curva">Curva</option>
                <option value="no-se">No estoy seguro</option>
              </select>
              <button
                type="submit"
                className="w-full rounded-xl py-3.5 text-sm font-bold text-white transition hover:opacity-90 active:scale-[0.99]"
                style={{ backgroundColor: RED }}
              >
                Quiero mi evaluación gratis
              </button>
            </form>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-black text-[var(--text)] sm:text-3xl">
              Preguntas frecuentes
            </h2>
            <ul className="mt-8 divide-y divide-gray-200">
              {faqItems.map((item) => {
                const isOpen = openFaq === item.q;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : item.q)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-[var(--text)] sm:text-[15px]">
                        {item.q}
                      </span>
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--muted)] text-[var(--text)]"
                        aria-hidden
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </span>
                    </button>
                    {isOpen && (
                      <p className="pb-4 text-sm leading-relaxed text-[var(--muted-fg)]">
                        {item.a}
                      </p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
