import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css"
import AddHotel from "./pages/AddHotel";
import ListHotel from "./pages/ListHotel";
import { HotelContextProvider } from "./context/HotelContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addhotel",
    element: <AddHotel />,
  },
  {
    path: "/listhotel",
    element: <ListHotel />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HotelContextProvider>
    <RouterProvider router={router} />
  </HotelContextProvider>
);
