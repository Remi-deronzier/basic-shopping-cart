import { Provider } from "react-redux";
import { store } from "./store";

import "./App.css";

import Header from "./components/Header";
import Divider from "./components/Divider";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App-container">
        <Header />
        <Divider />
        <Products />
        <Divider />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
