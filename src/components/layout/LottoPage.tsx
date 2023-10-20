import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { lottoTypes } from "../../assets/data.json";

const LottoPage = () => {
	const { lottoType } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		if (
			!lottoTypes
				.map((lottoType) => lottoType.toLowerCase())
				.includes(lottoType?.toLowerCase() ?? "")
		) {
			navigate("404");
		}
	}, [lottoType]);

	return (
		<div>
			<h1>{lottoType}</h1>
		</div>
	);
};
export default LottoPage;
