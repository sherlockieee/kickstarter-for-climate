import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
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
    let gifs = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${formInput.searchTerm}&api_key=nPJNlVceWHERWCSDBW5XMo1p90l7l9ie&limit=6`
    );
    gifs = await gifs.json();
    setSearchResults(gifs.data);
    setSearchTerm(formInput.searchTerm);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Search GIF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Image src="/logo.png" alt="logo" layout="fill" />
      </div>
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
            <img src={val.images.original.url} alt={val.title} />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  let catGifs = await fetch(
    "https://api.giphy.com/v1/gifs/search?q=cats&api_key=m2tO2HPSFB3gZqUQiNxQ0dHgUtbGpkfh&limit=10"
  );
  catGifs = await catGifs.json();
  return { props: { catGifs: catGifs } };
}
