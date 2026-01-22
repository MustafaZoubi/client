import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BrowsePage from "../pages/BrowsePage";
import ProductDetails from "../pages/ProductDetails";
import Overview from "../components/Overview";
import AchievementsLayout from "../components/AchievementsLayout";
import Profile from "../pages/Profile";
import CartPage from "../pages/CartPage";


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
                element: <AchievementsLayout />
            },

        ],
    },
    {
        path: "profile",
        element: <Profile />
    },
    {
        path: "cart",
        element: <CartPage />
    }

]);


export default routes;