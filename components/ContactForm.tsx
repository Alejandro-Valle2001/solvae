"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { fadeUp } from "@/lib/animations";

export function ContactForm() {
  const [serviceType, setServiceType] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("fullName") as HTMLInputElement)
        .value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      serviceType,
      budget: (form.elements.namedItem("budget") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };
    console.log("Contact form", data);
  }

  return (
    <section id="contacto" className="scroll-mt-24 bg-white py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16"
      >
        <div>
          <h2 className="font-heading whitespace-pre-line text-4xl font-black leading-tight text-[var(--text)]">
            ¿Listo para{"\n"}Colaborar{"\n"}Con Nosotros?
          </h2>
          <p className="mt-6 max-w-md text-[var(--muted-fg)]">
            Ya sea ascensor, salvaescalera, montaescalera, parqueo u otro
            sistema — cuéntanos tu obra, nivel de uso y plazos. Te respondemos
            con una propuesta técnica y económica clara.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fullName">Tu nombre completo</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Ej. María González"
                required
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Nombre de empresa</Label>
              <Input
                id="company"
                name="company"
                placeholder="Razón social o proyecto"
                className="h-11"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono / WhatsApp</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+51 999 000 000"
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="hola@empresa.com"
                required
                className="h-11"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="service">
                Servicio o producto de interés (opcional)
              </Label>
              <Select
                value={serviceType}
                onValueChange={(v) => setServiceType(v)}
              >
                <SelectTrigger id="service" className="h-11 w-full">
                  <SelectValue placeholder="Selecciona una opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="instalacion">Instalación</SelectItem>
                  <SelectItem value="modernizacion">Modernización</SelectItem>
                  <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                  <SelectItem value="ascensores">Ascensores</SelectItem>
                  <SelectItem value="elevadores_vert_dom">
                    Elevadores verticales o domésticos
                  </SelectItem>
                  <SelectItem value="sillas_salva">
                    Sillas salvaescaleras
                  </SelectItem>
                  <SelectItem value="plataformas_salva">
                    Plataformas salvaescaleras
                  </SelectItem>
                  <SelectItem value="montaescaleras">Montaescaleras</SelectItem>
                  <SelectItem value="montavehiculos">
                    Montavehículos
                  </SelectItem>
                  <SelectItem value="parqueos">Sistemas de parqueo</SelectItem>
                  <SelectItem value="consultoria">
                    Consultoría u otro
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="budget">Presupuesto aproximado</Label>
              <Input
                id="budget"
                name="budget"
                placeholder="USD o PEN"
                className="h-11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Cuéntanos más sobre tu proyecto</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Recorrido, tipo de equipo, accesibilidad requerida, fotos del sitio…"
              className="min-h-[120px]"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="pt-2"
          >
            <Button
              type="submit"
              className="h-12 w-full rounded-full bg-[var(--primary)] text-[var(--primary-fg)] hover:bg-[var(--primary)]/90"
            >
              Enviar Solicitud
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
}
