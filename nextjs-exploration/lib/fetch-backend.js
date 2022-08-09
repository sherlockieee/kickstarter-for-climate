export async function fetchBackend() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
  const data = await res.json();

  return data;
}
