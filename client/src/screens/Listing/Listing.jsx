import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import Layout from "../../components/shared/Layout/Layout";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import "./Listing.css";

export default function Listing(props) {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const [filter, setFilter] = useState("");

  const displayedProducts =
    filter === "all"
      ? products
      : products.filter((item) => item.type === filter);

  let pageTitle;

  switch (filter) {
    case "Day-Trip":
      pageTitle = "Day Trip >>";
      break;
    case "Long-Haul":
      pageTitle = "Long Haul >>";
      break;
    default:
      pageTitle = "All Packs >>";
      break;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
    setFilter(params.filter);
  }, [params.filter]);

  return (
    <Layout user={props.user}>
      <div className="list-back">
        <div className="page-title">{pageTitle}</div>
        <div className="products-container">
          <div className="filter">
            <FilterDropdown initial={params.filter} />
          </div>
          <div className="products">
            {products ? (
              displayedProducts.map((item) => (
                <ProductCard className="p-card" key={item._id} product={item} />
              ))
            ) : (
              <div>
                <h1>The journey is worth the wait!</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
