import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/index"
import  MainLayout  from "../layout/MainLayout"

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        { path: "/", element: <Home/> },
      ],    
    },
  ]);

export default router;