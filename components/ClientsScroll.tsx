import Image from "next/image";

const all = [
  "16-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "17-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "18-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "19-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "2-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "20-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "21-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "39da674d-aa76-442a-82e5-131471010e9a-rei4xwcvm400ip9esiixq3q4khz9twqijx5eg73ws8.jpg",
  "7-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "8-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "9-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "Binda-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "Lider-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "asociacion-ronald-mcdonalds-rei5jgrkf9iuwlxmuu4rxnsv8rogfwcsuo0gur4q0o.png",
  "aurora-grupo-inmobiliario-rei52mhnz4gww4ea722eresk38opj4hxjb8aba3ni0.png",
  "cientifica-rei5v088c1blg965gtpvjqylt2soy465rsd2z20pmg.png",
  "evergarden-rei5e0baqw1xi3uzpz7qyjdj38kqr5owfnnzjx8054.png",
  "gdc-rei5cq97g0avp7pw6xb12czxzcvr9zm1xbp71d4am0.png",
  "inarco-rei4y5r9igcvqsvr9ml7f1cqicoxyvrtx7o98ypz20.png",
  "jjc-rei595hbfpelimwy2vn52rhslkigzgetrmboagf8ag.png",
  "logo-ESPACIO-ESTRUCTURAS-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-besco-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-capac-scaled-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "logo-conforta-scaled-rda2lj5aq0y8w4cmjlx0bp8gn7unl5h7vqxmog94mw.png",
  "logo-cosapi-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-desarrolladora-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-galeon-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "logo-tale-scaled-rda2li7gj6wykidzp3idr7h01tzadgdhjma576ait4.png",
  "municipalidad-de-lima-rei5lkwhsuf310v1i91k1ml7cz96rdr254usq5zu0o.png",
  "rumi-rei5bddlkmfyxhow4c6fgpbz3bko5q80elry2z4rlk.png",
  "sanna-rei5x76oa4bojhzgnrujd71bpfziwovm2n5vaarn3s.png",
  "sise-rei5tsznlnoem6wyhb11d1vehcpt41ei9ucqwbstko.png",
  "tdc-rei56xl1asd83s501f3uotnm3tg9t6ln4mvehxpozc.png",
  "usil-rei5p5odt5bd7lnzmapg183cqrmh1wyaau8bh2owc8.png",
  "utp-rei5ndrcwevva48tzj2tbo80ckdiihwje1vau9bo3c.png",
];

/* Distribuir en 3 columnas */
const col1 = all.filter((_, i) => i % 3 === 0);
const col2 = all.filter((_, i) => i % 3 === 1);
const col3 = all.filter((_, i) => i % 3 === 2);

function LogoCard({ file }: { file: string }) {
  return (
    <div className="flex h-32 w-full items-center justify-center rounded-2xl bg-white px-5 py-5 shadow-sm ring-1 ring-black/[0.06]">
      <div className="relative h-14 w-full">
        <Image
          src={`/clientes/${file}`}
          alt={file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " ").slice(0, 80)}
          fill
          className="object-contain object-center"
          sizes="180px"
        />
      </div>
    </div>
  );
}

const FADE =
  "linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)";

function ScrollColumn({
  logos,
  direction,
}: {
  logos: string[];
  direction: "up" | "down";
}) {
  const doubled = [...logos, ...logos];
  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{
        height: "460px",
        WebkitMaskImage: FADE,
        maskImage: FADE,
      }}
    >
      <div
        className={`flex flex-col gap-3 ${
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down"
        }`}
      >
        {doubled.map((file, idx) => (
          <LogoCard key={`${file}-${idx}`} file={file} />
        ))}
      </div>
    </div>
  );
}

export function ClientsScroll() {
  return (
    <section className="bg-[var(--bg)] px-4 py-14 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="overflow-hidden rounded-2xl bg-[var(--muted)] p-8 ring-1 ring-black/[0.06] lg:p-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          {/* Texto izquierda — 40% */}
          <div className="shrink-0 lg:w-[40%]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--cta-red)]">
              Confían en nosotros
            </p>
            <h2 className="font-heading mt-4 text-3xl font-black leading-tight tracking-tight text-[var(--text)] sm:text-4xl">
              Nuestros Clientes
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted-fg)] sm:text-base">
              Más de 1,600 empresas, instituciones y proyectos en todo el país
              confían en Solvae para sus soluciones de movilidad vertical y
              accesibilidad.
            </p>
          </div>

          {/* Columnas de logos — 60% */}
          <div className="flex min-w-0 lg:w-[60%] gap-3 overflow-hidden">
            <ScrollColumn logos={col1} direction="down" />
            <ScrollColumn logos={col2} direction="up" />
            <ScrollColumn logos={col3} direction="down" />
          </div>
        </div>
      </div>
    </section>
  );
}
