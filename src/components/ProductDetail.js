const ProductDetail = (props) => {
  const { quantity, name, price } = props;
  return (
    <div className="ProductDetail">
      <span>{name}</span>
      <span> - </span>
      <span>$</span>
      <span>{price}</span>
      <span> x </span>
      <span>{quantity}</span>
    </div>
  );
};

export default ProductDetail;
