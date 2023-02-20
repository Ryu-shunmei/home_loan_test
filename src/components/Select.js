// @mui
import { useTheme } from "@mui/material/styles";
import { Select as MuiSelect, MenuItem } from "@mui/material";

// ----------------------------------------------------------------------

export default function Select({ config, value, onChange, textAlign = "center", ...other }) {
	const theme = useTheme();

	return (
		<MuiSelect
			fullWidth
			value={value}
			displayEmpty
			MenuProps={{
				variant: "menu",
				PaperProps: {
					style: {
						paddingY: 2,
						boxShadow: "0px 0px 15px rgba(60, 72, 196, 0.1)",
						border: `1px solid ${theme.palette.primary.lighter}`,
						borderColor: "#E4E7FF",
					},
				},
			}}
			sx={{
				"& .MuiSelect-select": {
					textAlign: { textAlign },
					color: theme.palette.text.primary,
				},
				...other,
			}}
			onChange={(e) => onChange(e.target.value)}
		>
			{config.map((item, index) => (
				<MenuItem key={index} value={item.value}>
					{item.lable}
				</MenuItem>
			))}
		</MuiSelect>
	);
}
