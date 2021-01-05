import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import Layout from "../../components/shared/Layout/Layout";
import "./Listing.css";

export default function Listing(props) {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const [filter, setFilter] = useState("");

  const displayedProducts =
    filter === "all" ? products : products.filter((item) => item.id === filter);

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
        {displayedProducts.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </Layout>
  );
}
