import axios from "axios";
import * as Yup from "yup";
import { useEffect } from "react";
// @mui
import { Box, TextField } from "@mui/material";
// settings
import REGULARS from "src/settings/regulars";
// ----------------------------------------------------------------------

export default function PstlCode({ value, onChange, setResults, ...other }) {
	useEffect(() => {
		if (Boolean(value) && Yup.string().required().matches(REGULARS.post_code).isValidSync(value)) {
			console.log(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${value.replace("-")}`);
			axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${value.replace("-", "")}&limit=1`).then((response) => {
				const [results] = response.data.results;
				setResults(results);
			});
		} else {
			setResults({
				address1: "",
				address2: "",
				address3: "",
				kana1: "",
				kana2: "",
				kana3: "",
				prefcode: "",
				zipcode: "",
			});
		}
	}, [value]);
	return (
		<Box>
			<TextField
				value={value}
				placeholder="999-9999"
				fullWidth
				onChange={(event) => onChange(event.target.value)}
				sx={{
					width: "110px",
					...other,
				}}
			/>
		</Box>
	);
}
