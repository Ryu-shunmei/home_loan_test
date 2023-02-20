// @mui
import { Box, Stack, Typography, Radio as MuiRadio } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

export default function RadioGroup({ config, value, onChange }) {
	const theme = useTheme();

	return (
		<Stack direction="column" justifyContent="center" alignItems="flex-start" spacing="12px">
			{config.map((item) => (
				<Box
					key={item.value}
					sx={{
						textAlign: "start",
						minWidth: "100%",
						paddingY: "4px",
						paddingX: "8px",
						border: `1px solid ${value === item.value ? theme.palette.primary.light : theme.palette.primary.lighter}`,
						borderRadius: "8px",
						background: value === item.value ? theme.palette.primary.lighter : theme.palette.common.white,
						boxShadow: value === item.value ? "none" : "0px 0px 15px rgba(60, 72, 196, 0.1)",
						textDecoration: "none",
					}}
					onClick={() => onChange(item.value)}
				>
					<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="2px">
						<MuiRadio value={value === null ? "NULL" : value} checked={value === item.value} onClick={() => onChange(item.value)} />
						<Typography
							sx={{
								fontWeight: 500,
								fontSize: "16px",
								color: theme.palette.primary.main,
							}}
						>
							{item.lable}
						</Typography>
					</Stack>
				</Box>
			))}
		</Stack>
	);
}
