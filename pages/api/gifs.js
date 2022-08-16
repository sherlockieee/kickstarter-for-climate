// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { fetchGifs } from "../../lib/fetch-gifs";

export default async function handler(req, res) {
  const { searchTerm } = req.query;
  const data = await fetchGifs(searchTerm);
  res.status(200).json(data);
}
