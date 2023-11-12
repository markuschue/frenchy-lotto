import { lottoTypes } from "../assets/data.json";

type LottoType = (typeof lottoTypes)[number];
export type LottoResult = {
	numbers: number[];
	stars: number[];
	numComp: number;
};

export default LottoType;
