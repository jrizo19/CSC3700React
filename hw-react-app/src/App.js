import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Customers from "./components/Customers";
import Products from "./components/Products";
import Sales from "./components/Sales";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import CustomerDetails from "./components/CustomerDetails";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='customers' element={<Customers />}>
              <Route path=':id' element={<CustomerDetails />}></Route>
          </Route>
          <Route exact path='products' element={<Products />}>
              <Route path=':id' element={<ProductDetails />}></Route>
          </Route>
          <Route path='sales' element={<Sales />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
  );
}

export default App;
