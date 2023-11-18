import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const ReturnHomeButton = ({ className }: { className?: string }) => {
	const navigate = useNavigate();
	return (
		<Button
			variant="contained"
			className={"w-40 " + className}
			size="large"
			startIcon={<ArrowBackIcon />}
			onClick={() => navigate("/")}
		>
			Home
		</Button>
	);
};

export default ReturnHomeButton;
