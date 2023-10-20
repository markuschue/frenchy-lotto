import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Header from "../components/layout/Header"

const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Header />} >
				<Route index element={<h1>Home</h1>} />
				<Route path="*" element={<h1>404</h1>} />
			</Route>
		)
	)
	return (
		<RouterProvider router={router} />
	)
}

export default Router;