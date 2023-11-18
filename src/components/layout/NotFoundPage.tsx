import ReturnHomeButton from "../atomic/ReturnHomeButton";

const NotFoundPage = () => (
	<div className="flex flex-col gap-3 justify-center items-center h-screen">
		<h1 className="font-bold text-9xl">404</h1>
		<h2 className="font-bold text-3xl">Page not found</h2>
		<ReturnHomeButton className="mt-5" />
	</div>
);

export default NotFoundPage;
