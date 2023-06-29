import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@picocss/pico";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SettingsPage from "./pages/SettingsPage.jsx";
import ErrorPage from "./routes/error-page.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/settings",
        element: <SettingsPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />{" "}
    </React.StrictMode>
);
