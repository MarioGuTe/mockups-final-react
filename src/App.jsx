import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";
import Cart from "./Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="details" element={<Details />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
