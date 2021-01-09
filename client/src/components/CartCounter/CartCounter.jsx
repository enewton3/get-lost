import { useState, useEffect } from "react";
import { getCart } from "../../services/shopping";

export default function CartCounter(props) {
  const [cartLength, setCartLength] = useState([]);
  const { isAdded } = props;

  useEffect(() => {
    const cart = getCart();
    setCartLength(cart.length);
  }, [isAdded]);

  return <>{cartLength ? cartLength : null}</>;
}
