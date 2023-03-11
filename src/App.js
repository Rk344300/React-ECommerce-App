
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { additems } from './actions';
import customFetch from './api';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import AddItem from './Components/AddItem';

import CartItem from './Components/CartItem';
import ItemDetail from './Components/ItemDetail';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';

function App() {
  //fetching the state from store
  const itemDetail = useSelector((state) => state.itemView);

  const dispatch = useDispatch();
  //this url is used to fetch the data
  const url = "https://my-json-server.typicode.com/Rk344300/ecart/products";

  useEffect(() => {
    const fetching = async () => {
      let response = await customFetch(url, {
        method: "GET",
      });
      // console.log("data", response);

      let Data = response.data.map((product) => {
        product.change = true;
        return product;
      });
      //storing the data to localStorage for data persistant
      window.localStorage.setItem("allItems", JSON.stringify(Data));
      let allItems = JSON.parse(window.localStorage.getItem("allItems"));
      dispatch(additems(Data));
      // console.log("dispatch successful");

    }
    fetching();

  }, [])

  return (
    <Router basename="/React-ECommerce-App">


      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ProductList />} />
        <Route path='/additem' element={<AddItem />} />
        <Route path={`/itemDetails/${itemDetail.id}`}
          element={<ItemDetail itemDetail={itemDetail} />} />
        <Route path="/cartDetails" element={<CartItem />} />
      </Routes>


    </Router>
  );
}

export default App;
