import React from "react";
import { ArrowUpRight, MapPin, Heart } from "lucide-react";
import { STORE_CONFIG } from "../data/storeConfig";

export const InstagramSection: React.FC = () => {
  const feedImages = [
    { src: "/images/chili-logo.jpg", alt: "Fachada oficial CHILI em Bagé" },
    { src: "/images/products/camisa-linho-masculina.jpg", alt: "Moda Masculina CHILI" },
    { src: "/images/products/jaqueta-denim-unissex.jpg", alt: "Moda Urbana Unissex CHILI" },
    { src: "/images/products/vestido-midi.jpg", alt: "Moda Feminina CHILI" },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-5 gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
              Espaço & Identidade
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              A Loja no Centro de Bagé
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-white px-3 py-1.5 border border-stone-200 self-start sm:self-auto">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>R. Marcílio Dias, 883</span>
          </div>
        </div>

        {/* Grade de Fotos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {feedImages.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden bg-stone-200 group block border border-stone-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-xs font-bold bg-stone-900/80 px-2.5 py-1 backdrop-blur-xs">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-stone-500 text-center">
          Atendimento acolhedor, roupas com personalidade e respeito à diversidade no coração de Bagé.
        </p>
      </div>
    </section>
  );
};
