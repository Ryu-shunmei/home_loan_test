import * as Yup from "yup";
import { useMemo } from "react";
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
import YmdPicker from "src/components/YmdPicker";
import Choose from "src/components/Choose";
import PstlCode from "src/components/PstlCode";
import StepHeader from "src/components/StepHeader";
import StepFooter from "src/components/StepFooter";
// settings
import REGULARS from "src/settings/regulars";
import { gndrEnum, nationalityEnum } from "src/settings/enums";
// ----------------------------------------------------------------------

const Root = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	background: theme.palette.background.gradation,
}));

// ----------------------------------------------------------------------

const initData = {
	HeaderData1__kanaCstmrName1: "",
	HeaderData1__kanaCstmrFirstName1: "",
	HeaderData1__kanjiCstmrLastName1: "",
	HeaderData1__kanjiCstmrFirstName1: "",
	HeaderData1__gndrType1: "",
	HeaderData1__birthDate1: "",
	HeaderData1__pstlCode1: "",
	HeaderData1__kanaAddrPrefecture1: "",
	HeaderData1__kanaAddrCityTownCunty1: "",
	HeaderData1__kanaAddrDtl1: "",
	HeaderData1__kanaAddtlAddr1: "",
	HeaderData1__kanjiAddrPrefecture1: "",
	HeaderData1__kanjiAddrCityTownCunty1: "",
	HeaderData1__kanjiAddrDtl1: "",
	HeaderData1__kanjiAddtlAddr1: "",
	HeaderData1__homePhoneNum1: "",
	HeaderData1__cellularPhoneNum1: "",
	HeaderData1__mailAddress1: "",
	HeaderData1__urgentContactNum1: "",
	HeaderData1__nationality1: "",
};

// ----------------------------------------------------------------------

