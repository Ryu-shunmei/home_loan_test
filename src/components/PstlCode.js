import axios from "axios";
import * as Yup from "yup";
import { useEffect, useState } from "react";
// @mui
import { Box, TextField, Stack } from "@mui/material";
// settings
import REGULARS from "src/settings/regulars";
import Lable from "./Lable";
// ----------------------------------------------------------------------

export default function PstlCode({ value, onChange, setResults, ...other }) {
	const [fomartErr, setFomartErr] = useState(false);
	useEffect(() => {
		if (Boolean(value) && Yup.string().required().matches(REGULARS.post_code).isValidSync(value)) {
			setFomartErr(false);
			axios.get(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${value.replace("-", "")}&limit=1`).then((response) => {
				const [results] = response.data.results;
				setResults(results);
			});
		} else {
			setFomartErr(Boolean(value));
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
			<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
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
				{fomartErr && <Lable text="入力された郵便番号の形式が間違っています。" error={true} />}
			</Stack>
		</Box>
	);
}
