import { createStore } from "redux";

const initialState = {
  products: [
    { id: 1, name: "Ipad 4 Mini", price: 500.01, quantity: 2 },
    { id: 2, name: "H&M T-Shirt White", price: 10.99, quantity: 9 },
    { id: 3, name: "Charli XCX - Sucker CD", price: 19.99, quantity: 3 },
  ],
  cart: [],
  checkoutDisabled: false,
  total: 0,
};
function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const { updatedCart, updatedProducts, total } = addToCart(
        state.products,
        state.cart,
        action.payload.productId
      );
      return {
        checkoutDisabled: false,
        products: updatedProducts,
        cart: updatedCart,
        total,
      };
    case "CHECKOUT":
      return {
        ...state,
        cart: [],
        checkoutDisabled: true,
        total: 0,
      };
    default:
      return state;
  }
}

const addToCart = (products, cart, productId) => {
  products = [...products];
  cart = [...cart];
  let updatedCart;
  const productToAdd = products.find((product) => product.id === productId);
  const isProductAlreadyInCart = Boolean(
    cart.find((item) => item.id === productId)
  );
  if (isProductAlreadyInCart) {
    const productIndex = cart.findIndex((product) => product.id === productId);
    const productToUpdate = cart.find((item) => item.id === productId);
    productToUpdate.quantity++;
    updatedCart = [
      ...cart.slice(0, productIndex),
      productToUpdate,
      ...cart.slice(productIndex + 1),
    ];
  } else {
    const newProduct = { ...productToAdd, quantity: 1 };
    updatedCart = [...cart, newProduct];
  }
  const updatedProducts = updateProductQuantity(products, productId);
  const total = determineTotal(updatedCart);
  return { updatedCart, updatedProducts, total };
};

const updateProductQuantity = (products, productId) => {
  const productToUpdate = products.find((product) => product.id === productId);
  const newQuantity = productToUpdate.quantity - 1;
  productToUpdate.quantity = newQuantity;
  const productIndex = products.indexOf(productToUpdate);
  return [
    ...products.slice(0, productIndex),
    productToUpdate,
    ...products.slice(productIndex + 1),
  ];
};

const determineTotal = (cart) => {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

export const store = createStore(
  cartReducer, // Il est possible d'ajouter plusieurs reducers en utilisant combineReducers()
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
