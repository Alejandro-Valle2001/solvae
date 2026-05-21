"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const contacts = [
  {
    id: "comercial",
    name: "Asesoría Comercial",
    sub: "Te asesoramos",
    phone: "51905455235",
    message: "Hola, me gustaría recibir asesoría comercial.",
  },
  {
    id: "postventa",
    name: "Post Venta",
    sub: "Te asistimos",
    phone: "51905455235",
    message: "Hola, necesito asistencia de post venta.",
  },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.5.672 4.844 1.844 6.863L2 30l7.344-1.813A13.925 13.925 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.5a11.44 11.44 0 0 1-5.813-1.594l-.418-.25-4.356 1.075 1.1-4.238-.275-.437A11.46 11.46 0 0 1 4.5 16C4.5 9.648 9.648 4.5 16 4.5S27.5 9.648 27.5 16 22.352 27.5 16 27.5Zm6.287-8.575c-.344-.175-2.044-1.006-2.363-1.119-.318-.113-.55-.175-.78.175-.232.35-.9 1.12-1.1 1.35-.2.232-.4.257-.744.088-.344-.175-1.45-.537-2.762-1.712-1.02-.913-1.712-2.044-1.912-2.388-.2-.344-.02-.531.15-.706.155-.156.344-.406.519-.607.175-.2.231-.35.35-.582.118-.232.056-.438-.025-.613-.087-.175-.78-1.875-1.069-2.569-.281-.675-.568-.581-.78-.594a14.4 14.4 0 0 0-.663-.012c-.23 0-.606.087-.925.437-.318.35-1.212 1.182-1.212 2.882s1.24 3.344 1.413 3.575c.175.231 2.437 3.718 5.906 5.212.825.357 1.469.57 1.969.731.825.263 1.575.225 2.169.138.663-.1 2.044-.838 2.331-1.644.288-.806.288-1.5.2-1.644-.081-.143-.313-.225-.656-.4Z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="wa-widget"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5"
        >
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="w-[15.5rem] overflow-hidden rounded-xl bg-white shadow-[0_4px_24px_-6px_rgba(0,0,0,0.18)] ring-1 ring-black/[0.05]"
              >
                <div className="border-b border-black/[0.05] px-3.5 py-2.5">
                  <p className="text-[11px] text-gray-500">Elige un canal</p>
                </div>
                <ul className="p-1.5">
                  {contacts.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`https://wa.me/${c.phone}?text=${encodeURIComponent(c.message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-gray-50"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-[13px] font-semibold text-gray-800">
                            {c.name}
                          </span>
                          <span className="block text-[11px] text-gray-400">
                            {c.sub}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg bg-white px-3.5 py-2 text-left shadow-[0_2px_14px_-4px_rgba(0,0,0,0.2)] ring-1 ring-black/[0.04] transition-shadow hover:shadow-[0_4px_18px_-4px_rgba(0,0,0,0.22)]"
              aria-expanded={open}
              aria-haspopup="true"
            >
              <span className="block text-[11px] leading-tight text-gray-500">
                ¿Necesitas ayuda?
              </span>
              <span className="mt-0.5 block text-[13px] font-bold leading-tight text-gray-800">
                Chatea con Nosotros
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_3px_14px_-2px_rgba(37,211,102,0.55)] transition hover:bg-[#20bd5a]"
              aria-label={open ? "Cerrar opciones de WhatsApp" : "Abrir WhatsApp"}
            >
              <WhatsAppIcon className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
