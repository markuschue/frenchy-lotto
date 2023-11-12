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
			<Carousel className="h-[100vh]">
				{jsonFile.dogs.map((image) => (
					<img key={image} src={image} />
				))}
			</Carousel>
			<div className="">
				<h1 className="text-center text-3xl font-bold">
					Generate and copy your Frenchy lottery numbers for your
					preferred lottery
				</h1>
			</div>
			<div className="flex gap-5 justify-center mb-10">
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
	);
};

export default HomePage;
