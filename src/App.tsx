import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import New from "./pages/New";
import New11 from "./pages/New11";
import Product11 from "./pages/Product11";
import ProductPage from "./pages/ProductPage";
import Shoopping from "./pages/Shoopping";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/bo-dung-cu-van-vit" element={<Product11 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<New />} />
        <Route path="/news/sua-can-ho-chat-choi" element={<New11 />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping" element={<Shoopping />} />
      </Routes>
    </>
  );
}

export default App;
