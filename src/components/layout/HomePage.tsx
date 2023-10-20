import Carousel from "react-material-ui-carousel";
import jsonFile from "../../assets/images.json";
import LottoButton from "../../types/LottoButton";

const HomePage = () => {
	const buttons: LottoButton[] = [
		{ name: "Powerball", route: "/power-ball" },
		{ name: "Megamillions", route: "/megamillions" },
		{ name: "Euromillions", route: "/euro-millions" },
		{ name: "Eurojackpot", route: "/euro-jackpot" },
		{ name: "Primitiva", route: "/primitiva" },
		{ name: "Bonoloto", route: "/bono-loto" },
	];

	return (
		<>
			<Carousel>
				{jsonFile.dogs.map((image) => (
					<img key={image} src={image} />
				))}
			</Carousel>
			<div>
				{buttons.map((button) => (
					<button type="button">{button.name}</button>
				))}
			</div>
		</>
	);
};

export default HomePage;
