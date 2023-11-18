import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { lottoTypes } from "../../assets/data.json";
import LottoType, { LottoResult, LottoTypes } from "../../types/LottoType";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getLotto } from "../../utils/lottoAlgorithms";
import uuid from "react-uuid";

const LottoPage = () => {
	const { lottoType } = useParams();
	const navigate = useNavigate();
	const [currentLotto, setCurrentLotto] = useState<LottoType | null>(null);
	const [lottoResult, setLottoResult] = useState<LottoResult | null>(null);
	const [gridSize, setGridSize] = useState<number | null>(null);

	const generateResults = (lotto: LottoType) => {
		const obtainedResult = getLotto(lotto);
		setLottoResult(obtainedResult);
		setGridSize(
			obtainedResult.numbers.length +
				obtainedResult.additional.length +
				(obtainedResult.refund ? 1 : 0),
		);
	};

	const getAdditionalImageSource = (lotto: LottoType, number: number) => {
		if (lotto === LottoTypes.PowerBall) {
			return `/images/numbersStarPB/${number}-estrella-PBall-rojo.png`;
		} else if (
			lotto === LottoTypes.MegaMillions ||
			lotto === LottoTypes.EuroMillions
		) {
			return `/images/numbersStarMM/${number}-estrella-MM.png`;
		}
		return `/images/numbers/${number}.png`;
	};

	useEffect(() => {
		if (
			lottoTypes
				.map((lottoType) => lottoType.toLowerCase())
				.includes(lottoType?.toLowerCase() ?? "")
		) {
			const foundLotto =
				lottoTypes.find(
					(lotto) => lotto.toLowerCase() === lottoType?.toLowerCase(),
				) ?? null;
			setCurrentLotto(foundLotto);
			if (foundLotto !== null) {
				generateResults(foundLotto);
				return;
			}
		}
		navigate("404", { replace: true });
	}, [lottoType]);

	return (
		<div className="p-5 gap-5">
			<div className="flex flex-col text-center gap-3">
				<h1 className="text-3xl font-bold">{currentLotto}</h1>
				<h2>This is your result</h2>
			</div>
			{lottoType && gridSize && (
				<div className="flex justify-center my-10">
					<div
						style={{
							gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
						}}
						className={`grid items-center w-fit`}
					>
						{lottoResult?.numbers?.map((number) => (
							<img
								key={uuid()}
								src={`/images/numbers/${number}.png`}
								alt={number.toString()}
							/>
						))}
						{lottoResult?.additional.map((number) => (
							<img
								key={uuid()}
								src={getAdditionalImageSource(
									currentLotto!,
									number,
								)}
								alt={number.toString()}
							/>
						))}
						{lottoResult?.refund && (
							<img
								key={uuid()}
								src={`/images/numbersStarMM/${lottoResult?.refund}-estrella-MM.png`}
								alt={lottoResult?.refund.toString()}
							/>
						)}
					</div>
				</div>
			)}
			<div className="flex justify-around ">
				<Button
					variant="contained"
					className="w-40"
					size="large"
					startIcon={<ArrowBackIcon />}
					onClick={() => navigate("/")}
				>
					Home
				</Button>
				<Button
					variant="contained"
					className="w-40"
					size="large"
					startIcon={<RefreshIcon />}
					onClick={() =>
						currentLotto && generateResults(currentLotto)
					}
				>
					Regenerate
				</Button>
			</div>
		</div>
	);
};
export default LottoPage;
