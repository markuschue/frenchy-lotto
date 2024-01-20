import Carousel from "react-material-ui-carousel";
import jsonFile from "../../assets/images.json";
import LottoButton from "../../types/LottoButton";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const HomePage = () => {
	const navigate = useNavigate();

	const buttons: LottoButton[] = [
		{ name: "Powerball", route: "/powerball" },
		{ name: "Megamillions", route: "/megamillions" },
		{ name: "Euromillions", route: "/euromillions" },
		{ name: "Eurojackpot", route: "/eurojackpot" },
		{ name: "Primitiva", route: "/primitiva" },
		{ name: "Bonoloto", route: "/bonoloto" },
	];

	const handleClick = (route: string) => {
		navigate("/lotto" + route);
	};

	return (
		<div className="flex flex-col gap-10">
			<Carousel interval={1500} className="">
				{jsonFile.dogs.map((image) => (
					<img
						alt="dog"
						className="h-[100vh] w-full object-cover"
						key={image}
						src={import.meta.env.BASE_URL + image}
					/>
				))}
			</Carousel>
			<div className="min-h-[40vh] flex flex-col justify-around mb-10">
				<h1 className="text-center text-3xl font-bold">
					Generate and copy your Frenchy lottery numbers for your
					preferred lottery
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5 justify-items-center">
					{buttons.map((button) => (
						<Button
							key={button.name}
							variant="contained"
							className="w-40"
							size="large"
							onClick={() => handleClick(button.route)}
						>
							{button.name}
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomePage;
