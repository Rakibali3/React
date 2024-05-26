import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";
import userContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Contact from "./components/Contact";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));


const App = () => {
   const [name, setName] = useState();

   useEffect(() => {
      const data = {
         name: "Ali"
      }
      setName(data.name);
   }, [])
   return (
      <Provider store={appStore}>
         <userContext.Provider value={{ userInfo: name, setName }}>
            <div className="main">
               <Header />
               <Outlet />
               <Footer />
            </div>
         </userContext.Provider>
      </Provider>
   )
}
const appLayout = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Body />
         },
         {
            path: "/about",
            element: <Suspense fallback={<Shimmer />}><About /></Suspense>
         },
         {
            path: "/contact",
            element: <Contact />
         },
         {
            path: "/resturants/:resId",
            element: <ResturantMenu />
         },
         {
            path: "/grocery",
            element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
         },
         {
            path: "/cart",
            element: <Cart />
         },
      ],
   },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appLayout} />);