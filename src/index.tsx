import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainPage} from "./pages/main/MainPage";
import {Call} from "./pages/call/components/Call";
import {SignIn} from "./pages/signIn/SignIn";
import {SignUp} from "./pages/signUp/SignUp";
import {UserCabinet} from "./pages/user/UserCabinet";
import {UserStats} from "./pages/stats/UserStats";
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/room',
        element: <Call/>
    },
    {
        path: '/sign-in',
        element: <SignIn/>
    },
    {
        path: '/sign-up',
        element: <SignUp/>
    },
    {
        path: '/user',
        element: <UserCabinet/>
    },
    {
        path: '/stats',
        element: <UserStats/>
    }
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
