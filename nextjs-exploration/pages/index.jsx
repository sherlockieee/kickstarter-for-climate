import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchBackend } from "../lib/fetch-backend";
import { fetchGifs } from "../lib/fetch-gifs";
import styles from "../styles/Home.module.css";

export default function Home(initialData) {
  const [formInput, setFormInput] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cats");
  const [title, setTitle] = useState("");

  useEffect(() => {
    setSearchResults(initialData.catGifs.data);
    setTitle(initialData.backendMessage.message);
  }, [initialData]);

  const handleInputs = (e) => {
    let { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  const search = async (e) => {
    e.preventDefault();
    let gifs = await fetchGifs(formInput.searchTerm);
    setSearchResults(gifs.data);
    setSearchTerm(formInput.searchTerm);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Search GIF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>{title}</h1>

      <form onSubmit={search}>
        <input onChange={handleInputs} name="searchTerm" type="text" required />
        <button type="submit">Search</button>
      </form>
      <Link href="/search/[pid]" as={`/search/${searchTerm}`}>
        <a>Share this page</a>
      </Link>

      {searchResults.map((val, idx) => {
        return (
          <div key={idx}>
            <h3>{val.title}</h3>
            <img src={val.images.original.url} alt={val.title} />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const catGifs = await fetchGifs("cats");
  const backendMessage = await fetchBackend();
  return { props: { catGifs, backendMessage } };
}
