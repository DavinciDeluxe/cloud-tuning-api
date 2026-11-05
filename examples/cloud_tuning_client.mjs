/**
 * DaVinci Deluxe Cloud Edition (v1.0.44) — Live Catalog & Cloud Tuning Integration Example
 * Official B2B API Documentation: https://www.davincideluxe.fr/api-pricing
 */
export async function getSupportedCatalog(type = 'cars') {
  const url = `https://www.davincideluxe.fr/api/check/catalog?type=${encodeURIComponent(type)}`;
  const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const cars = await getSupportedCatalog('cars');
  console.log('DaVinci Deluxe Cloud Edition — Cars brands:', cars.brand_count, 'ECUs:', cars.ecu_count);
}
