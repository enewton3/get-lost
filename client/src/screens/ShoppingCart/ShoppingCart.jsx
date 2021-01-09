import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartCard from "../../components/ShoppingCartCard/ShoppingCartCard";
import Layout from "../../components/shared/Layout/Layout";
import { getCart } from "../../services/shopping";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const { user } = props;
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = getCart();
    setCart(fetchCart);
  }, []);

  //Call getCart() to get cart from local storage or context
  //map through returned cart to display cart products images and prices
  //Link to specific product detail page

  return (
    <Layout user={user}>
      <div className="shopping-cart-all">
        <div className="cart-title">Cart {">>"}</div>
        <div className="shopping-cart">
          <div className="shopping-cart-items">
            {cart &&
              cart.map((item) => {
                return (
                  <Link className="item-link" key={item} to={`/detail/${item}`}>
                    <ShoppingCartCard productID={item} />
                  </Link>
                );
              })}
          </div>
          <div className="totals">
            <div>Subtotal: $XXXXX </div>
            <div>Taxes: $XXXX</div>
            <div>Shipping: $XXXX</div>
            <div>Grand Total: $XXXX</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ShoppingCart;
