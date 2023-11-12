import LottoType, { LottoResult, LottoTypes } from "../types/LottoType";

const getRandomIntInclusive = (min: number, max: number) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const powerBall = () => {
	const PBresult: LottoResult = {
		numbers: [],
		stars: [],
		numComp: 0,
	};
	for (let i = 0; i < 5; i++) {
		PBresult.numbers.push(Math.floor(getRandomIntInclusive(1, 69)));
	}
	PBresult.stars.push(Math.floor(getRandomIntInclusive(1, 26)));
	return PBresult;
};

export const megaMillions = () => {
	const MMresult: LottoResult = {
		numbers: [],
		stars: [],
		numComp: 0,
	};
	for (let i = 0; i < 5; i++) {
		MMresult.numbers.push(Math.floor(getRandomIntInclusive(1, 70)));
	}
	MMresult.stars.push(Math.floor(getRandomIntInclusive(1, 25)));
	return MMresult;
};

export const euroMillions = () => {
	const EMresult: LottoResult = {
		numbers: [],
		stars: [],
		numComp: 0,
	};
	for (let i = 0; i < 5; i++) {
		EMresult.numbers.push(Math.floor(getRandomIntInclusive(1, 50)));
	}
	for (let i = 0; i < 2; i++) {
		EMresult.stars.push(Math.floor(getRandomIntInclusive(1, 12)));
	}
	return EMresult;
};

export const euroJackpot = () => {
	const EJresult: LottoResult = {
		numbers: [],
		stars: [],
		numComp: 0,
	};
	for (let i = 0; i < 5; i++) {
		EJresult.numbers.push(Math.floor(getRandomIntInclusive(1, 50)));
	}
	for (let i = 0; i < 2; i++) {
		EJresult.stars.push(Math.floor(getRandomIntInclusive(1, 12)));
	}
	return EJresult;
};

export const primitva = () => {
	const Presult: LottoResult = {
		numbers: [],
		stars: [],
		numComp: 0,
	};
	for (let i = 0; i < 6; i++) {
		Presult.numbers.push(Math.floor(getRandomIntInclusive(1, 49)));
	}
	Presult.stars.push(Math.floor(getRandomIntInclusive(0, 9)));
	return Presult;
};

export const bonoloto = () => {
	const BLresult: LottoResult = {
		numbers: [],
		stars: [],
		numComp: 0,
	};
	for (let i = 0; i < 6; i++) {
		BLresult.numbers.push(Math.floor(getRandomIntInclusive(1, 49)));
	}
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