export default function () {
	const theme = useTheme();
	const navigate = useNavigate();
	const [data, setData] = useLocalStorage("stepData02", initData);

	const errors = {
		HeaderData1__kanaCstmrName1: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaCstmrName1),
		HeaderData1__kanaCstmrFirstName1: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaCstmrFirstName1),
		HeaderData1__kanjiCstmrLastName1: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__kanjiCstmrLastName1),
		HeaderData1__kanjiCstmrFirstName1: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__kanjiCstmrFirstName1),
		HeaderData1__gndrType1: !Yup.number().integer().required().isValidSync(data.HeaderData1__gndrType1),
		HeaderData1__birthDate1: !Yup.string().required().matches(REGULARS.ymd).isValidSync(data.HeaderData1__birthDate1),

		HeaderData1__pstlCode1: !Yup.string().required().max(8).matches(REGULARS.post_code).isValidSync(data.HeaderData1__pstlCode1),
		HeaderData1__kanaAddtlAddr1: !Yup.string().required().max(138).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaAddtlAddr1),
		HeaderData1__kanjiAddtlAddr1: !Yup.string().required().max(99).matches(REGULARS.em).isValidSync(data.HeaderData1__kanjiAddtlAddr1),

		HeaderData1__cellularPhoneNum1: data.HeaderData1__homePhoneNum1 === "" ? !Yup.string().matches(REGULARS.mobile_phone).isValidSync(data.HeaderData1__cellularPhoneNum1) : false,
		HeaderData1__homePhoneNum1: data.HeaderData1__cellularPhoneNum1 === "" ? !Yup.string().matches(REGULARS.home_phone).isValidSync(data.HeaderData1__homePhoneNum1) : false,

		HeaderData1__urgentContactNum1:
			data.HeaderData1__urgentContactNum1 === ""
				? false
				: !Yup.string().matches(REGULARS.mobile_phone).isValidSync(data.HeaderData1__urgentContactNum1) | !Yup.string().matches(REGULARS.home_phone).isValidSync(data.HeaderData1__urgentContactNum1),

		HeaderData1__mailAddress1: !Yup.string().required().max(128).email().isValidSync(data.HeaderData1__mailAddress1),
		HeaderData1__nationality1: data.HeaderData1__nationality1 === "" ? false : !Yup.number().integer().isValidSync(data.HeaderData1__nationality1),
	};

	const hasErorr = useMemo(() => {
		const temp = Object.values(errors).filter((item) => item === true);
		console.log(temp);
		console.log(errors);
		return temp.length > 0;
	}, [data]);

	return (
		<Root>
			<StepHeader step={2} />
			<Container maxWidth="md">
				<Box sx={{ boxShadow: theme.effectStyle.outer, background: theme.palette.background.gray, paddingTop: "144px", paddingBottom: "120px", border: `1px solid ${theme.palette.primary.lighter}` }}>
					<WlcTitle text="?????????????????????????????????????????????" />
					<Group title="??????" error={errors.HeaderData1__kanaCstmrName1 | errors.HeaderData1__kanaCstmrFirstName1 | errors.HeaderData1__kanjiCstmrLastName1 | errors.HeaderData1__kanjiCstmrFirstName1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanjiCstmrLastName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanjiCstmrLastName1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__kanjiCstmrLastName1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanjiCstmrFirstName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanjiCstmrFirstName1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__kanjiCstmrFirstName1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanaCstmrName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanaCstmrName1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__kanaCstmrName1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanaCstmrFirstName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanaCstmrFirstName1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__kanaCstmrFirstName1} />
							</Box>
						</Stack>
					</Group>
					<Group title="??????" error={errors.HeaderData1__gndrType1}>
						<Choose value={data.HeaderData1__gndrType1} config={gndrEnum} onClick={(newValue) => setData({ ...data, HeaderData1__gndrType1: newValue })} />
						<Lable text="??????" error={errors.HeaderData1__gndrType1} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__birthDate1}>
						<YmdPicker value={data.HeaderData1__birthDate1} onChange={(newValue) => setData({ ...data, HeaderData1__birthDate1: newValue })} />
						<Lable text="??????; ??????????????????; yyyy/mm/dd;" error={errors.HeaderData1__birthDate1} />
					</Group>
					<Group title="??????" error={errors.HeaderData1__nationality1}>
						<Choose value={data.HeaderData1__nationality1} config={nationalityEnum} onClick={(newValue) => setData({ ...data, HeaderData1__nationality1: newValue })} />
						<Lable text="??????" error={errors.HeaderData1__nationality1} />
					</Group>
					<Group title="?????????" error={errors.HeaderData1__pstlCode1 | errors.HeaderData1__kanaAddrPrefecture1 | errors.HeaderData1__kanjiAddtlAddr1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<PstlCode
									value={data.HeaderData1__pstlCode1}
									fullWidth
									onChange={(newValue) => setData({ ...data, HeaderData1__pstlCode1: newValue })}
									setResults={(results) => {
										setData({
											...data,
											HeaderData1__kanaAddrPrefecture1: results.kana1,
											HeaderData1__kanaAddrCityTownCunty1: results.kana2,
											HeaderData1__kanaAddrDtl1: results.kana3,
											HeaderData1__kanjiAddrPrefecture1: results.address1,
											HeaderData1__kanjiAddrCityTownCunty1: results.address2,
											HeaderData1__kanjiAddrDtl1: results.address3,
										});
									}}
								/>
								<Lable text="??????; ??????????????????; ?????????8; 999-9999;" error={errors.HeaderData1__pstlCode1} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiAddrPrefecture1} sx={{ width: "148px" }} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									??????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiAddrCityTownCunty1} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiAddrDtl1} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiAddtlAddr1} onChange={(event) => setData({ ...data, HeaderData1__kanjiAddtlAddr1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????99;" error={errors.HeaderData1__kanjiAddtlAddr1} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanaAddrPrefecture1} sx={{ width: "148px" }} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									??????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanaAddrCityTownCunty1} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanaAddrDtl1} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanaAddtlAddr1} onChange={(event) => setData({ ...data, HeaderData1__kanaAddtlAddr1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????138;" error={errors.HeaderData1__kanaAddtlAddr1} />
							</Box>
						</Stack>
					</Group>
					<Group title="????????????" error={errors.HeaderData1__cellularPhoneNum1 | errors.HeaderData1__homePhoneNum1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<TextField
									value={data.HeaderData1__cellularPhoneNum1}
									fullWidth
									onChange={(event) => setData({ ...data, HeaderData1__cellularPhoneNum1: event.target.value })}
									sx={{ width: "228px" }}
								/>
								<Lable text="??????????????????/?????????????????? ??????????????????; ??????????????????; 090-9999-9999;" error={errors.HeaderData1__cellularPhoneNum1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<TextField value={data.HeaderData1__homePhoneNum1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__homePhoneNum1: event.target.value })} sx={{ width: "228px" }} />
								<Lable text="??????????????????/?????????????????? ??????????????????; ??????????????????; 03-9999-9999;" error={errors.HeaderData1__homePhoneNum1} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									???????????????
								</Typography>
								<TextField
									value={data.HeaderData1__urgentContactNum1}
									fullWidth
									onChange={(event) => setData({ ...data, HeaderData1__urgentContactNum1: event.target.value })}
									sx={{ width: "228px" }}
								/>
								<Lable text="??????; ??????????????????; ?????????12 / 13;" error={errors.HeaderData1__urgentContactNum1} />
								<Lable text="090-9999-9999 / 03-9999-9999;" error={errors.HeaderData1__urgentContactNum1} />
							</Box>
						</Stack>
					</Group>
					<Group title="?????????????????????" error={errors.HeaderData1__mailAddress1}>
						<TextField type="text" value={data.HeaderData1__mailAddress1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__mailAddress1: event.target.value })} />
						<Lable text="??????; ??????????????????; ?????????128;" error={errors.HeaderData1__mailAddress1} />
					</Group>
				</Box>
			</Container>
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate("/case/create/1")} handleNext={() => navigate("/case/create/3")} />
		</Root>
	);
}
