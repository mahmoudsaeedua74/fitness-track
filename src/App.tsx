import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
export default function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}
