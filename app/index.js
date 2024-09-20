import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "../app/(tabs)/login";
import Register from "../app/(tabs)/register";
import User from "../app/(tabs)/usuario";
import ErrorPage from "./error_Page";




const router = createBrowserRouter([
    {
      
      path: "/",
      element: <Navigate to="login"/>,
      errorElement: <ErrorPage/>, 
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