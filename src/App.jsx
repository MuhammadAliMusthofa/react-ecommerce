// import NavDropdown from 'react-bootstrap/NavDropdown';

import "./index.css";
import React from 'react';
import HomePageToko from "./pages/HomePageToko";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import SearchResult from "./pages/SearchResult";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Promo from "./pages/Promo";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailAccount from "./pages/DetailAccount";
import EditProfile from "./pages/EditProfile";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderDetail from "./pages/DetailOrder";
import Alamat from "./pages/Adress";
import Payment from "./pages/Payment";
import TransactionDone from "./pages/TransactionDone";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageToko />,
  },
  {
    path: "/product",
    element: <HomePageToko />,
  },
  {
    path: "/product-detail",
    element: <ProductDetail />,
  },
  {
    path: "/hasil-cari",
    element: <SearchResult />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/profile",
    element: <DetailAccount/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/edit_profile",
    element: <EditProfile/>,
  },
  {
    path: "/checkout",
    element: <Checkout/>,
  },
  {
    path: "/alamat",
    element: <Alamat/>,
  },
  {
    path: "/order-detail",
    element: <OrderDetail/>,
  },
  {
    path: "/payment",
    element: <Payment/>,
  },
  {
    path: "/transaction-done",
    element: <TransactionDone/>,
  },
  {
    path: "/promo",
    element: <Promo/>,
  },

]);


function App() {
  return (
    <>
     <RouterProvider router={router} />
     
    </>
  );
}

export default App;
