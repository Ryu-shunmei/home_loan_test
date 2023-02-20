// @mui
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Lable({ text, error = false, ...other }) {
	const theme = useTheme();
	return (
		<Typography component={Box} variant="iconLable" sx={{ mt: "5px", pl: "2px", color: error ? theme.palette.error.main : theme.palette.grey[250], ...other }}>
			※{text}
		</Typography>
	);
}
