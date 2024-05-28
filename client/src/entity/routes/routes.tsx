import MainPage from "../../pages/MainPage/MainPage.tsx";
import LoginPage from "../../pages/LoginPage/LoginPage.tsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.tsx";
import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/registration",
        element: <RegistrationPage />
    }
])
