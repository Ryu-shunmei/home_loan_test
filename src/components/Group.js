// @mui
import { Box, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Group({ children, title, error, required, ...other }) {
	const theme = useTheme();
	return (
		<Box sx={{ width: "100%" }}>
			<Box
				sx={{
					...other,
					width: "100%",
					paddingY: "3px",
					paddingX: "16px",
					background: error ? theme.palette.error.main : theme.palette.primary.lighter,
					color: error ? theme.palette.common.white : theme.palette.text.main,
				}}
			>
				<Typography variant="b14">{title}</Typography>
			</Box>
			<Box
				sx={{
					width: "100%",
					paddingX: "16px",
					paddingTop: "12px",
					paddingBottom: "32px",
				}}
			>
				{children}
			</Box>
		</Box>
	);
}
