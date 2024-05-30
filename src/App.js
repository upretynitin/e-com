// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './component/layouts/Header';
import Home from './component/Home';
import Footer from './component/layouts/Footer';
import ShopDetails from './component/ShopDetails';
// import Shop from './component/Shop';
import Checkout from './component/Checkout';
import Contact from './component/Contact';
import ProductDetail from './component/product/ProductDetail';
import Cart from './component/cart/Cart';
import Login from './component/Login';
import Register from './component/Register';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/action/UserAction';
import Profile from './component/user/Profile';
import Updateprofile from './component/user/Updateprofile';
import Updatepassword from './component/user/Updatepassword';
import Shipping from './component/cart/Shipping';
import ConfirmOrder from './component/cart/ConfirmOrder';
import Payment from './component/cart/Payment';
import axios from 'axios';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Shop from './component/category/Shop';
import Success from './component/Success';


function App() {
  const dispatch = useDispatch()

  //payment apikey get
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  console.log(stripeApiKey)

  useEffect(()=>{
    dispatch(loadUser())
    getStripeApiKey()
  }, [dispatch])

  
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/shop' element={<Shop/>} /> */}
      <Route path='/shopdetails' element={<ShopDetails/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path='/productDetails/:id' element={<ProductDetail/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/updateprofile' element={<Updateprofile/>}/>
      <Route path='/updatepassword' element={<Updatepassword/>}/>
      <Route path='/shipping' element={<Shipping/>}/>
      <Route path='/order/confirm' element={<ConfirmOrder />}/>
      <Route path='/success' element={<Success />}/>
      {
        stripeApiKey && (
          <Route
            path="/payment"
            element={
              <Elements stripe={loadStripe(stripeApiKey)}>
                <Payment />
              </Elements>
            }
          />
        )
      }
      <Route path='/shop/:cname' element={<Shop/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
