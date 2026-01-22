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

import AdminRoute from "../pages/admin/AdminRoutes";
import AdminLayout from "../pages/admin/AdminLayout"
import AdminUsers from "../pages/admin/AdminUsers"
import AdminGames from "../pages/admin/AdminGames"
import AdminAchievements from "../pages/admin/AdminAchievements"

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
            { index: true, element: <Overview /> },
            { path: "overview", element: <Overview /> },
            { path: "achievements", element: <AchievementsLayout /> },
        ],
    },
    {
        path: "profile",
        element: <Profile />
    },
    {
        path: "cart",
        element: <CartPage />
    },

    {
        path: "admin",
        element: (
            <AdminRoute>
                <AdminLayout />
            </AdminRoute>
        ),
        children: [
            { path: "users", element: <AdminUsers /> },
            { path: "games", element: <AdminGames /> },
            { path: "achievements", element: <AdminAchievements /> },
        ],
    },
]);

export default routes;
