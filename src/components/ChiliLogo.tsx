import React from "react";

interface ChiliLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
}

export const ChiliLogo: React.FC<ChiliLogoProps> = ({
  className = "",
  size = "md",
  showSubtitle = true,
}) => {
  // Tamanhos calibrados
  const heights = {
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-14",
    lg: "h-16 sm:h-20",
  };

  return (
    <div className={`inline-flex flex-col items-center select-none group ${className}`}>
      <div className={`relative flex items-center justify-center ${heights[size]}`}>
        {/* Letreiro Principal estilizado de acordo com a foto da fachada da loja */}
        <div className="flex items-center tracking-tighter font-extrabold text-stone-950 font-sans">
          {/* Badge Bagé & símbolo de gênero inclusivo no canto superior direito */}
          <div className="relative flex items-center">
            {/* Tag Bagé no topo */}
            <span className="absolute -top-3.5 left-2 text-[9px] sm:text-[10px] tracking-widest uppercase font-serif text-stone-700 italic">
              Bagé
            </span>

            {/* Letra C com pimenta vermelha contornando a base */}
            <div className="relative inline-flex items-center">
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-[-0.05em] leading-none drop-shadow-[0_2px_0px_rgba(0,0,0,0.15)]">
                CH
              </span>

              {/* Pimenta vermelha estilizada SVG da marca sob a letra C */}
              <svg
                viewBox="0 0 40 28"
                className="absolute -bottom-2 -left-2 w-7 sm:w-8 h-5 sm:h-6 pointer-events-none drop-shadow-sm"
                fill="none"
              >
                {/* Cabinho verde */}
                <path
                  d="M4 12C6 9 9 9 10 11C11 13 8 15 5 14"
                  stroke="#16a34a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Corpo curvo da pimenta vermelha */}
                <path
                  d="M6 13C10 10 22 10 32 20C28 24 16 23 8 18C6 16 5 14 6 13Z"
                  fill="#dc2626"
                  stroke="#991b1b"
                  strokeWidth="1"
                />
                {/* Brilho da pimenta */}
                <path
                  d="M10 13C15 11 23 12 28 17"
                  stroke="#fca5a5"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Letras ILI */}
            <span className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-[-0.05em] leading-none drop-shadow-[0_2px_0px_rgba(0,0,0,0.15)]">
              ILI
            </span>

            {/* Símbolo de gênero inclusivo (como na foto da fachada: união ⚥) */}
            <span className="absolute -top-3.5 -right-3 sm:-right-4 text-[#ec4899] text-xs sm:text-sm font-bold animate-pulse">
              ⚧
            </span>
          </div>
        </div>
      </div>

      {/* Subtítulo: Masculino & Feminino */}
      {showSubtitle && (
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-semibold text-stone-800 -mt-0.5">
          Masculino & Feminino
        </span>
      )}
    </div>
  );
};
