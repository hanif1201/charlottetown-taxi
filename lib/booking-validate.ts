const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[\d\s()+.\-]{7,}$/;

export function isFieldValid(id: string, value: string, required: boolean): boolean {
  const v = (value || '').trim();
  if (required && !v) return false;
  if (!v) return true;
  if (id === 'email' && !emailRe.test(v)) return false;
  if (id === 'phone' && !phoneRe.test(v)) return false;
  if ((id === 'when' || id === 'retWhen') && new Date(v).getTime() < Date.now() - 60000) return false;
  return true;
}
