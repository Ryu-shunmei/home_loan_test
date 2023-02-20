// @mui
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function WlcTitle({ text, ...other }) {
	const theme = useTheme();
	return (
		<Box
			sx={{
				paddingX: "45px",
				display: "flex",
				width: "100%",
				height: "140px",
				fontWeight: 500,
				fontSize: "24px",
				color: theme.palette.primary.main,
				textAlign: "center",
				alignItems: "center",
				justifyContent: "center",
				...other,
			}}
		>
			{text}
		</Box>
	);
}
