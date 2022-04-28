import "./App.css";
import Navbar from "./components/NavBar";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import Home from "./pages/Home";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./components/CartContext"
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartContextProvider >
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route path="/category/:idCategory" element={<CategoryPage />} />
          <Route path="/item/:idItem" element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
    // <div className="App">
    //   <header>
    //     <Navbar />
    //     <ItemDetailContainer/>
    //   </header>
    // </div>
  );
}

export default App;
