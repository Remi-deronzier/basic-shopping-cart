import { useSelector, useDispatch } from "react-redux";

import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const disabled = useSelector((state) => state.checkoutDisabled);
  const total = useSelector((state) => state.total);
  const dispatch = useDispatch();

  return (
    <div className="Cart">
      <h2 className="Cart--title">Your Cart</h2>
      {cart.length === 0 ? <EmptyCart /> : <FullCart cart={cart} />}
      <div className="Cart--total">
        <span>Total: </span>
        <span>{total}</span>
      </div>
      <button
        onClick={() => dispatch({ type: "CHECKOUT" })}
        disabled={disabled}
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
