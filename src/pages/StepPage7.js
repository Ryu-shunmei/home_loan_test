import * as Yup from "yup";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { Box, Stack, Container, Typography, TextField, Button } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
// hooks
import useLocalStorage from "src/hooks/useLocalStorage";
// components
import Group from "src/components/Group";
import Lable from "src/components/Lable";
import WlcTitle from "src/components/WlcTitle";
import YmdPicker from "src/components/YmdPicker";
import Choose from "src/components/Choose";
import RadioGroup from "src/components/RadioGroup";
import Sections from "src/components/Sections";
import PstlCode from "src/components/PstlCode";
import StepHeader from "src/components/StepHeader";
import StepFooter from "src/components/StepFooter";
// settings
import REGULARS from "src/settings/regulars";
import { gndrEnum, umuEnum, nationalityEnum } from "src/settings/enums";
// ----------------------------------------------------------------------

const Root = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	background: theme.palette.background.gradation,
}));

// ----------------------------------------------------------------------

const initData = {
	HeaderData1__securityProviderUmu: null,
	DetailData1: [],
};

const initDetailData = {
	kanaCstmrName: "",
	kanaCstmrFirstName: "",
	kanjiCstmrLastName: "",
	kanjiCstmrFirstName: "",
	gndrType: "",
	birthDate: "",
	pstlCode: "",
	kanaAddrPrefecture: "",
	kanaAddrCityTownCunty: "",
	kanaAddrDtl: "",
	kanaAddtlAddr: "",
	kanjiAddrPrefecture: "",
	kanjiAddrCityTownCunty: "",
	kanjiAddrDtl: "",
	kanjiAddtlAddr: "",
	homePhoneNum: "",
	cellularPhoneNum: "",
	nationality: "",
};

// ----------------------------------------------------------------------

