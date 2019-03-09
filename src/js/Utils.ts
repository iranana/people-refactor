export async function _fetch (endpoint) {
  const response = await fetch(endpoint);
  const result = await response.json();

  if (!response.ok) {
    throw result
  }

  return result;
}
