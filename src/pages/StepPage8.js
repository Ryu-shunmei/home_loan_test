import * as Yup from "yup";
import { useMemo, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// @mui
import { Box, Stack, Container, Typography, TextField } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
// hooks
import useLocalStorage from "src/hooks/useLocalStorage";
// components
import Group from "src/components/Group";
import Lable from "src/components/Lable";
import WlcTitle from "src/components/WlcTitle";
import StepHeader from "src/components/StepHeader";
import StepFooter from "src/components/StepFooter";
import ResultConfirm from "src/sections/ResultConfirm";
// ----------------------------------------------------------------------

const Root = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	background: theme.palette.background.gradation,
}));

// ----------------------------------------------------------------------

const initData = {
	HeaderData1__costs: "",
	HeaderData1__amountOwnFunds: "",
	HeaderData1__amountAnyLoans: "",
	HeaderData1__amountRelativesDonation: "",
	HeaderData1__amountOthers: "",
	HeaderData1__BuildingPrice2: "",
	HeaderData1__LandPrice2: "",
	DetailData3: [],
};

// ----------------------------------------------------------------------

export default function () {
	const theme = useTheme();
	const navigate = useNavigate();
	const [data, setData] = useLocalStorage("stepData08", initData);
	const [open, setOpen] = useState(false);
	const [body, setBody] = useState("");
	const errors = {
		HeaderData1__costs: !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__costs),
		HeaderData1__amountOwnFunds: !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__amountOwnFunds),
		HeaderData1__amountAnyLoans: !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__amountAnyLoans),
		HeaderData1__amountRelativesDonation: !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__amountRelativesDonation),
		HeaderData1__amountOthers: data.HeaderData1__amountOthers === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__amountOthers),
		HeaderData1__BuildingPrice2: data.HeaderData1__BuildingPrice2 === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__BuildingPrice2),
		HeaderData1__LandPrice2: data.HeaderData1__LandPrice2 === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__LandPrice2),
	};

	const hasErorr = useMemo(() => {
		const temp = Object.values(errors).filter((item) => item === true);
		return temp.length > 0;
	}, [data]);

	const handlePost = (type) => {
		const data1 = JSON.parse(localStorage.getItem("stepData01", {}));
		const data2 = JSON.parse(localStorage.getItem("stepData02", {}));
		const data3 = JSON.parse(localStorage.getItem("stepData03", {}));
		const data4 = JSON.parse(localStorage.getItem("stepData04", {}));
		const data5 = JSON.parse(localStorage.getItem("stepData05", {}));
		const data6 = JSON.parse(localStorage.getItem("stepData06", {}));
		const data7 = JSON.parse(localStorage.getItem("stepData07", {}));
		const data8 = JSON.parse(localStorage.getItem("stepData08", {}));
		const postData = { ...data1, ...data2, ...data3, ...data4, ...data5, ...data6, ...data7, ...data8 };

		if (type === 1) {
			axios.post("http://127.0.0.1:8000/pre_body", postData).then((res) => {
				setBody(res.data.body);
				setOpen(true);
				console.log(res);
			});
		}
		if (type === 2) {
			axios.post("http://127.0.0.1:8000/test", postData).then((res) => {
				// setBody(res.data.body);
				// setOpen(false);
				console.log(res);
			});
		}
	};

	return (
		<Root>
			<StepHeader step={8} />
			<Container maxWidth="md">
				<Box sx={{ boxShadow: theme.effectStyle.outer, background: theme.palette.background.gray, paddingTop: "144px", paddingBottom: "120px", border: `1px solid ${theme.palette.primary.lighter}` }}>
					<WlcTitle text="資金計画について教えてください。" />
					<Group
						title="資金計画"
						error={
							errors.HeaderData1__costs |
							errors.HeaderData1__amountOwnFunds |
							errors.HeaderData1__amountAnyLoans |
							errors.HeaderData1__amountRelativesDonation |
							errors.HeaderData1__amountOthers |
							errors.HeaderData1__BuildingPrice2 |
							errors.HeaderData1__LandPrice2
						}
					>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									諸費用
								</Typography>
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__costs}
										fullWidth
										sx={{ width: "156px" }}
										onChange={(event) => setData({ ...data, HeaderData1__costs: event.target.value })}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="必須; 半角数字; 0~99999;" error={errors.HeaderData1__costs} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									自己資金
								</Typography>
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__amountOwnFunds}
										fullWidth
										sx={{ width: "156px" }}
										onChange={(event) => setData({ ...data, HeaderData1__amountOwnFunds: event.target.value })}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="必須; 半角数字; 0~99999;" error={errors.HeaderData1__amountOwnFunds} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									その他の借入
								</Typography>
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__amountAnyLoans}
										fullWidth
										sx={{ width: "156px" }}
										onChange={(event) => setData({ ...data, HeaderData1__amountAnyLoans: event.target.value })}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="必須; 半角数字; 0~99999;" error={errors.HeaderData1__amountAnyLoans} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									親族からの贈与
								</Typography>
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__amountRelativesDonation}
										fullWidth
										sx={{ width: "156px" }}
										onChange={(event) => setData({ ...data, HeaderData1__amountRelativesDonation: event.target.value })}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="必須; 半角数字; 0~99999;" error={errors.HeaderData1__amountRelativesDonation} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									その他（借換）
								</Typography>
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__amountOthers}
										fullWidth
										sx={{ width: "156px" }}
										onChange={(event) => setData({ ...data, HeaderData1__amountOthers: event.target.value })}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="任意; 半角数字; 0~99999;" error={errors.HeaderData1__amountOthers} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									建物購入価格
								</Typography>
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__BuildingPrice2}
										fullWidth
										sx={{ width: "156px" }}
										onChange={(event) => setData({ ...data, HeaderData1__BuildingPrice2: event.target.value })}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="任意; 半角数字; 0~99999;" error={errors.HeaderData1__BuildingPrice2} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									土地購入価格
								</Typography>
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__LandPrice2}
										fullWidth
										sx={{ width: "156px" }}
										onChange={(event) => setData({ ...data, HeaderData1__LandPrice2: event.target.value })}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="任意; 半角数字; 0~99999;" error={errors.HeaderData1__LandPrice2} />
							</Box>
						</Stack>
					</Group>
				</Box>
			</Container>
			{open && (
				<ResultConfirm
					open={open}
					body={body}
					handleEdit={() => {
						setOpen(false);
					}}
					handleReset={() => {
						localStorage.clear();
						navigate("/");
					}}
					handleTest={() => {
						// handlePost(2);
					}}
				/>
			)}
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate("/case/create/7")} handleNext={() => handlePost(1)} />
		</Root>
	);
}
