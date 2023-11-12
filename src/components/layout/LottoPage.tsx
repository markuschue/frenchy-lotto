import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { lottoTypes } from "../../assets/data.json";
import LottoType from "../../types/LottoType";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RefreshIcon from "@mui/icons-material/Refresh";

const LottoPage = () => {
	const { lottoType } = useParams();
	const navigate = useNavigate();
	const [currentLotto, setCurrentLotto] = useState<LottoType | null>(null);

	useEffect(() => {
		if (
			!lottoTypes
				.map((lottoType) => lottoType.toLowerCase())
				.includes(lottoType?.toLowerCase() ?? "")
		) {
			navigate("404", { replace: true });
		} else {
			setCurrentLotto(
				lottoTypes.find(
					(lotto) => lotto.toLowerCase() === lottoType?.toLowerCase(),
				) ?? null,
			);
		}
	}, [lottoType]);

	return (
		<div className="p-5">
			<div className="flex flex-col text-center gap-3">
				<h1 className="text-3xl font-bold">{currentLotto}</h1>
				<h2>This is your result</h2>
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
					onClick={() => navigate("/")}
				>
					Regenerate
				</Button>
			</div>
		</div>
	);
};
export default LottoPage;
