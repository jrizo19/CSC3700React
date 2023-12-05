import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Sales from "./components/Sales";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";


function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='customers' element={<Customers />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='sales' element={<Sales />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
  );
}

export default App;
