import React from "react";
import { MapPin, MessageCircle, Navigation, Star, Clock, ShoppingBag, Truck, CheckCircle2, Heart, ArrowUpRight } from "lucide-react";
import { STORE_CONFIG } from "../data/storeConfig";

export const AboutAndLocationSection: React.FC = () => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Seção Sobre a CHILI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-widest text-red-600 font-bold">
                Conheça a Loja
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-xs uppercase tracking-wider text-pink-600 font-semibold">
                Espaço LGBTQ+ Friendly
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-950 tracking-tight">
              CHILI — Loja de Roupas
            </h2>

            <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-normal">
              "{STORE_CONFIG.about.short}"
            </p>

            <p className="text-sm text-stone-600 leading-relaxed">
              {STORE_CONFIG.about.editorial}
            </p>

            {/* Avaliação & Diferenciais */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-700">
              <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-1.5 shadow-2xs">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <strong className="text-stone-900 font-bold">{STORE_CONFIG.rating.score}</strong>
                <span>estrelas</span>
                <span className="text-stone-400">({STORE_CONFIG.rating.count} avaliações no Google)</span>
              </div>
            </div>

            {/* Facilidades confirmadas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 border border-stone-200 space-y-1">
                <ShoppingBag className="w-4 h-4 text-stone-900" />
                <p className="text-xs font-bold text-stone-900">Compras na loja</p>
                <p className="text-[11px] text-stone-500">Experimente e escolha presencialmente</p>
              </div>

              <div className="bg-white p-3 border border-stone-200 space-y-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <p className="text-xs font-bold text-stone-900">Com recolha móvel</p>
                <p className="text-[11px] text-stone-500">Reserve pelo WhatsApp e retire fácil</p>
              </div>

              <div className="bg-white p-3 border border-stone-200 space-y-1">
                <Truck className="w-4 h-4 text-stone-900" />
                <p className="text-xs font-bold text-stone-900">Entrega</p>
                <p className="text-[11px] text-stone-500">Envio para Bagé e região</p>
              </div>
            </div>
          </div>

          {/* Foto da Fachada Oficial */}
          <div className="lg:col-span-6 space-y-3">
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-200 border-2 border-stone-900 shadow-xl">
              <img
                src="/images/chili-logo.jpg"
                alt="Fachada CHILI Bagé - Masculino e Feminino"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute top-3 left-3 bg-stone-950 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                Fachada Oficial em Bagé
              </div>
            </div>
            <p className="text-xs text-stone-500 text-center">
              Letreiro característico em madeira com pimenta e símbolo de inclusão de gênero.
            </p>
          </div>
        </div>

        {/* Localização, Horários e Contato */}
        <div className="pt-6 border-t border-stone-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white border border-stone-200 p-6 sm:p-8 md:p-10 shadow-xs">
            {/* Endereço & Horário */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-stone-900">
                <MapPin className="w-5 h-5 text-red-600" />
                <h3 className="text-2xl font-bold text-stone-900">
                  Endereço no Centro
                </h3>
              </div>

              <div className="text-sm text-stone-700 space-y-1">
                <p className="font-extrabold text-stone-950 text-base">{STORE_CONFIG.name} - {STORE_CONFIG.subname}</p>
                <p>{STORE_CONFIG.address.street}</p>
                <p>{STORE_CONFIG.address.neighborhood}, {STORE_CONFIG.address.city} — {STORE_CONFIG.address.state}</p>
                <p className="text-xs text-stone-500 tabular-nums">CEP: {STORE_CONFIG.address.postalCode}</p>
                <p className="text-xs text-stone-500 font-mono">Plus Code: {STORE_CONFIG.address.plusCode}</p>
              </div>

              {/* Status de Horário */}
              <div className="p-3 bg-amber-50/80 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
                <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">{STORE_CONFIG.hours.statusNote}</span>
                  <span className="text-stone-600">{STORE_CONFIG.hours.detail}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={STORE_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-stone-950 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-bold transition-colors inline-flex items-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir Direções no Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Atendimento WhatsApp */}
            <div className="space-y-4 border-t md:border-t-0 md:border-l md:pl-8 border-stone-200 pt-6 md:pt-0">
              <div className="flex items-center gap-2 text-stone-900">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <h3 className="text-2xl font-bold text-stone-900">
                  Canal Direto de Vendas
                </h3>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed">
                Tire suas dúvidas sobre tamanhos, cores disponíveis, faça reservas de peças para recolha móvel ou solicite entrega em Bagé diretamente pelo nosso WhatsApp.
              </p>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-none space-y-1">
                <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                  Telefone & WhatsApp
                </span>
                <p className="text-xl font-bold text-emerald-950 tabular-nums">
                  {STORE_CONFIG.whatsapp.display}
                </p>
                <p className="text-[11px] text-emerald-700">
                  Atendimento ágil para pedidos da vitrine digital.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${STORE_CONFIG.whatsapp.raw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-bold transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Conversar no WhatsApp Agora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
