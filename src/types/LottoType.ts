import { lottoTypes } from "../assets/data.json";

export enum LottoTypes {
	PowerBall = "Powerball",
	MegaMillions = "Megamillions",
	EuroMillions = "Euromillions",
	EuroJackpot = "Eurojackpot",
	Primitiva = "Primitiva",
	Bonoloto = "Bonoloto",
}

type LottoType = (typeof lottoTypes)[number];

export type LottoResult = {
	numbers: number[];
	stars: number[];
	numComp: number;
};

export default LottoType;
