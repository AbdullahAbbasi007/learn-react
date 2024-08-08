import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home } from "./pages";
function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/about",
			element: <About />,
		},
	]);
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
