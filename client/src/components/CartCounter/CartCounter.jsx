import { useState, useEffect } from "react";
import { getCart } from "../../services/shopping";

export default function CartCounter(props) {
  const [cartLength, setCartLength] = useState([]);
  const { isAdded } = props;

  useEffect(() => {
    const cart = getCart();
    setCartLength(cart ? cart.length : 0);
  }, [isAdded]);

  return (
    <>
      {cartLength ? (
        <div className="cart-counter">{cartLength}</div>
      ) : (
        <div></div>
      )}
    </>
  );
}
