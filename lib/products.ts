export type ProductLink = {
  id: string;
  model: string;
  name: string;
  description: string;
  href: string;
  underConstruction?: boolean;
};

export type ProductGroup = {
  id: string;
  label: string;
  items: ProductLink[];
};

export const productGroups: ProductGroup[] = [
  {
    id: "sillas",
    label: "Sillas Salvaescaleras",
    items: [
      {
        id: "superglide-130",
        model: "Superglide 130",
        name: "Silla Salvaescalera Recta",
        description: "La solución versátil para escaleras rectas.",
        href: "/silla-salvaescalera",
      },
      {
        id: "superglide-180",
        model: "Superglide 180",
        name: "Silla Salvaescalera Curva",
        description:
          "La solución versátil para escaleras curvas o con descansos.",
        href: "/silla-salvaescalera",
      },
    ],
  },
  {
    id: "plataformas",
    label: "Plataformas Salvaescaleras",
    items: [
      {
        id: "delta",
        model: "Delta",
        name: "Plataforma Salvaescalera Recta",
        description:
          "Diseñada para escaleras rectas, con un sistema simple, confiable y fácil de instalar.",
        href: "/#productos",
      },
      {
        id: "stratos",
        model: "Stratos",
        name: "Plataforma Salvaescalera Curva",
        description:
          "Especial para escaleras curvas o con descansos, con mayor flexibilidad, diseño moderno y acabados de alta calidad.",
        href: "/#productos",
      },
    ],
  },
  {
    id: "elevador-vertical",
    label: "Elevador Vertical",
    items: [
      {
        id: "ecolift-lite",
        model: "Ecolift LITE",
        name: "Ecolift LITE",
        description: "Elevador vertical compacto.",
        href: "/#productos",
      },
      {
        id: "ecolift-pro",
        model: "Ecolift PRO",
        name: "Ecolift PRO",
        description: "Elevador vertical de mayor capacidad.",
        href: "/#productos",
      },
      {
        id: "ecolift-plus",
        model: "Ecolift PLUS",
        name: "Ecolift PLUS",
        description: "Elevador vertical premium.",
        href: "/#productos",
      },
    ],
  },
  {
    id: "otros",
    label: "Más equipos",
    items: [
      {
        id: "elevador-domiciliario",
        model: "Elevador domiciliario",
        name: "Elevador Domiciliario",
        description:
          "Sistema de transporte vertical diseñado específicamente para viviendas particulares.",
        href: "/#productos",
      },
      {
        id: "roby-t09",
        model: "Roby T09",
        name: "Montaescalera",
        description:
          "Equipo móvil con orugas para transportar sillas de ruedas por escaleras rectas. No requiere instalación fija.",
        href: "/#productos",
      },
      {
        id: "scissor-lift-car",
        model: "Scissor Lift Car Lift",
        name: "Sistema de Parqueo",
        description: "Sistema de parqueo automatizado.",
        href: "/#productos",
      },
      {
        id: "scissor-lift",
        model: "Scissor Lift",
        name: "Scissor Lift",
        description: "Montavehículo tipo tijera.",
        href: "/#productos",
      },
      {
        id: "car-lift",
        model: "Car Lift",
        name: "Car Lift",
        description: "Montavehículo tipo elevador de autos.",
        href: "/#productos",
      },
      {
        id: "ascensores",
        model: "Ascensores",
        name: "Ascensores",
        description: "Página en construcción.",
        href: "/#productos",
        underConstruction: true,
      },
    ],
  },
];

/** Tarjetas destacadas en la sección Nuestros Equipos (home). */
export const featuredProducts = [
  {
    id: "silla-salvaescalera",
    name: "Silla Salvaescalera",
    description: "Ideal para escaleras rectas o curvas en entornos residenciales.",
    src: "/images/Acorn-130-3-scaled.jpg",
    href: "/silla-salvaescalera",
  },
  {
    id: "plataforma-salvaescalera",
    name: "Plataforma Salvaescalera",
    description: "Acceso seguro para personas con movilidad reducida.",
    src: "/images/plataforma-salvaescalera-Delta.jpeg",
    href: "/#productos",
  },
  {
    id: "plataforma-vertical",
    name: "Plataforma Vertical",
    description: "Diseño sencillo, acabado moderno y seguro.",
    src: "/images/vertical-1-1.png",
    href: "/#productos",
  },
  {
    id: "montavehiculos",
    name: "Montavehículos",
    description: "Solución eficiente para parqueos y edificios comerciales.",
    src: "/images/montavehiculo-3-1.png",
    href: "/#productos",
  },
] as const;

/** Enlaces del menú Productos (solo etiqueta + href). */
export const productMenuLinks = productGroups.flatMap((group) =>
  group.items.map((item) => ({
    id: item.id,
    label: item.name,
    href: item.href,
  }))
);
