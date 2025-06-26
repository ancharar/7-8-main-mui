import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import List from "./list/list";
import Main from "./main/main";
import Building from "./building/Building";
import Chart from "./chart/Chart";

const router = createBrowserRouter([
    {
        path: ""
        ,
        element: <Main />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/building/:id",
        element: <Building />,
    },
    {
        path: "/chart",
        element: <Chart />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
reportWebVitals();