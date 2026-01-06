import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BrowsePage from "../pages/BrowsePage";
import ProductDetails from "../pages/ProductDetails";
import Overview from "../components/Overview";
import Achievements from "../components/Achievements";

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
    },
    {
        path: "browse/details/:id",
        element: <ProductDetails />,
        children: [
            {
                index: true,
                element: <Overview />

            },
            {
                path: "overview",
                element: <Overview />
            },
            {
                path: "achievements",
                element: <Achievements />
            }
        ],
    }

]);


export default routes;