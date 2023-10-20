import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Header from "../components/layout/Header";
import HomePage from "../layout/HomePage";

const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Header />}>
				<Route index element={<HomePage />} />
				<Route path="*" element={<h1>404</h1>} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
};

export default Router;
