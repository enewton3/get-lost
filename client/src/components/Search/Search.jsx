import { useState } from "react";
import { getProducts } from "../../services/products";
import "./Search.css";

export default function Search() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const fetchProducts = async () => {
    const results = await getProducts()
  }


  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
}
