import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Search(initialData) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Search results for {router.query.searchTerm}</title>
        <meta
          name="description"
          content={initialData.gifs.map((each) => each.title + " ")}
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Search results for: {router.query.searchTerm} </h1>

      <Link href="/">
        <a>Back to search</a>
      </Link>

      {initialData.gifs.map((each, index) => {
        return (
          <div key={index}>
            <h3>{each.title}</h3>
            <img src={each.images.original.url} alt={each.title} />
          </div>
        );
      })}
    </>
  );
}

export async function getServerSideProps(context) {
  const searchTerm = context.query.searchTerm;
  let gifs = await fetch(
    `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=nPJNlVceWHERWCSDBW5XMo1p90l7l9ie&limit=6`
  );
  gifs = await gifs.json();
  return { props: { gifs: gifs.data } };
}
