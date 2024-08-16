import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
]);

export default router;
