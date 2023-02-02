import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Product from "./pages/Product/Product";
import Products from './pages/Products/Products';
import "./App.scss"
const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      }
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




function App () {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
