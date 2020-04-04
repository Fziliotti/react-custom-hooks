import React, { useState } from "react";
import useGiphy from "../hooks/use-giphy";
import Layout from "../components/Layout";
import Masonry from 'react-masonry-css'
import LazyLoad from 'react-lazyload'
const UseGiphyView = () => {
  // UseGiphy
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, loading] = useGiphy(query);

  return (
    <Layout>
      <h1>UseGiphy</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search for Gifs!"
        />
        <button type="submit">Search</button>
      </form>
      <br />
      {loading ? (
        <h1>GIVE ME GIFS</h1>
      ) : (
        <Masonry
          breakpointCols={3}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {results.map(item =>{
            return (
              <LazyLoad height={200}>
                <video autoPlay loop key={item} src={item} />
              </LazyLoad>
            )
          })}
        </Masonry>

      )}
    </Layout>
  );
};



export default UseGiphyView;
