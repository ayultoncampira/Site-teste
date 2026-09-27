import React from "react";
import { ArrowUpRight, MessageCircle, MapPin, Star, Heart } from "lucide-react";
import { STORE_CONFIG } from "../data/storeConfig";
import { ChiliLogo } from "./ChiliLogo";

interface FooterProps {
  onNavClick: (view: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 py-12 sm:py-16 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Coluna 1: Nome da Marca & Endereço */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-stone-900/80 p-3 inline-block rounded border border-stone-800">
              <ChiliLogo size="sm" showSubtitle={true} className="text-white" />
            </div>

            <p className="text-xs text-stone-400 max-w-sm leading-relaxed">
              {STORE_CONFIG.about.short}
            </p>

            <div className="flex items-center gap-2 text-xs text-stone-300 pt-1">
              <MapPin className="w-4 h-4 text-red-500 shrink-0" />
              <span>{STORE_CONFIG.address.street} - {STORE_CONFIG.address.neighborhood}, {STORE_CONFIG.city} - {STORE_CONFIG.state}</span>
            </div>

            <div className="flex items-center gap-3 text-xs text-stone-400">
              <span className="flex items-center gap-1 text-amber-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-white">{STORE_CONFIG.rating.score}</span> ({STORE_CONFIG.rating.count} avaliações)
              </span>
              <span>·</span>
              <span className="text-pink-400 font-medium">Adequado para LGBTQ+</span>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-[11px] uppercase tracking-widest text-stone-400 font-bold block mb-2">
              Navegação
            </span>
            <div className="flex flex-col space-y-2 text-xs">
              <button
                type="button"
                onClick={() => onNavClick("inicio")}
                className="text-left text-stone-300 hover:text-white transition-colors"
              >
                Início
              </button>
              <button
                type="button"
                onClick={() => onNavClick("novidades")}
                className="text-left text-stone-300 hover:text-white transition-colors"
              >
                Novidades
              </button>
              <button
                type="button"
                onClick={() => onNavClick("catalogo")}
                className="text-left text-stone-300 hover:text-white transition-colors"
              >
                Catálogo Completo
              </button>
              <button
                type="button"
                onClick={() => onNavClick("promocoes")}
                className="text-left text-stone-300 hover:text-white transition-colors"
              >
                Promoções
              </button>
              <button
                type="button"
                onClick={() => onNavClick("sobre")}
                className="text-left text-stone-300 hover:text-white transition-colors"
              >
                Sobre & Localização
              </button>
            </div>
          </div>

          {/* Coluna 3: Atendimento & Horário */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] uppercase tracking-widest text-stone-400 font-bold block mb-2">
              Atendimento Oficial
            </span>
            <div className="space-y-2.5 text-xs">
              <a
                href={`https://wa.me/${STORE_CONFIG.whatsapp.raw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-200 hover:text-white transition-colors font-medium bg-stone-900 p-2.5 border border-stone-800"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {STORE_CONFIG.whatsapp.display}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-stone-500 ml-auto" />
              </a>

              <a
                href={STORE_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Direções no Maps ({STORE_CONFIG.address.plusCode})</span>
                <ArrowUpRight className="w-3 h-3 text-stone-500" />
              </a>

              <p className="text-[11px] text-stone-400 pt-1">
                <span className="font-semibold text-stone-300">Horário: </span>
                {STORE_CONFIG.hours.statusNote}
              </p>
            </div>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>
            © {new Date().getFullYear()} {STORE_CONFIG.name} - {STORE_CONFIG.subname}. Todos os direitos reservados. {STORE_CONFIG.city} — {STORE_CONFIG.state}.
          </p>
          <p className="text-[11px] text-stone-400">
            Vitrine digital para montagem de sacola e finalização personalizada pelo WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
};
