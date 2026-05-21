"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { productMenuLinks } from "@/lib/products";
import { cn } from "@/lib/utils";

const linkClass =
  "block whitespace-nowrap px-4 py-2 text-sm text-[var(--text)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--text)] outline-none focus-visible:bg-[var(--muted)]";

export function ProductsMenuDesktop() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/#productos"
        className="inline-flex items-center gap-1 text-sm text-[var(--muted-fg)] transition-colors hover:text-[var(--text)] outline-none"
        aria-expanded={open}
        aria-haspopup="true"
      >
        Productos
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </Link>

      {open && (
        <div className="absolute left-0 top-full z-50 pt-2">
          <ul className="w-max min-w-[18rem] overflow-hidden rounded-lg bg-white py-1 shadow-[0_8px_30px_-6px_rgba(0,0,0,0.15)]">
            {productMenuLinks.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function ProductsMenuMobile({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="flex w-full items-center justify-between text-base text-[var(--muted-fg)] hover:text-[var(--text)] outline-none"
        aria-expanded={expanded}
      >
        Productos
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            expanded && "rotate-180"
          )}
        />
      </button>
      {expanded && (
        <ul className="mt-2 space-y-1 pl-2">
          {productMenuLinks.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block whitespace-nowrap py-1.5 text-sm text-[var(--muted-fg)] hover:text-[var(--text)] outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
