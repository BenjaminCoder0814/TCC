export function calcShippingByCep(cep: string, subtotal: number) {
  // Simulado: frete por faixa + peso fictício
  const digits = (cep || '').replace(/\D/g, '');
  const base = digits.length >= 5 ? parseInt(digits.slice(0, 5)) % 3 : 1;
  const tiers = [29.9, 19.9, 9.9];
  const value = tiers[base];
  const etaDays = base === 0 ? 7 : base === 1 ? 5 : 3;
  // promoção frete grátis por subtotal alto:
  const free = subtotal >= 399;
  return { value: free ? 0 : value, etaDays };
}

export function formatCep(cep: string): string {
  const digits = cep.replace(/\D/g, '');
  return digits.replace(/(\d{5})(\d{3})/, '$1-$2');
}

export function formatMoney(value: number): string {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}