import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import About from "../pages/About";
import { AdminPath } from "./admin.routes";
import { routeGenerator } from "../utilis/routes.genarators";
import { facultyPath } from "./Faculty.routes";
import { studentPaths } from "./student.routes";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(AdminPath),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPath),
  },
  {
    path: "/student",
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
