import React from "react";
import { X, Plus, Minus, Trash2, MessageCircle, ArrowRight, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import { formatBRL } from "../utils/formatters";
import { buildCartWhatsAppUrl } from "../utils/whatsapp";
import { STORE_CONFIG } from "../data/storeConfig";

interface CartDrawerProps {
  onContinueShopping?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onContinueShopping }) => {
  const {
    items,
    isCartOpen,
    closeCart,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
    totalQuantity,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const whatsappItems = items.map((item) => ({
      name: item.name,
      size: item.size,
      color: item.color,
      quantity: item.quantity,
      price: item.price,
    }));

    const url = buildCartWhatsAppUrl(whatsappItems, subtotal);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleContinue = () => {
    closeCart();
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-stone-200">
          {/* Header do Drawer */}
          <div className="p-5 sm:p-6 border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-red-600" />
              <h2
                id="cart-title"
                className="text-lg sm:text-xl text-stone-900 font-extrabold tracking-wide uppercase"
              >
                Minha Sacola CHILI
              </h2>
              {totalQuantity > 0 && (
                <span className="text-xs text-stone-500 font-semibold tabular-nums">
                  ({totalQuantity} {totalQuantity === 1 ? "item" : "itens"})
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={closeCart}
              className="p-2 text-stone-500 hover:text-stone-950 transition-colors"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lista de Itens ou Estado Vazio */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 divide-y divide-stone-200/80">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-200/60 flex items-center justify-center text-stone-400">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-stone-900">
                    Sua sacola está vazia
                  </h3>
                  <p className="text-xs text-stone-500 max-w-xs">
                    Navegue pela coleção da CHILI e monte sua lista de peças para consultar no WhatsApp.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleContinue}
                  className="mt-4 px-6 py-3 bg-stone-900 text-white text-xs uppercase tracking-widest font-bold hover:bg-stone-800 transition-colors inline-flex items-center gap-2"
                >
                  Explorar catálogo
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  {/* Miniatura do produto */}
                  <div className="relative w-20 h-24 sm:w-22 sm:h-28 shrink-0 bg-stone-100 overflow-hidden border border-stone-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Informações */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-sm font-bold text-stone-900 line-clamp-1">
                          {item.name}
                        </h4>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-stone-400 hover:text-red-600 p-1 -mr-1 transition-colors"
                          aria-label={`Remover ${item.name} da sacola`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-stone-500">
                        <span>Tam: <strong className="text-stone-900">{item.size}</strong></span>
                        <span aria-hidden="true">·</span>
                        <span>Cor: <strong className="text-stone-900">{item.color}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantidade Stepper */}
                      <div className="flex items-center border border-stone-300 bg-white">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-1 text-stone-600 hover:text-stone-950 transition-colors"
                          aria-label="Diminuir unidade"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-stone-900 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="p-1 text-stone-600 hover:text-stone-950 transition-colors"
                          aria-label="Aumentar unidade"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Preço Unitário ou Subtotal */}
                      <span className="text-sm font-bold text-stone-900 tabular-nums">
                        {item.price
                          ? formatBRL(item.price * item.quantity)
                          : "Consulte o valor"}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer com Subtotal e Botões */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-stone-200 bg-white space-y-4">
              <div className="flex items-baseline justify-between">
                <span className="text-xs uppercase tracking-wider font-bold text-stone-600">
                  Subtotal estimado
                </span>
                <span className="text-xl sm:text-2xl font-black text-stone-950 tabular-nums">
                  {formatBRL(subtotal)}
                </span>
              </div>

              <div className="text-[11px] text-stone-500 bg-stone-50 p-2.5 border border-stone-200 space-y-1">
                <p className="font-semibold text-stone-800">
                  CHILI Bagé: Compras na loja · Recolha móvel · Entrega
                </p>
                <p>
                  O pedido é enviado diretamente ao WhatsApp para confirmação de estoque e escolha do método de retirada/entrega.
                </p>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  type="button"
                  onClick={handleCheckoutWhatsApp}
                  className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs uppercase tracking-widest font-bold transition-all shadow-sm flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Finalizar pelo WhatsApp CHILI
                </button>

                <button
                  type="button"
                  onClick={handleContinue}
                  className="w-full py-3 px-4 border border-stone-300 hover:border-stone-900 text-stone-700 hover:text-stone-950 text-xs uppercase tracking-wider font-semibold transition-colors text-center"
                >
                  Continuar navegando
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
