import React, { Suspense, lazy } from "react";
import  ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
import Footer from "./components/Footer";

const Grocery = lazy(()=>import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const App = ()=>{
   return( <div className="main">
        <Header />
        <Outlet />
        <Footer/>
    </div>
   )
}
const appLayout = createBrowserRouter([
   {
      path: "/",
      element:<App />,
      children: [
         {
            path: "/",
            element:<Body/>
         },
         {
            path:"/about",
            element:<Suspense fallback={<Shimmer />}><About /></Suspense>
         },
         {
            path:"/resturants/:resId",
            element:<ResturantMenu />
         },
         {
            path:"/grocery",
            element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>
         },
      ],
   },
  
]);

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appLayout}/>);