import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BrowsePage from "../pages/BrowsePage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'signup',
        element: <Signup />
    },
    {
        path: "browse",
        element: <BrowsePage />
    }

]);


export default routes;