// @mui
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Stack } from "@mui/system";

// ----------------------------------------------------------------------

export default function Sections({ children, handleDelete, title, ...other }) {
	const theme = useTheme();
	return (
		<Box
			sx={{
				width: "100%",
				border: `1px solid ${theme.palette.primary.main}`,
				borderRadius: "4px",
				boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
			}}
		>
			<Box
				sx={{
					...other,
					width: "100%",
					paddingY: "3px",
					paddingX: "16px",
					borderRadius: "2.5px 2.5px 0px 0px",
					color: theme.palette.common.white,
					background: theme.palette.primary.main,
				}}
			>
				<Stack direction="row" justifyContent="center" alignItems="center">
					<Box>
						<Typography variant="b14">{title}</Typography>
					</Box>
					<Box sx={{ flexGrow: 1 }} />
					<Button variant="contained" sx={{ boxShadow: "none" }} onClick={() => handleDelete()}>
						削除
					</Button>
				</Stack>
			</Box>
			<Box width="100%">{children}</Box>
		</Box>
	);
}
