/** DaVinci Deluxe Cloud Edition (v1.0.44) — Live Catalog Client */
export async function getSupportedCatalog(type = 'cars') {
  const res = await fetch(`https://www.davincideluxe.fr/api/check/catalog?type=${encodeURIComponent(type)}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}
