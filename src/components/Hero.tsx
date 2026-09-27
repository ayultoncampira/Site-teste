import React from "react";
import { ArrowRight, Star, ShoppingBag, Truck, CheckCircle2, Heart } from "lucide-react";
import { STORE_CONFIG } from "../data/storeConfig";

interface HeroProps {
  onExploreNew: () => void;
  onExplorePromos: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreNew,
  onExplorePromos,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo: Tipografia e Identidade */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              {/* Badges de Confiança Oficiais */}
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider font-semibold text-stone-600">
                <span className="flex items-center gap-1 text-stone-900 bg-stone-100 px-2.5 py-1 border border-stone-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="tabular-nums font-bold">{STORE_CONFIG.rating.score}</span>
                  <span className="text-stone-500">({STORE_CONFIG.rating.count} avaliações)</span>
                </span>
                <span className="bg-pink-50 text-pink-700 px-2.5 py-1 border border-pink-200 font-semibold inline-flex items-center gap-1">
                  <span>Adequado para LGBTQ+</span>
                </span>
                <span className="text-stone-400">·</span>
                <span>Centro de Bagé</span>
              </div>

              {/* Título Principal */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight leading-[1.05]">
                  CHILI
                </h1>
                <span className="text-lg sm:text-xl font-bold tracking-widest uppercase text-stone-600 block mt-1">
                  Loja de Roupas · Masculino & Feminino
                </span>
              </div>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal max-w-lg">
                Curadoria moderna de moda urbana e contemporânea no Centro de Bagé. Peças selecionadas para expressar seu estilo com liberdade e atitude.
              </p>

              {/* Serviços disponíveis confirmados */}
              <div className="flex flex-wrap gap-3 pt-1 text-xs text-stone-700 font-medium">
                <span className="inline-flex items-center gap-1.5 bg-white border border-stone-200 px-2.5 py-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-stone-800" />
                  Compras na loja
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-stone-200 px-2.5 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Recolha móvel
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-stone-200 px-2.5 py-1.5">
                  <Truck className="w-3.5 h-3.5 text-stone-800" />
                  Entrega
                </span>
              </div>
            </div>

            {/* Ações Primárias */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onExploreNew}
                className="px-7 py-4 bg-stone-950 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-bold transition-all inline-flex items-center justify-center gap-2 shadow-xs group"
              >
                <span>Explorar novidades</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onExplorePromos}
                className="px-7 py-4 border border-stone-300 hover:border-stone-950 bg-white hover:bg-stone-50 text-stone-900 text-xs uppercase tracking-widest font-bold transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Ver promoções</span>
              </button>
            </div>

            {/* Horário & Endereço Rápido */}
            <div className="pt-4 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs text-stone-600">
              <div>
                <span className="block text-stone-900 font-bold uppercase tracking-wider">Endereço</span>
                <span>R. Marcílio Dias, 883 - Centro, Bagé</span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-stone-300" />
              <div>
                <span className="block text-stone-900 font-bold uppercase tracking-wider">Status</span>
                <span className="text-amber-800 font-medium">{STORE_CONFIG.hours.statusNote}</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Editorial com o Logotipo e Moda Real da CHILI */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden bg-stone-200 shadow-xl border border-stone-300">
              <img
                src="/images/editorial/chili-editorial.jpg"
                alt="CHILI Loja de Roupas - Moda Masculina e Feminina em Bagé"
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent pointer-events-none" />

              {/* Box com o Logo Original da Fachada em Destaque */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div className="bg-stone-900/90 backdrop-blur-md p-3 border border-stone-700 flex items-center gap-3">
                  <div className="w-12 h-12 overflow-hidden rounded bg-amber-900/20 border border-stone-600 shrink-0">
                    <img
                      src="/images/chili-logo.jpg"
                      alt="Fachada CHILI Bagé"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold block">
                      Fachada Oficial
                    </span>
                    <span className="text-sm font-bold text-white block">
                      CHILI · Bagé
                    </span>
                    <span className="text-[10px] text-stone-300">
                      Masculino & Feminino
                    </span>
                  </div>
                </div>

                <span className="text-xs uppercase tracking-wider font-semibold text-stone-200 bg-stone-950/60 px-2 py-1 backdrop-blur-xs">
                  Bagé — RS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
