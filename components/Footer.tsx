import Image from "next/image";
import Link from "next/link";
import type { SVGProps } from "react";

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.793-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYoutube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const productos = [
  "Ascensores",
  "Elevadores verticales y domésticos",
  "Sillas salvaescaleras",
  "Plataformas salvaescaleras",
  "Montaescaleras",
  "Montavehículos",
  "Sistemas de parqueo",
];

const servicios = [
  "Instalación",
  "Modernización",
  "Mantenimiento",
  "Consultoría",
  "Certificaciones",
];

const empresa = [
  "Proyectos",
  "Nosotros",
  "Recursos",
  "FAQs",
  "Portafolio",
];

const social = [
  { name: "Facebook", href: "#", Icon: IconFacebook },
  { name: "Instagram", href: "#", Icon: IconInstagram },
  { name: "LinkedIn", href: "#", Icon: IconLinkedin },
  { name: "YouTube", href: "#", Icon: IconYoutube },
];

export function Footer() {
  return (
    <footer className="bg-[var(--cta-red)] pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <div>
              <Image
                src="/images/LOGO-COMPLETO-EN-BLANCO-768x217.png"
                alt="Solvae"
                width={210}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Elevando Tu Mundo Con Tecnología De Punta
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/75">
              <li>
                <a href="tel:+51905455235" className="hover:text-white">
                  (+51) 905 455 235
                </a>
              </li>
              <li>
                <a href="tel:+016329203" className="hover:text-white">
                  (+01) 632 9203
                </a>
              </li>
              <li>
                <a href="mailto:atencionalcliente@solvae.pe" className="hover:text-white">
                  atencionalcliente@solvae.pe
                </a>
              </li>
              <li className="text-white/60">Jr. Juan Francisco Rivas 947, La Victoria, Lima.</li>
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold text-white">Productos</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {productos.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold text-white">Servicios</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {servicios.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold text-white">Empresa</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              {empresa.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-heading font-semibold text-white">Redes sociales</p>
            <ul className="mt-4 space-y-3 text-sm">
              {social.map(({ name, href, Icon }) => (
                <li key={name}>
                  <Link href={href} className="inline-flex items-center gap-2 text-white/75 hover:text-white">
                    <Icon className="h-4 w-4 shrink-0" />
                    <span>{name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Solvae S.A.C. Todos los derechos reservados.</p>
          <p className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-white">Política de Privacidad</Link>
            <span aria-hidden className="text-white/30">|</span>
            <Link href="#" className="hover:text-white">Términos y Condiciones</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
