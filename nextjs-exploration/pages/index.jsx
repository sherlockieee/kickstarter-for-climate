import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchGifs } from "../lib/fetch-gifs";
import styles from "../styles/Home.module.css";

export default function Home(initialData) {
  const [formInput, setFormInput] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("cats");

  useEffect(() => {
    setSearchResults(initialData.catGifs.data);
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

      <h1 className={styles.title}>Hello, World</h1>

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
            <Image src={val.images.original.url} alt={val.title} />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const catGifs = await fetchGifs("cats");
  return { props: { catGifs } };
}
