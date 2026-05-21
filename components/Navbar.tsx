"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Menu } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProductsMenuDesktop, ProductsMenuMobile } from "@/components/ProductsMenu";
import { fadeInFromTop } from "@/lib/animations";

const links = [
  { href: "/#nosotros", label: "Nosotros", id: "nosotros" },
  { href: "/#clientes", label: "Clientes", id: "clientes" },
  { href: "/#servicios", label: "Servicios", id: "servicios" },
  { href: "/#noticias", label: "Noticias", id: "noticias" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.header
      initial="hidden"
      animate={controls}
      variants={fadeInFromTop}
      className="bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 w-full max-w-none items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/solvae.png"
            alt="Solvae"
            width={170}
            height={44}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          <Link
            href="/#nosotros"
            className="text-sm text-[var(--muted-fg)] transition-colors hover:text-[var(--text)]"
          >
            Nosotros
          </Link>
          <ProductsMenuDesktop />
          <Link
            href="/#clientes"
            className="text-sm text-[var(--muted-fg)] transition-colors hover:text-[var(--text)]"
          >
            Clientes
          </Link>
          <Link
            href="/#servicios"
            className="text-sm text-[var(--muted-fg)] transition-colors hover:text-[var(--text)]"
          >
            Servicios
          </Link>
          <Link
            href="/#noticias"
            className="text-sm text-[var(--muted-fg)] transition-colors hover:text-[var(--text)]"
          >
            Noticias
          </Link>
        </nav>

        <Link
          href="/#contacto"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "hidden h-11 rounded-full border-transparent bg-[var(--cta-red)] px-6 font-bold text-[var(--cta-red-fg)] md:inline-flex",
            "transition-colors hover:bg-[var(--cta-red-hover)] hover:text-[var(--cta-red-fg)]"
          )}
        >
          Contáctanos
        </Link>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] bg-white md:hidden">
            <Menu className="h-5 w-5 text-[var(--text)]" />
            <span className="sr-only">Abrir menú</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)]">
            <SheetHeader>
              <SheetTitle className="font-heading text-left">Menú</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/#nosotros"
                onClick={() => setOpen(false)}
                className="text-base text-[var(--muted-fg)] hover:text-[var(--text)]"
              >
                Nosotros
              </Link>
              <ProductsMenuMobile onNavigate={() => setOpen(false)} />
              {links
                .filter((l) => l.id !== "nosotros")
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base text-[var(--muted-fg)] hover:text-[var(--text)]"
                  >
                    {l.label}
                  </Link>
                ))}
              <Link
                href="#contacto"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "mt-2 h-11 w-full justify-center rounded-full border-transparent bg-[var(--cta-red)] px-6 font-bold text-[var(--cta-red-fg)] hover:bg-[var(--cta-red-hover)] hover:text-[var(--cta-red-fg)]"
                )}
              >
                Contáctanos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
