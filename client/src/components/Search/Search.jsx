import { useState, useEffect } from "react";
import { getProducts } from "../../services/products";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./Search.css";

export default function Search(props) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([{ name: "loading" }]);
  // const { searchToggle } = props;

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
        {/* <CSSTransition
          timeout={500}
          in={searchToggle}
          unmountOnExit
          classNames="search-bar"
        > */}
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* </CSSTransition> */}
      </form>
      <div className="search-results">
        {search &&
          results.map((result) => (
            <Link key={result.name} to={`/detail/${result._id}`}>
              <div className="search-result">{result.name}</div>
            </Link>
          ))}
      </div>
    </>
  );
}
