import { STORE_CONFIG } from "../data/storeConfig";
import { formatBRL } from "./formatters";

export interface CartItemWhatsApp {
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number | null;
}

/**
 * Monta o link do WhatsApp para finalizar a sacola com todos os produtos na CHILI.
 */
export function buildCartWhatsAppUrl(
  items: CartItemWhatsApp[],
  subtotal: number
): string {
  const lines: string[] = [
    `Olá! Vim pelo site da ${STORE_CONFIG.name} (${STORE_CONFIG.subname}) e gostaria de consultar estes produtos:`,
    "",
  ];

  items.forEach((item) => {
    lines.push(`• ${item.name}`);
    lines.push(`  Tamanho: ${item.size}`);
    if (item.color) {
      lines.push(`  Cor: ${item.color}`);
    }
    lines.push(`  Quantidade: ${item.quantity}`);
    const lineTotal = item.price ? item.price * item.quantity : null;
    lines.push(`  Valor: ${formatBRL(lineTotal)}`);
    lines.push("");
  });

  lines.push(`Total informado no site: ${formatBRL(subtotal)}`);
  lines.push("");
  lines.push("Gostaria de confirmar a disponibilidade e saber mais sobre retirada ou entrega.");

  const encodedMessage = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${STORE_CONFIG.whatsapp.raw}?text=${encodedMessage}`;
}

/**
 * Monta o link do WhatsApp para interesse em uma peça individual.
 */
export function buildProductInterestWhatsAppUrl(
  productName: string,
  size?: string,
  color?: string
): string {
  const lines: string[] = [
    `Olá! Vi esta peça no site da ${STORE_CONFIG.name} - ${STORE_CONFIG.subname}:`,
    "",
    `Produto: ${productName}`,
  ];

  if (size) {
    lines.push(`Tamanho: ${size}`);
  }
  if (color) {
    lines.push(`Cor: ${color}`);
  }

  lines.push("");
  lines.push("Gostaria de confirmar a disponibilidade e saber opções para compra.");

  const encodedMessage = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${STORE_CONFIG.whatsapp.raw}?text=${encodedMessage}`;
}
