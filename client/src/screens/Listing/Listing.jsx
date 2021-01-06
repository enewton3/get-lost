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
      <div>
        <FilterDropdown />
        {displayedProducts.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </Layout>
  );
}
