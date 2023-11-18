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
	additional: number[];
	refund?: number;
};

export default LottoType;
