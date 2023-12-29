import {
	Route,
	RouterProvider,
	createHashRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Header from "../components/layout/Header";
import HomePage from "../components/layout/HomePage";
import LottoPage from "../components/layout/LottoPage";
import NotFoundPage from "../components/layout/NotFoundPage";

const Router = () => {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path="/" element={<Header />}>
				<Route index element={<HomePage />} />
				<Route path="/lotto/:lottoType" element={<LottoPage />} />
				<Route path="/about" element={<div>About</div>} />
				<Route path="/privacy-policy" element={<div>Privacy</div>} />
				<Route path="/cookie-policy" element={<div>Cookie</div>} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
};

export default Router;
