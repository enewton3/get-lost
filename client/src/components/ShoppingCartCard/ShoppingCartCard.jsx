import { getProduct } from "../../services/products";
import { useState, useEffect } from "react";
import "./ShoppingCartCard.css";

function ShoppingCartCard(props) {
  const { productID, setSubtotal } = props;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(productID);
      setProduct(product);
      const priceString = product.price.slice(1);
      const price = parseInt(priceString);
      setSubtotal((prev) => prev + price);
    };
    fetchProduct();
  }, [productID, setSubtotal]);

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
