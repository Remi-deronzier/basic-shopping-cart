import ProductDetail from "./ProductDetail";

const FullCart = (props) => {
  const { cart } = props;
  return (
    <div className="FullCart">
      {cart.map((product) => (
        <div key={product.id}>
          <ProductDetail
            name={product.name}
            quantity={product.quantity}
            price={product.price}
            id={product.id}
          />
        </div>
      ))}
    </div>
  );
};

export default FullCart;
