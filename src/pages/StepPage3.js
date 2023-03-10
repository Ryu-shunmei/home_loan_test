import * as Yup from "yup";
import { useEffect, useMemo, useState } from "react";
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
import RadioGroup from "src/components/RadioGroup";
import Select from "src/components/Select";
import PstlCode from "src/components/PstlCode";
import YmPicker from "src/components/YmPicker";
import StepHeader from "src/components/StepHeader";
import StepFooter from "src/components/StepFooter";
// settings
import REGULARS from "src/settings/regulars";
import { umuEnum, maternityMaternityEnum, occupationEnum, indsBusinessEnum, indsTypeMajorClEnum, emplmtFormEnum, postEnum, listedEnum, incomeSrceEnum } from "src/settings/enums";
// ----------------------------------------------------------------------

const Root = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	background: theme.palette.background.gradation,
}));

// ----------------------------------------------------------------------

const initData = {
	HeaderData1__occupation1: "",
	HeaderData1__indsTypeMajorClCode1: "",
	HeaderData1__emplmtFormCode1: "",
	HeaderData1__indsBusinessContentsName1: "",
	HeaderData1__kanaOfficeName1: "",
	HeaderData1__kanjiOfficeName1: "",

	HeaderData1__officePstcd1: "",

	HeaderData1__officeKanaAddrPrefecture1: "",
	HeaderData1__officeKanaAddrCityTownCunty1: "",
	HeaderData1__officeKanaAddrDtl1: "",

	HeaderData1__addtlKanaOfficeAddr1: "",

	HeaderData1__kanjiOfficeAddrPrefecture1: "",
	HeaderData1__kanjiOfficeAddrCityTownCunty1: "",
	HeaderData1__kanjiOfficeAddrDtl1: "",

	HeaderData1__addtlKanjiOfficeAddrCode1: "",

	HeaderData1__officePhoneNum1: "",
	HeaderData1__headOfficeAddr1: "",
	HeaderData1__numOfEmpl1: "",
	HeaderData1__belongingDepartment1: "",
	HeaderData1__postCode1: "",
	HeaderData1__yearsOfJoiningCompany1: "",
	HeaderData1__listedDivision1: "",
	HeaderData1__officeEstablishmentDate1: "",
	HeaderData1__officeCapital1: "",

	HeaderData1__annualIncome1: "",
	HeaderData1__incomeSrceCode1: "",
	HeaderData1__finalIncomeTaxReturn1: null,
	HeaderData1__maternityMaternityLeave1: null,

	HeaderData1__loanUmu1: null,
	HeaderData1__loanOfficeName1: "",
	HeaderData1__preOfficeName1: "",
	HeaderData1__preOfficeLength1: "",
};

// ----------------------------------------------------------------------

