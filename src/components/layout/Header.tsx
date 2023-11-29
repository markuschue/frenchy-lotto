import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Header = () => {
	return (
		<div className="text-[#fff]">
			<div className="bg-[#131516] min-h-[96vh]">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Header;
