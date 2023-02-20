import { useEffect, useState, useMemo } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import { TextField, Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function YmdPicker({ value, onChange }) {
	const theme = useTheme();
	const [year, setYear] = useState("");
	const [month, setMonth] = useState("");
	const [day, setDay] = useState("");

	useEffect(() => {
		if (Boolean(value)) {
			const [y, m, d] = value.split("/");
			setYear(y);
			setMonth(m);
			setDay(d);
		}
	}, [value]);

	useEffect(() => {
		if (year !== "" && month !== "" && day !== "") {
			onChange(`${year}/${month}/${day}`);
		}
	}, [year, month, day]);

	return (
		<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="5px">
			<TextField
				type="number"
				placeholder="----"
				InputProps={{
					inputProps: {
						style: { textAlign: "center" },
					},
				}}
				value={year}
				fullWidth
				sx={{ width: "104px" }}
				onChange={(e) => setYear(e.target.value)}
			/>
			<Typography variant="rg16">年</Typography>
			<TextField
				type="number"
				placeholder="--"
				InputProps={{
					inputProps: {
						style: { textAlign: "center" },
					},
				}}
				value={month}
				fullWidth
				sx={{ width: "52px" }}
				onChange={(e) => setMonth(e.target.value)}
			/>
			<Typography variant="rg16">月</Typography>
			<TextField
				type="number"
				placeholder="--"
				InputProps={{
					inputProps: {
						style: { textAlign: "center" },
					},
				}}
				value={day}
				fullWidth
				sx={{ width: "52px", textAlign: "center" }}
				onChange={(e) => setDay(e.target.value)}
			/>
			<Typography variant="rg16">日</Typography>
		</Stack>
	);
}
