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
import { MarkdownTemplate } from "../components/layout/MarkdownTemplate";

const Router = () => {
	const router = createHashRouter(
		createRoutesFromElements(
			<Route path="/" element={<Header />}>
				<Route index element={<HomePage />} />
				<Route path="/lotto/:lottoType" element={<LottoPage />} />
				<Route
					path="/about"
					element={<MarkdownTemplate filename="about.md" />}
				/>
				<Route
					path="/privacy-policy"
					element={<MarkdownTemplate filename="privacy.md" />}
				/>
				<Route
					path="/cookie-policy"
					element={<MarkdownTemplate filename="cookies.md" />}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
};

export default Router;
