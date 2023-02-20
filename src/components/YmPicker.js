import { useEffect, useState } from "react";
// @mui
import { TextField, Stack, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function YmdPicker({ value, onChange }) {
	const [year, setYear] = useState("");
	const [month, setMonth] = useState("");

	useEffect(() => {
		if (Boolean(value)) {
			const [y, m] = value.split("/");
			setYear(y);
			setMonth(m);
		}
	}, [value]);

	useEffect(() => {
		if (year !== "" && month !== "") {
			onChange(`${year}/${month}`);
		}
	}, [year, month]);

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
				sx={{ width: "128px" }}
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
		</Stack>
	);
}
