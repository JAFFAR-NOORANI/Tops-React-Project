import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/styles.css";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Home from "./features/pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./features/pages/Shop.jsx";
import Accounts from "./features/pages/Accounts.jsx";
import Login from "./features/pages/Login.jsx";
import Wishlist from "./features/pages/Wishlist.jsx";
import Cart from "./features/pages/Cart.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLogin from "./features/pages/AdminPages/AdminLogin.jsx";
import Dashboard from "./features/pages/AdminPages/Dashboard.jsx";
import AdminProductForm from "./features/pages/AdminPages/AdminProductForm.jsx";
import AdminCategory from "./features/pages/AdminPages/AdminCategory.jsx";
import AdminHome from "./features/pages/AdminPages/AdminHome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/account",
        element: <Accounts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/adminlogin",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: <AdminHome />,
    children: [
      { 
        path: "/admin/product",
        element: <AdminProductForm />,
      },
      { 
        path: "/admin/category",
        element: <AdminCategory />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
