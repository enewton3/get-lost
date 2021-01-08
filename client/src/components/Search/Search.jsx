import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import "./Search.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const results = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase)
  );

  console.log(results);
  console.log(search);
  console.log(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    fetchProducts();
    console.log("api call");
  }, []);

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
      <div>{search && results.map((result) => <p>{result}</p>)}</div>
    </>
  );
}
