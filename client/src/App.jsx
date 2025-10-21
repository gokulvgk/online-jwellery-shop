import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/register" element = {<RegisterPage/>}></Route>
        <Route path = "/login" element = {<LoginPage/>}></Route>
        <Route path="/" element={<HomePage/>} />
        <Route path="/CartPage" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
