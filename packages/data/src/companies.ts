import type { Company } from "@repo/types";

export const companies: Company[] = [
  {
    id: "ifood",
    name: "iFood",
    slug: "ifood",
    logo: "/logos/ifood.png",
    description:
      "Maior plataforma de delivery da América Latina, conectando restaurantes e clientes com tecnologia de ponta.",
    industry: "Food Tech",
    website: "https://ifood.com.br",
  },
  {
    id: "boticario",
    name: "O Boticário",
    slug: "boticario",
    logo: "/logos/boticario.png",
    description:
      "Uma das maiores redes de cosméticos e perfumaria do Brasil, com forte presença digital.",
    industry: "Beleza e Cosméticos",
    website: "https://oboticario.com.br",
  },
  {
    id: "itau",
    name: "Itaú",
    slug: "itau",
    logo: "/logos/itau.png",
    description:
      "Um dos maiores bancos privados da América Latina, em transformação digital constante.",
    industry: "Serviços Financeiros",
    website: "https://itau.com.br",
  },
  {
    id: "magalu",
    name: "Magalu",
    slug: "magalu",
    logo: "/logos/magalu.png",
    description:
      "Líder em e-commerce e varejo omnichannel no Brasil, com foco em inovação e tecnologia.",
    industry: "Varejo",
    website: "https://magazineluiza.com.br",
  },
  {
    id: "raizen",
    name: "Raízen",
    slug: "raizen",
    logo: "/logos/raizen.png",
    description:
      "Empresa de energia e biocombustíveis resultante da joint venture entre Cosan e Shell.",
    industry: "Energia",
    website: "https://raizen.com.br",
  },
];
