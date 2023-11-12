import Carousel from "react-material-ui-carousel";
import jsonFile from "../../assets/images.json";
import LottoButton from "../../types/LottoButton";
import { useNavigate } from "react-router-dom";
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
		<>
			<Carousel>
				{jsonFile.dogs.map((image) => (
					<img key={image} src={image} />
				))}
			</Carousel>
			<div>
				{buttons.map((button) => (
					<button
						key={button.name}
						type="button"
						onClick={() => handleClick(button.route)}
					>
						{button.name}
					</button>
				))}
			</div>
		</>
	);
};

export default HomePage;
