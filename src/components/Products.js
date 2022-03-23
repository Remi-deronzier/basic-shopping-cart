import { useSelector } from "react-redux";

import Product from "./Product";

const Products = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="Products">
      <h2>Products</h2>
      {products.map((product, index) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          id={product.id}
          isLastProduct={index === products.length - 1}
        />
      ))}
    </div>
  );
};

export default Products;
