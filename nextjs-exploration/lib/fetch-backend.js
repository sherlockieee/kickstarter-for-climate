export async function fetchBackend() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`);
  const data = await res.json();

  return data;
}

export async function getSearches() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notes`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
}

export async function postSearch({ text }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/notes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      completed: true,
    }),
  });
  const data = await res.json();
  return data;
}
