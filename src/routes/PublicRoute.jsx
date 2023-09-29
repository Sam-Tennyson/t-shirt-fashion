
import { lazy } from "react";
import { ROUTE_CONSTANTS } from "../shared/Routes";

const Home = lazy(() =>import("../views/Home"))

export const PublicRoute = [
    {
        path: ROUTE_CONSTANTS.HOME,
        element: <Home />,
        title: "Home"  
    },
]

