import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./routes/login";
import Register from "./routes/register";
import User from "./routes/user";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="login"/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/user",
      element: <User/>,
    },
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );