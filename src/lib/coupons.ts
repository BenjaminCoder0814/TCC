export const COUPONS: Record<string, number> = {
  'MUSCLE10': 10,
  'MUSCLE20': 20,
  'FRETEGRATIS': 0, // tratar frete grátis no checkout
  'PLUS5': 5,       // p/ planos
  'BULK20': 20,     // desconto em compras acima de R$200
  'WELCOME15': 15,  // cupom de boas vindas
  'ELITE25': 25,    // cupom exclusivo Elite
};

export function validateCoupon(code: string): number | null {
  const pct = COUPONS[code.toUpperCase()];
  return typeof pct === 'number' ? pct : null;
}