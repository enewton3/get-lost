const localStorage = window.localStorage;

export const shopProduct = (id) => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    let parsedCart = JSON.parse(cart);
    parsedCart.push(id);
    let restringedCart = JSON.stringify(parsedCart);
    localStorage.setItem("cart", restringedCart);
  } else {
    let newCart = [];
    newCart.push(id);
    let stringedCart = JSON.stringify(newCart);
    localStorage.setItem("cart", stringedCart);
  }
  return "added to cart";
};

export const getCart = () => {
  const cart = localStorage.getItem("cart");
  const parsedCart = cart ? JSON.parse(cart) : null;
  return parsedCart;
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
