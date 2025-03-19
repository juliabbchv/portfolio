import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/web-dev" element={<HomePage />}></Route>
        <Route path="/social-media" element={<HomePage />}></Route>
        <Route path="/contact-me" element={<HomePage />}></Route>
        <Route path="/web-dev/:project" element={<HomePage />}></Route>
        <Route path="/social-media/:project" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
