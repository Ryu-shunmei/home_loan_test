// @mui
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

export default function Choose({ config, value, onClick, ...other }) {
	const theme = useTheme();
	return (
		<Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing="15px">
			{config.map((item) => (
				<Box
					key={item.value}
					sx={{
						fontWeight: 500,
						fontSize: "16px",
						color: theme.palette.primary.main,
						textAlign: "center",
						width: "160px",
						lineHeight: "48px",
						border: `1px solid ${value === item.value ? theme.palette.primary.main : theme.palette.primary.lighter}`,
						borderRadius: "8px",
						background: value === item.value ? theme.palette.primary.lighter : theme.palette.common.white,
						boxShadow: value === item.value ? "none" : "0px 0px 15px rgba(60, 72, 196, 0.1)",
						textDecoration: "none",
						...other,
					}}
					onClick={() => onClick(item.value)}
				>
					{item.lable}
				</Box>
			))}
		</Stack>
	);
}
