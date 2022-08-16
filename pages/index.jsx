import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchBackend, getSearches, postSearch } from "../lib/fetch-backend";
import { fetchGifs } from "../lib/fetch-gifs";
import styles from "../styles/Home.module.css";

export default function Home(initialData) {
  const [formInput, setFormInput] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cats");
  const [title, setTitle] = useState("");
  const [prevSearches, setPrevSearches] = useState([]);

  useEffect(() => {
    const fetchSearches = async () => {
      const prevSearches = await getSearches();
      setPrevSearches(prevSearches);
    };
    fetchSearches().catch((err) => console.error(err));
    setSearchResults(initialData.catGifs.data);
    setTitle(initialData.backendMessage.message);
    setPrevSearches(prevSearches);
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

    const newSearch = await postSearch({ text: formInput.searchTerm });
    setPrevSearches([...prevSearches, newSearch]);
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
      <h2>Previous searches:</h2>
      {prevSearches.map((val, idx) => {
        return <li key={idx}>{val.text}</li>;
      })}
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
