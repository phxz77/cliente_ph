export const WHATSAPP_NUMBER = "5511930111496";

export function whatsappLink(message: string) {
  const q = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${q}`;
}
