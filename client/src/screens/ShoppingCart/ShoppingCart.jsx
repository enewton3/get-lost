import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ShoppingCartCard from "../../components/ShoppingCartCard/ShoppingCartCard";
import Layout from "../../components/shared/Layout/Layout";
import { getCart, clearCart } from "../../services/shopping";
import "./ShoppingCart.css";

function ShoppingCart(props) {
  const { user } = props;
  const [cart, setCart] = useState([]);
  const history = useHistory();
  const [subTotal, setSubtotal] = useState(0);
  const shipping = 12.99;

  useEffect(() => {
    const fetchCart = getCart();
    setCart(fetchCart);
  }, []);

  const handleCheckout = () => {
    clearCart();
    setCart([]);
    history.push("/");
  };

  //Call getCart() to get cart from local storage or context
  //map through returned cart to display cart products images and prices
  //Link to specific product detail page

  return (
    <Layout user={user}>
      <div className="shopping-cart-all">
        <div className="cart-title">Checkout {">>"}</div>
        <div className="shopping-cart">
          <div className="shopping-cart-items">
            {cart ? (
              cart.map((item, index) => {
                return (
                  <Link
                    className="item-link"
                    key={`${index} ${item}`}
                    to={`/detail/${item}`}
                  >
                    <ShoppingCartCard
                      productID={item}
                      setSubtotal={setSubtotal}
                    />
                  </Link>
                );
              })
            ) : (
              <div className="empty-cart">
                Your cart is empty! Go add some stuff!
              </div>
            )}
          </div>
          <div className="totals">
            <div>Subtotal: ${subTotal ? subTotal.toFixed(2) : "loading"} </div>
            <div>Shipping: ${shipping}</div>
            <div>Grand Total: ${subTotal + shipping}</div>
            <button className="cart-butt" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ShoppingCart;
