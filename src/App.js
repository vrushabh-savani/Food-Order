import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCardHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
