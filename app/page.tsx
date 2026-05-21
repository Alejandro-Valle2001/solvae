import { Navbar } from "@/components/Navbar";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { MetricsSection } from "@/components/MetricsSection";
import { Purpose } from "@/components/Purpose";
import { Products } from "@/components/Products";
import { Services } from "@/components/Services";
import { ClientsScroll } from "@/components/ClientsScroll";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <Hero />
      <MetricsSection />
      <Purpose />
      <Products />
      <Services />
      <ClientsScroll />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
