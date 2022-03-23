import { useDispatch } from "react-redux";

import "./Product.css";

import ProductDetail from "./ProductDetail";

const Product = (props) => {
  const dispatch = useDispatch();
  const { isLastProduct, id, quantity } = props;

  return (
    <div className={!isLastProduct ? "Product--wrapper" : ""}>
      <ProductDetail {...props} />
      <button
        disabled={quantity <= 0}
        onClick={() =>
          dispatch({ type: "ADD_TO_CART", payload: { productId: id } })
        }
      >
        {quantity > 0 ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
};

export default Product;
