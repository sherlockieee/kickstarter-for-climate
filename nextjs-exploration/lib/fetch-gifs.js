export async function fetchGifs(searchTerm, limit = 10) {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.NEXT_PUBLIC_API_KEY}&limit=${limit}`
  );
  const data = await res.json();

  return data;
}
