import { Outlet } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-[#131516] text-[#fff] min-h-[100vh]">
			<Outlet />
		</div>
	);
};

export default Header;
