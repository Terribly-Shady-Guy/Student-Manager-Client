import { createBrowserRouter } from "react-router-dom";

import App from "../App";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import StudentRegistrationForm from "../pages/StudentRegistrationForm";
import StudentRegistrationList from "../pages/StudentRegistrationList";
import NewCourse from "../pages/NewCourse";
import NotFound from "../pages/NotFound";

const routes = [
    {
        path: "/",
        index: true,
        Component: Home
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/signup",
        Component: SignUp
    },
    {
        path: "/studentregistrationform",
        Component: StudentRegistrationForm
    },
    {
        path: "/studentregistrationlist",
        Component: StudentRegistrationList
    },
    {
        path: "/newcourse",
        Component: NewCourse
    },
    {
        path: "/*",
        Component: NotFound
    }
];

const rootRoute = {
    Component: App,
    children: routes
};

export const router = createBrowserRouter([rootRoute]);