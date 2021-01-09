import { getProduct } from "../../services/products";
import { useState, useEffect } from "react";
import "./ShoppingCartCard.css";

function ShoppingCartCard(props) {
  const { productID } = props;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(productID);
      setProduct(product);
    };
    fetchProduct();
  }, [productID]);

  if (product) {
    return (
      <div className="cart-card">
        <img
          src={product.imgURL ? product.imgURL[0].image : null}
          alt={product.name}
          className="cart-card-image"
        />
        <div className="cart-card-name">{product.name}</div>
        <div className="cart-card-price">{product.price}</div>
      </div>
    );
  } else {
    <div></div>;
  }
}

export default ShoppingCartCard;
