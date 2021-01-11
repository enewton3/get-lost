import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <Link className="product" to={`/detail/${product._id}`}>
      <img
        className="product-image"
        src={product.imgURL[0].image}
        alt={props.name}
      />
      <div className="product-name">{product.name}</div>
      <div className="product-price">{`${product.price}`}</div>
    </Link>
  );
};

export default ProductCard;
