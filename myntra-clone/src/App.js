import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Men from './Pages/Men';
import Register from './Pages/Register';
import Women from "./Pages/Women";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/men" element = {<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
