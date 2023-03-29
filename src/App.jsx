import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
