import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SillaSalvaescaleraContent } from "@/components/silla-salvaescalera/SillaSalvaescaleraContent";
import { TopBar } from "@/components/TopBar";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export const metadata: Metadata = {
  title: "Sillas Salvaescaleras en Lima | Solvae",
  description:
    "Sillas salvaescaleras en Lima: instalación rápida y segura, evaluación gratuita en tu hogar y equipos europeos certificados. Solicita tu cotización con Solvae.",
};

export default function SillaSalvaescaleraPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>

      <SillaSalvaescaleraContent />

      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
