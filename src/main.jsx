import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Form from "./components/Form.jsx";
import About from "./components/About.jsx";
import Contacts from "./components/Contacts.jsx";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Form /> },
  {path:"/about" ,element: <About />},
  {path:"/contact" , element: <Contacts />}
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
