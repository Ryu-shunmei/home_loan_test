// @mui
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Tip({ text, ...other }) {
	const theme = useTheme();
	return (
		<Typography component={Box} variant="iconLable" sx={{ pl: "2px", color: theme.palette.grey[250], ...other }}>
			{text}
		</Typography>
	);
}
