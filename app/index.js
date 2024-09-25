import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./src/(taps)/pantallaLogin";
import Register from "./src/(taps)/pantallaRegister";
import User from "./src/(taps)/pantallaUsuario";
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