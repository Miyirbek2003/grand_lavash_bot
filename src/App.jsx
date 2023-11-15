

import Search from "./components/Search/Search";
import Products from "./components/Products/Products";
import Bottom from "./components/Bottom/Bottom";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Order from "./pages/Order/Order";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}
