import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import ProfilesPage from "./pages/ProfilesPage";
import ProfilePage from "./pages/ProfilePage";
import ProductsPage from "./pages/ProductsPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <HomePage /> },
  {
    path: "/profiles",
    element: <ProfilesPage />,
    children: [{ path: ":profileId", element: <ProfilePage /> }],
  },
  { path: "/products", element: <ProductsPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
