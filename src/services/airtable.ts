export interface CustomerData { name?: string; phone?: string; email?: string; referralSource?: string; }

export async function submitCustomer(data: CustomerData) {
  const res = await fetch('/api/submit-customer', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json?.ok) throw new Error(json?.error || `Submit failed (${res.status})`);
  return json;
}
