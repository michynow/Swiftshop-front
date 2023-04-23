export async function fetchJson(url: string, options?: RequestInit) {
  const response = await fetch(url, options);
  return await response.json();
}
