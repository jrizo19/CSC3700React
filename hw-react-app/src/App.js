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
import EditCustomer from "./components/EditCustomer";
import EditProduct from "./components/EditProduct";
import AddCustomer from "./components/AddCustomer";
import AddProduct from "./components/AddProduct";

function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route exact path='customers' element={<Customers/>}></Route>
                <Route exact path='customers/add' element={<AddCustomer/>}></Route>
                <Route exact path='customers/:id' element={<CustomerDetails/>}></Route>
                <Route exact path='customers/:id/edit' element={<EditCustomer/>}>
                    <Route index element={<CustomerDetails/>}></Route>
                </Route>
                <Route exact path='products' element={<Products/>}></Route>
                <Route exact path='products/add' element={<AddProduct/>}></Route>
                <Route exact path='products/:id' element={<ProductDetails/>}></Route>
                <Route exact path='products/:id/edit' element={<EditProduct/>}>
                    <Route index element={<ProductDetails/>}></Route>
                </Route>
                <Route exact path='sales' element={<Sales/>}></Route>
                <Route path='*' element={<NotFound/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
