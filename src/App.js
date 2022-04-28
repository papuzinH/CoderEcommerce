//Styles
import "./App.css";

//Packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

//Pages
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";

//Components
import Navbar from "./components/NavBar";

//Context
import CartContextProvider from "./context/CartContext"


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
  );
}

export default App;
