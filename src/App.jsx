

import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Order from "./pages/Order/Order";
import React from "react";
export default function App() {
 window.Telegram.WebApp.expand();
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
}
