import LottoType, { LottoResult, LottoTypes } from "../types/LottoType";

const getRandomIntInclusive = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateUniqueNumbers = (min: number, max: number, size: number) => {
	const result: number[] = [];
	for (let i = 0; i < size; i++) {
		let newNumber = getRandomIntInclusive(min, max);
		while (result.includes(newNumber)) {
			newNumber = getRandomIntInclusive(min, max);
		}
		result.push(newNumber);
	}
	return result;
};

export const powerBall = () => {
	const PBresult: LottoResult = {
		numbers: generateUniqueNumbers(1, 69, 5),
		additional: [getRandomIntInclusive(1, 26)],
	};
	return PBresult;
};

export const megaMillions = () => {
	const MMresult: LottoResult = {
		numbers: generateUniqueNumbers(1, 70, 5),
		additional: [getRandomIntInclusive(1, 25)],
	};
	return MMresult;
};

export const euroMillions = () => {
	const EMresult: LottoResult = {
		numbers: generateUniqueNumbers(1, 50, 5),
		additional: generateUniqueNumbers(1, 12, 2),
	};
	return EMresult;
};

export const euroJackpot = () => {
	const EJresult: LottoResult = {
		numbers: generateUniqueNumbers(1, 50, 5),
		additional: generateUniqueNumbers(1, 12, 2),
	};
	return EJresult;
};

export const primitva = () => {
	const Presult: LottoResult = {
		numbers: generateUniqueNumbers(1, 49, 6),
		additional: [],
		refund: getRandomIntInclusive(0, 9),
	};
	return Presult;
};

export const bonoloto = () => {
	const BLresult: LottoResult = {
		numbers: generateUniqueNumbers(1, 49, 6),
		additional: [],
	};
	return BLresult;
};

export const getLotto = (lottoType: LottoType) => {
	switch (lottoType) {
		case LottoTypes.PowerBall:
			return powerBall();
		case LottoTypes.MegaMillions:
			return megaMillions();
		case LottoTypes.EuroMillions:
			return euroMillions();
		case LottoTypes.EuroJackpot:
			return euroJackpot();
		case LottoTypes.Primitiva:
			return primitva();
		case LottoTypes.Bonoloto:
			return bonoloto();
		default:
			return powerBall();
	}
};
