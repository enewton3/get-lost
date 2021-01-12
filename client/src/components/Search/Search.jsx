import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import { Link } from "react-router-dom";
import "./Search.css";

export default function Search() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([{ name: "loading" }]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const results = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <form className="search-bar" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="search-results">
        {search &&
          results.map((result) => (
            
          
            <Link key={result.name} to={`/detail/${result._id}`} onClick={() => {
              setSearch('')
            }}>
              <div className="search-result">{result.name}</div>
            </Link>
          ))}
      </div>
    </>
  );
}
