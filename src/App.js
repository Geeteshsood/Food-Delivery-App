import React from "react";
import Header from './components/Header';
import Meals from './components/Meals';
import Cart from "./components/Cart/Cart";

import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

import "./App.css";
import Checkout from "./components/Checkout";

function App() {

  return (
    <div className="App">
      <UserProgressContextProvider>
      <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
          <Checkout />
      </CartContextProvider>
      </UserProgressContextProvider>
    </div>
  );
}

export default App;
