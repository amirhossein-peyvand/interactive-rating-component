import { createBrowserRouter } from "react-router-dom";
import Thankyou from "./components/Thankyou";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/thankyou", element: <Thankyou /> },
    ],
  },
]);

export default router;
