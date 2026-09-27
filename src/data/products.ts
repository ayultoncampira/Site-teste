export interface Product {
  id: string;
  name: string;
  category: string; // e.g. "Masculino", "Feminino", "Unissex", "Acessórios"
  audience: string;
  type: string; // e.g. "Camisas", "Jaquetas", "Vestidos", "Calças", "Blusas", "Conjuntos", "Acessórios"
  price: number | null; // null representa "Consulte o valor"
  previousPrice: number | null;
  sizes: string[];
  colors: string[];
  description: string;
  images: string[];
  isNew: boolean;
  isFeatured: boolean;
  isPromotion: boolean;
}

export const DEMO_PRODUCTS: Product[] = [
  {
    id: "chili-01",
    name: "Peça Demonstrativa 01 · Jaqueta Denim Vintage Wash",
    category: "Unissex",
    audience: "Masculino & Feminino",
    type: "Jaquetas",
    price: 249.90,
    previousPrice: 299.90,
    sizes: ["P", "M", "G", "GG"],
    colors: ["Azul Médio", "Preto Estonado"],
    description: "Peça demonstrativa com estética contemporânea e corte solto unissex. Algodão encorpado com lavagem vintage exclusiva e botões em metal envelhecido.",
    images: [
      "/images/products/jaqueta-denim-unissex.jpg",
      "/images/editorial/chili-editorial.jpg",
    ],
    isNew: true,
    isFeatured: true,
    isPromotion: true,
  },
  {
    id: "chili-02",
    name: "Peça Demonstrativa 02 · Camisa Linho & Algodão Masculina",
    category: "Masculino",
    audience: "Masculino",
    type: "Camisas",
    price: 179.90,
    previousPrice: null,
    sizes: ["2", "3", "4", "5"],
    colors: ["Verde Oliva Suave", "Off-White", "Areia"],
    description: "Peça demonstrativa masculina. Toque fresco e respirável de linho com corte moderno, colarinho estruturado e caimento impecável para dias quentes ou meia-estação.",
    images: [
      "/images/products/camisa-linho-masculina.jpg",
    ],
    isNew: true,
    isFeatured: true,
    isPromotion: false,
  },
  {
    id: "chili-03",
    name: "Peça Demonstrativa 03 · Blazer Alfaiataria Estruturado",
    category: "Feminino",
    audience: "Feminino",
    type: "Jaquetas",
    price: 289.90,
    previousPrice: 349.90,
    sizes: ["P", "M", "G"],
    colors: ["Marfim", "Preto"],
    description: "Peça demonstrativa feminina. Corte de alfaiataria atemporal com acabamento refinado, lapela clássica e forro acetinado.",
    images: [
      "/images/products/blazer-alfaiataria.jpg",
    ],
    isNew: true,
    isFeatured: true,
    isPromotion: true,
  },
  {
    id: "chili-04",
    name: "Peça Demonstrativa 04 · Calça Pantalona Alfaiataria",
    category: "Feminino",
    audience: "Feminino",
    type: "Calças",
    price: 199.90,
    previousPrice: null,
    sizes: ["36", "38", "40", "42"],
    colors: ["Bege Areia", "Preto", "Terracota"],
    description: "Peça demonstrativa feminina. Cintura alta estruturada com caimento amplo e fluido em tecido encorpado de alta durabilidade.",
    images: [
      "/images/products/calca-pantalona.jpg",
    ],
    isNew: false,
    isFeatured: false,
    isPromotion: false,
  },
  {
    id: "chili-05",
    name: "Peça Demonstrativa 05 · Vestido Midi Linho Natural",
    category: "Feminino",
    audience: "Feminino",
    type: "Vestidos",
    price: 189.90,
    previousPrice: 229.90,
    sizes: ["P", "M", "G"],
    colors: ["Bege Natural", "Off-White"],
    description: "Peça demonstrativa feminina. Modelagem fluida contemporânea com fenda sutil e toque nobre de linho com algodão.",
    images: [
      "/images/products/vestido-midi.jpg",
    ],
    isNew: true,
    isFeatured: true,
    isPromotion: true,
  },
  {
    id: "chili-06",
    name: "Peça Demonstrativa 06 · Blusa Cetim Minimal",
    category: "Feminino",
    audience: "Feminino",
    type: "Blusas",
    price: 119.90,
    previousPrice: 149.90,
    sizes: ["P", "M", "G"],
    colors: ["Preto Ébano", "Pérola"],
    description: "Peça demonstrativa feminina com toque acetinado suave e caimento leve para composições urbanas ou noturnas.",
    images: [
      "/images/products/blusa-cetim.jpg",
    ],
    isNew: false,
    isFeatured: false,
    isPromotion: true,
  },
  {
    id: "chili-07",
    name: "Peça Demonstrativa 07 · Trench Coat Meia-Estação",
    category: "Unissex",
    audience: "Masculino & Feminino",
    type: "Jaquetas",
    price: 389.90,
    previousPrice: null,
    sizes: ["P", "M", "G"],
    colors: ["Caramelo", "Areia"],
    description: "Peça demonstrativa unissex atemporal com botões frontais e faixa ajustável na cintura.",
    images: [
      "/images/products/trench-coat.jpg",
    ],
    isNew: true,
    isFeatured: true,
    isPromotion: false,
  },
  {
    id: "chili-08",
    name: "Peça Demonstrativa 08 · Suéter Canelado Gola Alta",
    category: "Unissex",
    audience: "Masculino & Feminino",
    type: "Blusas",
    price: 169.90,
    previousPrice: 199.90,
    sizes: ["P", "M", "G"],
    colors: ["Off-White", "Caramelo"],
    description: "Peça demonstrativa com trama confortável canelada e gola alta flexível.",
    images: [
      "/images/products/tricot-gola.jpg",
    ],
    isNew: false,
    isFeatured: false,
    isPromotion: true,
  },
  {
    id: "chili-09",
    name: "Peça Demonstrativa 09 · Bolsa Tote Couro Legítimo",
    category: "Acessórios",
    audience: "Unissex",
    type: "Acessórios",
    price: 219.90,
    previousPrice: null,
    sizes: ["Único"],
    colors: ["Conhaque", "Preto"],
    description: "Peça demonstrativa de acessório em couro natural com alças reforçadas e excelente espaço interno.",
    images: [
      "/images/products/bolsa-couro.jpg",
    ],
    isNew: true,
    isFeatured: false,
    isPromotion: false,
  },
  {
    id: "chili-10",
    name: "Peça Demonstrativa 10 · Conjunto Alfaiataria Edição Especial",
    category: "Feminino",
    audience: "Feminino",
    type: "Conjuntos",
    price: null, // "Consulte o valor"
    previousPrice: null,
    sizes: ["P", "M", "G"],
    colors: ["Cru", "Preto"],
    description: "Peça demonstrativa com valor sob consulta no WhatsApp. Blazer com corte reto e calça ampla coordenada.",
    images: [
      "/images/products/blazer-alfaiataria.jpg",
      "/images/products/calca-pantalona.jpg",
    ],
    isNew: true,
    isFeatured: true,
    isPromotion: false,
  },
];