export default function () {
	const theme = useTheme();
	const navigate = useNavigate();
	const [data, setData] = useLocalStorage("stepData03", initData);

	const [step1, _] = useLocalStorage("stepData01", {
		HeaderData1__IncomeAdditionType1: null,
		HeaderData1__pairLoanPresence: null,
	});
	const [link, setLink] = useState("");
	useEffect(() => {
		console.log(step1.HeaderData1__IncomeAdditionType1);
		console.log(step1.HeaderData1__pairLoanPresence);
		if (step1.HeaderData1__IncomeAdditionType1 === 1 || step1.HeaderData1__pairLoanPresence === 1) {
			setLink("/case/create/4");
		} else {
			setLink("/case/create/6");
		}
	}, [step1]);

	const errors = {
		HeaderData1__occupation1: !Yup.string().required().length(2).isValidSync(data.HeaderData1__occupation1),
		HeaderData1__indsTypeMajorClCode1: data.HeaderData1__indsTypeMajorClCode1 === "" ? false : !Yup.string().length(1).isValidSync(data.HeaderData1__indsTypeMajorClCode1),
		HeaderData1__indsBusinessContentsName1: data.HeaderData1__indsBusinessContentsName1 === "" ? false : !Yup.string().length(2).isValidSync(data.HeaderData1__indsBusinessContentsName1),
		HeaderData1__emplmtFormCode1: !Yup.string().required().length(2).isValidSync(data.HeaderData1__emplmtFormCode1),

		HeaderData1__kanaOfficeName1: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaOfficeName1),
		HeaderData1__kanjiOfficeName1: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__kanjiOfficeName1),

		HeaderData1__officePstcd1: !Yup.string().required().max(8).matches(REGULARS.post_code).isValidSync(data.HeaderData1__officePstcd1),
		HeaderData1__addtlKanaOfficeAddr1:
			data.HeaderData1__addtlKanaOfficeAddr1 === "" ? false : !Yup.string().required().max(138).matches(REGULARS.half).isValidSync(data.HeaderData1__addtlKanaOfficeAddr1),
		HeaderData1__addtlKanjiOfficeAddrCode1:
			data.HeaderData1__addtlKanjiOfficeAddrCode1 === "" ? false : !Yup.string().required().max(99).matches(REGULARS.em).isValidSync(data.HeaderData1__addtlKanjiOfficeAddrCode1),

		HeaderData1__officePhoneNum1: !Yup.string().required().matches(REGULARS.home_phone).isValidSync(data.HeaderData1__officePhoneNum1),
		HeaderData1__headOfficeAddr1: !Yup.string().required().matches(REGULARS.em).isValidSync(data.HeaderData1__headOfficeAddr1),
		HeaderData1__numOfEmpl1: !Yup.number().integer().min(0).max(9999999).isValidSync(data.HeaderData1__numOfEmpl1),

		HeaderData1__belongingDepartment1: data.HeaderData1__belongingDepartment1 === "" ? false : !Yup.string().max(46).matches(REGULARS.em).isValidSync(data.HeaderData1__belongingDepartment1),
		HeaderData1__postCode1: data.HeaderData1__postCode1 === "" ? false : !Yup.string().required().length(2).isValidSync(data.HeaderData1__postCode1),
		HeaderData1__yearsOfJoiningCompany1: data.HeaderData1__yearsOfJoiningCompany1 === "" ? false : !Yup.string().matches(REGULARS.ym).isValidSync(data.HeaderData1__yearsOfJoiningCompany1),
		HeaderData1__listedDivision1: data.HeaderData1__listedDivision1 === "" ? false : !Yup.number().integer().required().isValidSync(data.HeaderData1__listedDivision1),

		HeaderData1__officeEstablishmentDate1: data.HeaderData1__officeEstablishmentDate1 === "" ? false : !Yup.string().matches(REGULARS.ymd).isValidSync(data.HeaderData1__officeEstablishmentDate1),
		HeaderData1__officeCapital1: data.HeaderData1__officeCapital1 === "" ? false : !Yup.number().integer().min(0).max(99999999999999).isValidSync(data.HeaderData1__officeCapital1),

		HeaderData1__annualIncome1: !Yup.number().integer().required().max(99999).isValidSync(data.HeaderData1__annualIncome1),
		HeaderData1__incomeSrceCode1: data.HeaderData1__incomeSrceCode1 === "" ? false : !Yup.string().length(2).isValidSync(data.HeaderData1__incomeSrceCode1),
		HeaderData1__finalIncomeTaxReturn1: data.HeaderData1__finalIncomeTaxReturn1 === "" ? false : !Yup.number().integer().isValidSync(data.HeaderData1__finalIncomeTaxReturn1),
		HeaderData1__maternityMaternityLeave1: Boolean(data.HeaderData1__maternityMaternityLeave1) ? !Yup.number().integer().required().isValidSync(data.HeaderData1__maternityMaternityLeave1) : false,

		HeaderData1__loanUmu1: Boolean(data.HeaderData1__loanUmu1) ? !Yup.number().integer().required().isValidSync(data.HeaderData1__loanUmu1) : false,
		HeaderData1__loanOfficeName1: data.HeaderData1__loanOfficeName1 === "" ? false : !Yup.string().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__loanOfficeName1),
		HeaderData1__preOfficeName1: data.HeaderData1__preOfficeName1 === "" ? false : !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.HeaderData1__preOfficeName1),
		HeaderData1__preOfficeLength1: data.HeaderData1__preOfficeLength1 === "" ? false : !Yup.number().integer().min(0).max(99).isValidSync(data.HeaderData1__preOfficeLength1),
	};

	const hasErorr = useMemo(() => {
		const temp = Object.values(errors).filter((item) => item === true);
		return temp.length > 0;
	}, [data]);

	return (
		<Root>
			<StepHeader step={3} />
			<Container maxWidth="md">
				<Box sx={{ boxShadow: theme.effectStyle.outer, background: theme.palette.background.gray, paddingTop: "144px", paddingBottom: "120px", border: `1px solid ${theme.palette.primary.lighter}` }}>
					<WlcTitle text="?????????????????????????????????????????????????????????" />
					<Group title="??????" error={errors.HeaderData1__occupation1}>
						<Select value={data.HeaderData1__occupation1} config={occupationEnum} onChange={(newValue) => setData({ ...data, HeaderData1__occupation1: newValue })} textAlign="start" />
						<Lable text="??????" error={errors.HeaderData1__occupation1} />
					</Group>
					<Group title="??????" error={errors.HeaderData1__indsTypeMajorClCode1}>
						<Select
							value={data.HeaderData1__indsTypeMajorClCode1}
							config={indsTypeMajorClEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__indsTypeMajorClCode1: newValue })}
							textAlign="start"
						/>
						<Lable text="??????" error={errors.HeaderData1__indsTypeMajorClCode1} />
					</Group>
					<Group title="??????" error={errors.HeaderData1__indsBusinessContentsName1}>
						<Select
							value={data.HeaderData1__indsBusinessContentsName1}
							config={indsBusinessEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__indsBusinessContentsName1: newValue })}
							textAlign="start"
						/>
						<Lable text="??????" error={errors.HeaderData1__indsBusinessContentsName1} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__emplmtFormCode1}>
						<Select value={data.HeaderData1__emplmtFormCode1} config={emplmtFormEnum} onChange={(newValue) => setData({ ...data, HeaderData1__emplmtFormCode1: newValue })} textAlign="start" />
						<Lable text="??????" error={errors.HeaderData1__emplmtFormCode1} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__kanaOfficeName1 | errors.HeaderData1__kanjiOfficeName1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanjiOfficeName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanjiOfficeName1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__kanjiOfficeName1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanaOfficeName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanaOfficeName1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__kanaOfficeName1} />
							</Box>
						</Stack>
					</Group>
					<Group title="?????????" error={errors.HeaderData1__officePstcd1 | errors.HeaderData1__addtlKanaOfficeAddr1 | errors.HeaderData1__addtlKanjiOfficeAddrCode1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<PstlCode
									value={data.HeaderData1__officePstcd1}
									fullWidth
									onChange={(newValue) => setData({ ...data, HeaderData1__officePstcd1: newValue })}
									setResults={(results) => {
										setData({
											...data,
											HeaderData1__officeKanaAddrPrefecture1: results.kana1,
											HeaderData1__officeKanaAddrCityTownCunty1: results.kana2,
											HeaderData1__officeKanaAddrDtl1: results.kana3,

											HeaderData1__kanjiOfficeAddrPrefecture1: results.address1,
											HeaderData1__kanjiOfficeAddrCityTownCunty1: results.address2,
											HeaderData1__kanjiOfficeAddrDtl1: results.address3,
										});
									}}
								/>
								<Lable text="??????; ??????????????????; ?????????8; 999-9999;" error={errors.HeaderData1__officePstcd1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrPrefecture1} sx={{ width: "148px" }} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									??????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrCityTownCunty1} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrDtl1} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__addtlKanjiOfficeAddrCode1} onChange={(event) => setData({ ...data, HeaderData1__addtlKanjiOfficeAddrCode1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????40;" error={errors.HeaderData1__addtlKanjiOfficeAddrCode1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrPrefecture1} sx={{ width: "148px" }} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									??????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrCityTownCunty1} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrDtl1} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__addtlKanaOfficeAddr1} onChange={(event) => setData({ ...data, HeaderData1__addtlKanaOfficeAddr1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????40;" error={errors.HeaderData1__addtlKanaOfficeAddr1} />
							</Box>
						</Stack>
					</Group>
					<Group title="????????????" error={errors.HeaderData1__officePhoneNum1}>
						<TextField value={data.HeaderData1__officePhoneNum1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__officePhoneNum1: event.target.value })} sx={{ width: "228px" }} />
						<Lable text="??????; ??????????????????; 03-9999-9999;" error={errors.HeaderData1__officePhoneNum1} />
					</Group>
					<Group title="???????????????" error={errors.HeaderData1__headOfficeAddr1}>
						<TextField value={data.HeaderData1__headOfficeAddr1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__headOfficeAddr1: event.target.value })} sx={{ width: "228px" }} />
						<Lable text="??????; ????????????; ?????????20;" error={errors.HeaderData1__headOfficeAddr1} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__numOfEmpl1}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<TextField
								type="number"
								placeholder="0"
								value={data.HeaderData1__numOfEmpl1}
								fullWidth
								onChange={(event) => setData({ ...data, HeaderData1__numOfEmpl1: event.target.value })}
								sx={{ width: "110px" }}
							/>
							<Typography variant="rg16">???</Typography>
						</Stack>
						<Lable text="??????; ????????????; ?????????7;" error={errors.HeaderData1__numOfEmpl1} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__belongingDepartment1}>
						<TextField
							value={data.HeaderData1__belongingDepartment1}
							fullWidth
							onChange={(event) => setData({ ...data, HeaderData1__belongingDepartment1: event.target.value })}
							sx={{ width: "228px" }}
						/>
						<Lable text="??????; ????????????; ?????????46;" error={errors.HeaderData1__belongingDepartment1} />
					</Group>
					<Group title="??????" error={errors.HeaderData1__postCode1}>
						<Select value={data.HeaderData1__postCode1} config={postEnum} onChange={(newValue) => setData({ ...data, HeaderData1__postCode1: newValue })} textAlign="start" />
						<Lable text="??????" error={errors.HeaderData1__postCode1} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__yearsOfJoiningCompany1}>
						<YmPicker value={data.HeaderData1__yearsOfJoiningCompany1} onChange={(newValue) => setData({ ...data, HeaderData1__yearsOfJoiningCompany1: newValue })} />
						<Lable text="??????; ??????????????????; yyyy/mm;" error={errors.HeaderData1__yearsOfJoiningCompany1} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__listedDivision1}>
						<Select value={data.HeaderData1__listedDivision1} config={listedEnum} onChange={(newValue) => setData({ ...data, HeaderData1__listedDivision1: newValue })} textAlign="start" />
						<Lable text="??????" error={errors.HeaderData1__listedDivision1} />
					</Group>
					<Group title="???????????????" error={errors.HeaderData1__officeEstablishmentDate1}>
						<YmdPicker value={data.HeaderData1__officeEstablishmentDate1} onChange={(newValue) => setData({ ...data, HeaderData1__officeEstablishmentDate1: newValue })} />
						<Lable text="??????; ??????????????????; yyyy/mm/dd;" error={errors.HeaderData1__officeEstablishmentDate1} />
					</Group>
					<Group title="?????????" error={errors.HeaderData1__officeCapital1}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<TextField
								type="number"
								placeholder="0"
								value={data.HeaderData1__officeCapital1}
								fullWidth
								onChange={(event) => setData({ ...data, HeaderData1__officeCapital1: event.target.value })}
								sx={{ width: "228px" }}
							/>
							<Typography variant="rg16">???</Typography>
						</Stack>
						<Lable text="??????; ????????????; ?????????14;" error={errors.HeaderData1__officeCapital1} />
					</Group>

					<Group title="????????????" error={errors.HeaderData1__annualIncome1}>
						<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.lighter}` }}>
							<Group title="??????" error={errors.HeaderData1__annualIncome1} borderRadius="2.5px 2.5px 0px 0px">
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__annualIncome1}
										fullWidth
										onChange={(event) => setData({ ...data, HeaderData1__annualIncome1: event.target.value })}
										sx={{ width: "228px" }}
									/>
									<Typography variant="rg16">??????</Typography>
								</Stack>
								<Lable text="??????; ????????????; 0~99999;" error={errors.HeaderData1__annualIncome1} />
							</Group>

							<Group title="?????????" error={errors.HeaderData1__incomeSrceCode1}>
								<RadioGroup value={data.HeaderData1__incomeSrceCode1} config={incomeSrceEnum} onChange={(newValue) => setData({ ...data, HeaderData1__incomeSrceCode1: newValue })} />
								<Lable text="??????" error={errors.HeaderData1__incomeSrceCode1} />
							</Group>

							<Group title="??????????????????" error={errors.HeaderData1__finalIncomeTaxReturn1}>
								<RadioGroup value={data.HeaderData1__finalIncomeTaxReturn1} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__finalIncomeTaxReturn1: newValue })} />
								<Lable text="??????" error={errors.HeaderData1__finalIncomeTaxReturn1} />
							</Group>
						</Box>
					</Group>

					<Group title="???????????????" error={errors.HeaderData1__maternityMaternityLeave1}>
						<RadioGroup
							value={data.HeaderData1__maternityMaternityLeave1}
							config={maternityMaternityEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__maternityMaternityLeave1: newValue })}
						/>
						<Lable text="??????" error={errors.HeaderData1__maternityMaternityLeave1} />
					</Group>

					<Group title="????????????" error={errors.HeaderData1__loanUmu1}>
						<RadioGroup value={data.HeaderData1__loanUmu1} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__loanUmu1: newValue })} />
						<Lable text="??????" error={errors.HeaderData1__loanUmu1} />
						<Typography variant="b14" color={theme.palette.primary.main} ml="2px" mb="5px">
							??????????????????????????????????????????????????????????????????????????????
						</Typography>
						{data.HeaderData1__loanUmu1 === 1 && (
							<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.light}` }}>
								<Group title="??????????????????" error={errors.HeaderData1__loanOfficeName1} borderRadius="2.5px 2.5px 0px 0px">
									<TextField value={data.HeaderData1__loanOfficeName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__loanOfficeName1: event.target.value })} sx={{ width: "228px" }} />
									<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__loanOfficeName1} />
								</Group>
							</Box>
						)}
					</Group>

					<Group title="????????????" error={errors.HeaderData1__preOfficeName1 | errors.HeaderData1__preOfficeLength1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__preOfficeName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__preOfficeName1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__preOfficeName1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__preOfficeLength1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__preOfficeLength1: event.target.value })} />
								<Lable text="??????; ????????????; ?????????2;" error={errors.HeaderData1__preOfficeLength1} />
							</Box>
						</Stack>
					</Group>
				</Box>
			</Container>
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate("/case/create/2")} handleNext={() => navigate(link)} />
		</Root>
	);
}
