export interface StoreConfig {
  name: string;
  subname: string;
  tagline: string;
  city: string;
  state: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
    full: string;
    plusCode: string;
  };
  whatsapp: {
    display: string;
    raw: string; // wa.me: 5553999424794
  };
  mapsUrl: string;
  rating: {
    score: number;
    count: number;
  };
  hours: {
    statusNote: string;
    detail: string;
  };
  features: string[];
  badges: string[];
  about: {
    short: string;
    editorial: string;
  };
  categories: Array<{
    id: string;
    label: string;
    description: string;
  }>;
  types: Array<{
    id: string;
    label: string;
  }>;
}

export const STORE_CONFIG: StoreConfig = {
  name: "CHILI",
  subname: "Loja de Roupas",
  tagline: "Masculino & Feminino no Centro de Bagé.",
  city: "Bagé",
  state: "RS",
  address: {
    street: "R. Marcílio Dias, 883",
    neighborhood: "Centro",
    city: "Bagé",
    state: "RS",
    postalCode: "96400-020",
    full: "R. Marcílio Dias, 883 - Centro, Bagé - RS, 96400-020",
    plusCode: "MV9X+76 Centro, Bagé - RS",
  },
  whatsapp: {
    display: "(53) 99942-4794",
    raw: "5553999424794",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=R.+Marc%C3%ADlio+Dias,+883+-+Centro,+Bag%C3%A9+-+RS,+96400-020",
  rating: {
    score: 4.9,
    count: 54,
  },
  hours: {
    statusNote: "Fechado ⋅ Abre às 09:00 de segunda",
    detail: "Atendimento na loja e pelo WhatsApp oficial",
  },
  features: [
    "Compras na loja",
    "Com recolha móvel",
    "Entrega",
  ],
  badges: [
    "Adequado para LGBTQ+",
    "Masculino & Feminino",
    "Atendimento via WhatsApp",
  ],
  about: {
    short: "Loja de roupas com curadoria de moda masculina, feminina e unissex no Centro de Bagé. Espaço acolhedor e inclusivo.",
    editorial: "A CHILI reúne estilo contemporâneo, atitude e praticidade no coração de Bagé. Com atendimento dedicado, compras presenciais, opção de recolha móvel e entregas, nossa vitrine digital permite que você escolha suas peças e tire dúvidas instantaneamente pelo WhatsApp.",
  },
  categories: [
    { id: "Feminino", label: "Feminino", description: "Vestidos, blusas, alfaiataria e peças casuais contemporâneas." },
    { id: "Masculino", label: "Masculino", description: "Camisas, jaquetas, bermudas e alfaiataria moderna." },
    { id: "Unissex", label: "Unissex", description: "Modelagens livres, versáteis e democráticas." },
    { id: "Acessórios", label: "Acessórios", description: "Bolsas, cintos e complementos de estilo." },
  ],
  types: [
    { id: "Camisas", label: "Camisas" },
    { id: "Jaquetas", label: "Jaquetas" },
    { id: "Vestidos", label: "Vestidos" },
    { id: "Calças", label: "Calças" },
    { id: "Blusas", label: "Blusas" },
    { id: "Conjuntos", label: "Conjuntos" },
    { id: "Acessórios", label: "Acessórios" },
  ],
};