export default function () {
	const theme = useTheme();
	const navigate = useNavigate();
	const [data, setData] = useLocalStorage("stepData07", initData);

	const errors = {
		HeaderData1__securityProviderUmu: data.HeaderData1__securityProviderUmu === "" ? false : !Yup.number().integer().required().isValidSync(data.HeaderData1__securityProviderUmu),
	};

	const detailErrors = (index) => {
		return {
			kanaCstmrName: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.DetailData1[index].kanaCstmrName),
			kanaCstmrFirstName: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.DetailData1[index].kanaCstmrFirstName),
			kanjiCstmrLastName: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.DetailData1[index].kanjiCstmrLastName),
			kanjiCstmrFirstName: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.DetailData1[index].kanjiCstmrFirstName),
			gndrType: !Yup.number().integer().required().isValidSync(data.DetailData1[index].gndrType),
			birthDate: !Yup.string().required().matches(REGULARS.ymd).isValidSync(data.DetailData1[index].birthDate),

			pstlCode: !Yup.string().required().max(8).matches(REGULARS.post_code).isValidSync(data.DetailData1[index].pstlCode),
			kanaAddtlAddr: !Yup.string().required().max(138).matches(REGULARS.half).isValidSync(data.DetailData1[index].kanaAddtlAddr),
			kanjiAddtlAddr: !Yup.string().required().max(99).matches(REGULARS.em).isValidSync(data.DetailData1[index].kanjiAddtlAddr),

			cellularPhoneNum: data.DetailData1[index].homePhoneNum === "" ? !Yup.string().matches(REGULARS.mobile_phone).isValidSync(data.DetailData1[index].cellularPhoneNum) : false,
			homePhoneNum: data.DetailData1[index].cellularPhoneNum === "" ? !Yup.string().matches(REGULARS.home_phone).isValidSync(data.DetailData1[index].homePhoneNum) : false,

			nationality: data.nationality === "" ? false : !Yup.number().integer().isValidSync(data.DetailData1[index].nationality),
		};
	};
	const handleAdd = () => {
		let temp = JSON.parse(JSON.stringify(data));
		temp.DetailData1.push(initDetailData);
		setData(temp);
	};

	const handleDel = (index) => {
		let temp = JSON.parse(JSON.stringify(data));
		let d_temp = temp.DetailData1.filter((_, item_index) => item_index !== index);
		setData({
			...temp,
			DetailData1: d_temp,
		});
	};

	const hasErorr = useMemo(() => {
		console.log(data);
		let num = 0;
		const temp = Object.values(errors).filter((item) => item === true);
		data.DetailData1.forEach((element, index) => {
			let d_temp = Object.values(detailErrors(index)).filter((item) => item === true);
			num += d_temp.length;
		});
		num += temp.length;

		return num > 0;
	}, [data]);

	return (
		<Root>
			<StepHeader step={7} />
			<Container maxWidth="md">
				<Box sx={{ boxShadow: theme.effectStyle.outer, background: theme.palette.background.gray, paddingTop: "144px", paddingBottom: "120px", border: `1px solid ${theme.palette.primary.lighter}` }}>
					<WlcTitle text="???????????????????????????????????????????????????" />
					<Group title="????????????????????????" error={errors.HeaderData1__securityProviderUmu}>
						<RadioGroup value={data.HeaderData1__securityProviderUmu} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__securityProviderUmu: newValue })} />
						<Lable text="??????" error={errors.HeaderData1__securityProviderUmu} />
						{data.HeaderData1__securityProviderUmu && (
							<Box width="100%" mt="20px">
								<Stack spacing="20px">
									{data.DetailData1.map((item, index) => (
										<Sections key={index} title={`????????????????????? ${index + 1}`} handleDelete={() => handleDel(index)}>
											<Group
												title="??????"
												error={detailErrors(index).kanaCstmrName | detailErrors(index).kanaCstmrFirstName | detailErrors(index).kanjiCstmrLastName | detailErrors(index).kanjiCstmrFirstName}
											>
												<Stack spacing="20px">
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															????????????
														</Typography>
														<TextField
															type="text"
															value={item.kanjiCstmrLastName}
															fullWidth
															onChange={(event) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].kanjiCstmrLastName = event.target.value;
																setData({ ...data, DetailData1: temp });
															}}
														/>
														<Lable text="??????; ????????????; ?????????48;" error={detailErrors(index).kanjiCstmrLastName} />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															????????????
														</Typography>
														<TextField
															type="text"
															value={item.kanjiCstmrFirstName}
															fullWidth
															onChange={(event) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].kanjiCstmrFirstName = event.target.value;
																setData({ ...data, DetailData1: temp });
															}}
														/>
														<Lable text="??????; ????????????; ?????????48;" error={detailErrors(index).kanjiCstmrFirstName} />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															????????????
														</Typography>
														<TextField
															type="text"
															value={item.kanaCstmrName}
															fullWidth
															onChange={(event) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].kanaCstmrName = event.target.value;
																setData({ ...data, DetailData1: temp });
															}}
														/>
														<Lable text="??????; ????????????; ?????????48;" error={detailErrors(index).kanaCstmrName} />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															????????????
														</Typography>
														<TextField
															type="text"
															value={item.kanaCstmrFirstName}
															fullWidth
															onChange={(event) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].kanaCstmrFirstName = event.target.value;
																setData({ ...data, DetailData1: temp });
															}}
														/>
														<Lable text="??????; ????????????; ?????????48;" error={detailErrors(index).kanaCstmrFirstName} />
													</Box>
												</Stack>
											</Group>
											<Group title="??????" error={detailErrors(index).gndrType}>
												<Choose
													value={item.gndrType}
													config={gndrEnum}
													onClick={(newValue) => {
														const temp = JSON.parse(JSON.stringify(data.DetailData1));
														temp[index].gndrType = newValue;
														setData({ ...data, DetailData1: temp });
													}}
												/>
												<Lable text="??????" error={detailErrors(index).gndrType} />
											</Group>
											<Group title="????????????" error={detailErrors(index).birthDate}>
												<YmdPicker
													value={item.birthDate}
													onChange={(newValue) => {
														const temp = JSON.parse(JSON.stringify(data.DetailData1));
														temp[index].birthDate = newValue;
														setData({ ...data, DetailData1: temp });
													}}
												/>
												<Lable text="??????; ??????????????????; yyyy/mm/dd;" error={detailErrors(index).birthDate} />
											</Group>
											<Group title="??????" error={detailErrors(index).nationality}>
												<Choose
													value={item.nationality}
													config={nationalityEnum}
													onClick={(newValue) => {
														const temp = JSON.parse(JSON.stringify(data.DetailData1));
														temp[index].nationality = newValue;
														setData({ ...data, DetailData1: temp });
													}}
												/>
												<Lable text="??????" error={detailErrors(index).nationality} />
											</Group>
											<Group title="?????????" error={detailErrors(index).pstlCode | detailErrors(index).kanaAddrPrefecture | detailErrors(index).kanjiAddtlAddr}>
												<Stack spacing="20px">
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															????????????
														</Typography>
														<PstlCode
															value={item.pstlCode}
															fullWidth
															onChange={(newValue) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].pstlCode = newValue;
																setData({ ...data, DetailData1: temp });
															}}
															setResults={(results) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].kanaAddrPrefecture = results.kana1;
																temp[index].kanaAddrCityTownCunty = results.kana2;
																temp[index].kanaAddrDtl = results.kana3;
																temp[index].kanjiAddrPrefecture = results.address1;
																temp[index].kanjiAddrCityTownCunty = results.address2;
																temp[index].kanjiAddrDtl = results.address3;
																setData({ ...data, DetailData1: temp });
															}}
														/>
														<Lable text="??????; ??????????????????; ?????????8; 999-9999;" error={detailErrors(index).pstlCode} />
													</Box>

													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															?????????????????????
														</Typography>
														<TextField fullWidth value={item.kanjiAddrPrefecture} sx={{ width: "148px" }} />
														<Lable text="???????????????????????????????????????????????????????????????????????????" />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															??????????????????
														</Typography>
														<TextField fullWidth value={item.kanjiAddrCityTownCunty} />
														<Lable text="???????????????????????????????????????????????????????????????????????????" />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															????????????????????????
														</Typography>
														<TextField fullWidth value={item.kanjiAddrDtl} />
														<Lable text="???????????????????????????????????????????????????????????????????????????" />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															?????????????????????
														</Typography>
														<TextField
															fullWidth
															value={item.kanjiAddtlAddr}
															onChange={(event) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].kanjiAddtlAddr = event.target.value;
																setData({ ...data, DetailData1: temp });
															}}
														/>
														<Lable text="??????; ????????????; ?????????99;" error={detailErrors(index).kanjiAddtlAddr} />
													</Box>

													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															?????????????????????
														</Typography>
														<TextField fullWidth value={item.kanaAddrPrefecture} sx={{ width: "148px" }} />
														<Lable text="???????????????????????????????????????????????????????????????????????????" />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															??????????????????
														</Typography>
														<TextField fullWidth value={item.kanaAddrCityTownCunty} />
														<Lable text="???????????????????????????????????????????????????????????????????????????" />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															????????????????????????
														</Typography>
														<TextField fullWidth value={item.kanaAddrDtl} />
														<Lable text="???????????????????????????????????????????????????????????????????????????" />
													</Box>

													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															?????????????????????
														</Typography>
														<TextField
															fullWidth
															value={item.kanaAddtlAddr}
															onChange={(event) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].kanaAddtlAddr = event.target.value;
																setData({ ...data, DetailData1: temp });
															}}
														/>
														<Lable text="??????; ????????????; ?????????138;" error={detailErrors(index).kanaAddtlAddr} />
													</Box>
												</Stack>
											</Group>
											<Group title="????????????" error={detailErrors(index).cellularPhoneNum | detailErrors(index).homePhoneNum}>
												<Stack spacing="20px">
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															???????????????090-9999-9999???
														</Typography>
														<TextField
															value={item.cellularPhoneNum}
															fullWidth
															onChange={(event) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].cellularPhoneNum = event.target.value;
																setData({ ...data, DetailData1: temp });
															}}
															sx={{ width: "228px" }}
														/>
														<Lable text="??????????????????/?????????????????? ??????????????????; ??????????????????; ?????????13;" error={detailErrors(index).cellularPhoneNum} />
													</Box>
													<Box width="100%">
														<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
															???????????????03-9999-9999???
														</Typography>
														<TextField
															value={item.homePhoneNum}
															fullWidth
															onChange={(event) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData1));
																temp[index].homePhoneNum = event.target.value;
																setData({ ...data, DetailData1: temp });
															}}
															sx={{ width: "228px" }}
														/>
														<Lable text="??????????????????/?????????????????? ??????????????????; ??????????????????; ?????????12;" error={detailErrors(index).homePhoneNum} />
													</Box>
												</Stack>
											</Group>
										</Sections>
									))}
								</Stack>
								<Button variant="contained" fullWidth size="small" color="primary" sx={{ my: "20px" }} onClick={() => handleAdd()}>
									????????????????????? ???
								</Button>
							</Box>
						)}
					</Group>
				</Box>
			</Container>
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate("/case/create/6")} handleNext={() => navigate("/case/create/8")} />
		</Root>
	);
}
