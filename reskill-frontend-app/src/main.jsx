import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import HomePage from "./components/HomePage";
import SinglePost from "./components/SinglePost";
import NotFound from "./components/NotFound";
import NavBar from "./components/navbar";
import NavigationFooter from "./components/NavigationFooter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/homepage",
    element: <Navigate to="/" />,
  },
  {
    path: "/post/:id",
    element: <SinglePost />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-fit h-screen flex flex-col justify-between bg-[#fff]">
      <NavBar />
      <RouterProvider router={router} />
      <NavigationFooter />
    </div>
  </React.StrictMode>
);
