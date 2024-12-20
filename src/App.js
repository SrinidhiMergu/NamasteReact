import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            {/* //Header */}
            <Header></Header>
            <Body></Body>
            {/* //Body */}
            {/* //Footer */}
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/about",
    element: <About/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)