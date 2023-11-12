import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { lottoTypes } from "../../assets/data.json";
import LottoType, { LottoResult } from "../../types/LottoType";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RefreshIcon from "@mui/icons-material/Refresh";
import { getLotto } from "../../utils/lottoUtils";
import uuid from "react-uuid";

const LottoPage = () => {
	const { lottoType } = useParams();
	const navigate = useNavigate();
	const [currentLotto, setCurrentLotto] = useState<LottoType | null>(null);
	const [lottoResult, setLottoResult] = useState<LottoResult | null>(null);

	const generateResults = () => {
		if (currentLotto) setLottoResult(getLotto(currentLotto));
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
				generateResults();
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
			<div
				className={`grid grid-cols-${lottoResult?.numbers?.length} items-center justify-items-center`}
			>
				{lottoResult?.numbers?.map((number) => (
					<img
						key={uuid()}
						src={`/images/numbers/${number}.png`}
						alt={number.toString()}
					/>
				))}
			</div>
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
					onClick={() => generateResults()}
				>
					Regenerate
				</Button>
			</div>
		</div>
	);
};
export default LottoPage;
