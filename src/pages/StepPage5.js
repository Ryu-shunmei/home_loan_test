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
	HeaderData1__occupation2: "",
	HeaderData1__indsTypeMajorClCode2: "",
	HeaderData1__emplmtFormCode2: "",
	HeaderData1__indsBusinessContentsName2: "",
	HeaderData1__kanaOfficeName2: "",
	HeaderData1__kanjiOfficeName2: "",

	HeaderData1__officePstcd2: "",

	HeaderData1__officeKanaAddrPrefecture2: "",
	HeaderData1__officeKanaAddrCityTownCunty2: "",
	HeaderData1__officeKanaAddrDtl2: "",

	HeaderData1__addtlKanaOfficeAddr2: "",

	HeaderData1__kanjiOfficeAddrPrefecture2: "",
	HeaderData1__kanjiOfficeAddrCityTownCunty2: "",
	HeaderData1__kanjiOfficeAddrDtl2: "",

	HeaderData1__addtlKanjiOfficeAddrCode2: "",

	HeaderData1__officePhoneNum2: "",
	HeaderData1__headOfficeAddr2: "",
	HeaderData1__numOfEmpl2: "",
	HeaderData1__belongingDepartment2: "",
	HeaderData1__postCode2: "",
	HeaderData1__yearsOfJoiningCompany2: "",
	HeaderData1__listedDivision2: "",
	HeaderData1__officeEstablishmentDate2: "",
	HeaderData1__officeCapital2: "",

	HeaderData1__annualIncome2: "",
	HeaderData1__incomeSrceCode2: "",
	HeaderData1__finalIncomeTaxReturn2: null,
	HeaderData1__maternityMaternityLeave2: null,

	HeaderData1__loanUmu2: null,
	HeaderData1__loanOfficeName2: "",
	HeaderData1__preOfficeName2: "",
	HeaderData1__preOfficeLength2: "",
};

// ----------------------------------------------------------------------

export default function () {
	const theme = useTheme();
	const navigate = useNavigate();
	const [data, setData] = useLocalStorage("stepData05", initData);

	const errors = {
		HeaderData1__occupation2: !Yup.string().required().length(2).isValidSync(data.HeaderData1__occupation2),
		HeaderData1__indsTypeMajorClCode2: data.HeaderData1__indsTypeMajorClCode2 === "" ? false : !Yup.string().length(1).isValidSync(data.HeaderData1__indsTypeMajorClCode2),
		HeaderData1__indsBusinessContentsName2: data.HeaderData1__indsBusinessContentsName2 === "" ? false : !Yup.string().length(2).isValidSync(data.HeaderData1__indsBusinessContentsName2),
		HeaderData1__emplmtFormCode2: !Yup.string().required().length(2).isValidSync(data.HeaderData1__emplmtFormCode2),

		HeaderData1__kanaOfficeName2: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaOfficeName2),
		HeaderData1__kanjiOfficeName2: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__kanjiOfficeName2),

		HeaderData1__officePstcd2: !Yup.string().required().max(8).matches(REGULARS.post_code).isValidSync(data.HeaderData1__officePstcd2),
		HeaderData1__addtlKanaOfficeAddr2:
			data.HeaderData1__addtlKanaOfficeAddr2 === "" ? false : !Yup.string().required().max(138).matches(REGULARS.half).isValidSync(data.HeaderData1__addtlKanaOfficeAddr2),
		HeaderData1__addtlKanjiOfficeAddrCode2:
			data.HeaderData1__addtlKanjiOfficeAddrCode2 === "" ? false : !Yup.string().required().max(99).matches(REGULARS.em).isValidSync(data.HeaderData1__addtlKanjiOfficeAddrCode2),

		HeaderData1__officePhoneNum2: !Yup.string().required().matches(REGULARS.home_phone).isValidSync(data.HeaderData1__officePhoneNum2),
		HeaderData1__headOfficeAddr2: !Yup.string().required().matches(REGULARS.em).isValidSync(data.HeaderData1__headOfficeAddr2),
		HeaderData1__numOfEmpl2: !Yup.number().integer().min(0).max(9999999).isValidSync(data.HeaderData1__numOfEmpl2),

		HeaderData1__belongingDepartment2: data.HeaderData1__belongingDepartment2 === "" ? false : !Yup.string().max(46).matches(REGULARS.em).isValidSync(data.HeaderData1__belongingDepartment2),
		HeaderData1__postCode2: data.HeaderData1__postCode2 === "" ? false : !Yup.string().required().length(2).isValidSync(data.HeaderData1__postCode2),
		HeaderData1__yearsOfJoiningCompany2: data.HeaderData1__yearsOfJoiningCompany2 === "" ? false : !Yup.string().matches(REGULARS.ym).isValidSync(data.HeaderData1__yearsOfJoiningCompany2),
		HeaderData1__listedDivision2: data.HeaderData1__listedDivision2 === "" ? false : !Yup.number().integer().required().isValidSync(data.HeaderData1__listedDivision2),

		HeaderData1__officeEstablishmentDate2: data.HeaderData1__officeEstablishmentDate2 === "" ? false : !Yup.string().matches(REGULARS.ymd).isValidSync(data.HeaderData1__officeEstablishmentDate2),
		HeaderData1__officeCapital2: data.HeaderData1__officeCapital2 === "" ? false : !Yup.number().integer().min(0).max(99999999999999).isValidSync(data.HeaderData1__officeCapital2),

		HeaderData1__annualIncome2: !Yup.number().integer().required().max(99999).isValidSync(data.HeaderData1__annualIncome2),
		HeaderData1__incomeSrceCode2: data.HeaderData1__incomeSrceCode2 === "" ? false : !Yup.string().length(2).isValidSync(data.HeaderData1__incomeSrceCode2),
		HeaderData1__finalIncomeTaxReturn2: data.HeaderData1__finalIncomeTaxReturn2 === "" ? false : !Yup.number().integer().isValidSync(data.HeaderData1__finalIncomeTaxReturn2),
		HeaderData1__maternityMaternityLeave2: Boolean(data.HeaderData1__maternityMaternityLeave2) ? !Yup.number().integer().required().isValidSync(data.HeaderData1__maternityMaternityLeave2) : false,

		HeaderData1__loanUmu2: Boolean(data.HeaderData1__loanUmu2) ? !Yup.number().integer().required().isValidSync(data.HeaderData1__loanUmu2) : false,
		HeaderData1__loanOfficeName2: data.HeaderData1__loanOfficeName2 === "" ? false : !Yup.string().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__loanOfficeName2),
		HeaderData1__preOfficeName2: data.HeaderData1__preOfficeName2 === "" ? false : !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.HeaderData1__preOfficeName2),
		HeaderData1__preOfficeLength2: data.HeaderData1__preOfficeLength2 === "" ? false : !Yup.number().integer().min(0).max(99).isValidSync(data.HeaderData1__preOfficeLength2),
	};

	const hasErorr = useMemo(() => {
		const temp = Object.values(errors).filter((item) => item === true);
		console.log(temp);
		console.log(errors);
		return temp.length > 0;
	}, [data]);

	return (
		<Root>
			<StepHeader step={5} />
			<Container maxWidth="md">
				<Box sx={{ boxShadow: theme.effectStyle.outer, background: theme.palette.background.gray, paddingTop: "144px", paddingBottom: "120px", border: `1px solid ${theme.palette.primary.lighter}` }}>
					<WlcTitle text="????????????????????????????????????????????????????????????" />
					<Group title="??????" error={errors.HeaderData1__occupation2}>
						<Select value={data.HeaderData1__occupation2} config={occupationEnum} onChange={(newValue) => setData({ ...data, HeaderData1__occupation2: newValue })} textAlign="start" />
						<Lable text="??????" error={errors.HeaderData1__occupation2} />
					</Group>
					<Group title="??????" error={errors.HeaderData1__indsTypeMajorClCode2}>
						<Select
							value={data.HeaderData1__indsTypeMajorClCode2}
							config={indsTypeMajorClEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__indsTypeMajorClCode2: newValue })}
							textAlign="start"
						/>
						<Lable text="??????" error={errors.HeaderData1__indsTypeMajorClCode2} />
					</Group>
					<Group title="??????" error={errors.HeaderData1__indsBusinessContentsName2}>
						<Select
							value={data.HeaderData1__indsBusinessContentsName2}
							config={indsBusinessEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__indsBusinessContentsName2: newValue })}
							textAlign="start"
						/>
						<Lable text="??????" error={errors.HeaderData1__indsBusinessContentsName2} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__emplmtFormCode2}>
						<Select value={data.HeaderData1__emplmtFormCode2} config={emplmtFormEnum} onChange={(newValue) => setData({ ...data, HeaderData1__emplmtFormCode2: newValue })} textAlign="start" />
						<Lable text="??????" error={errors.HeaderData1__emplmtFormCode2} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__kanaOfficeName2 | errors.HeaderData1__kanjiOfficeName2}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanjiOfficeName2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanjiOfficeName2: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__kanjiOfficeName2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanaOfficeName2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanaOfficeName2: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__kanaOfficeName2} />
							</Box>
						</Stack>
					</Group>
					<Group title="?????????" error={errors.HeaderData1__officePstcd2 | errors.HeaderData1__addtlKanaOfficeAddr2 | errors.HeaderData1__addtlKanjiOfficeAddrCode2}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????
								</Typography>
								<PstlCode
									value={data.HeaderData1__officePstcd2}
									fullWidth
									onChange={(newValue) => setData({ ...data, HeaderData1__officePstcd2: newValue })}
									setResults={(results) => {
										setData({
											...data,
											HeaderData1__officeKanaAddrPrefecture2: results.kana1,
											HeaderData1__officeKanaAddrCityTownCunty2: results.kana2,
											HeaderData1__officeKanaAddrDtl2: results.kana3,

											HeaderData1__kanjiOfficeAddrPrefecture2: results.address1,
											HeaderData1__kanjiOfficeAddrCityTownCunty2: results.address2,
											HeaderData1__kanjiOfficeAddrDtl2: results.address3,
										});
									}}
								/>
								<Lable text="??????; ??????????????????; ?????????8; 999-999;" error={errors.HeaderData1__officePstcd2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrPrefecture2} sx={{ width: "148px" }} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									??????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrCityTownCunty2} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrDtl2} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__addtlKanjiOfficeAddrCode2} onChange={(event) => setData({ ...data, HeaderData1__addtlKanjiOfficeAddrCode2: event.target.value })} />
								<Lable text="??????; ????????????; ?????????40;" error={errors.HeaderData1__addtlKanjiOfficeAddrCode2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrPrefecture2} sx={{ width: "148px" }} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									??????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrCityTownCunty2} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrDtl2} />
								<Lable text="???????????????????????????????????????????????????????????????????????????" />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField fullWidth value={data.HeaderData1__addtlKanaOfficeAddr2} onChange={(event) => setData({ ...data, HeaderData1__addtlKanaOfficeAddr2: event.target.value })} />
								<Lable text="??????; ????????????; ?????????40;" error={errors.HeaderData1__addtlKanaOfficeAddr2} />
							</Box>
						</Stack>
					</Group>
					<Group title="????????????" error={errors.HeaderData1__officePhoneNum2}>
						<TextField value={data.HeaderData1__officePhoneNum2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__officePhoneNum2: event.target.value })} sx={{ width: "228px" }} />
						<Lable text="??????; ??????????????????; ?????????12;" error={errors.HeaderData1__officePhoneNum2} />
					</Group>
					<Group title="???????????????" error={errors.HeaderData1__headOfficeAddr2}>
						<TextField value={data.HeaderData1__headOfficeAddr2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__headOfficeAddr2: event.target.value })} sx={{ width: "228px" }} />
						<Lable text="??????; ????????????; ?????????20;" error={errors.HeaderData1__headOfficeAddr2} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__numOfEmpl2}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<TextField
								type="number"
								placeholder="0"
								value={data.HeaderData1__numOfEmpl2}
								fullWidth
								onChange={(event) => setData({ ...data, HeaderData1__numOfEmpl2: event.target.value })}
								sx={{ width: "110px" }}
							/>
							<Typography variant="rg16">???</Typography>
						</Stack>
						<Lable text="??????; ????????????; ?????????7;" error={errors.HeaderData1__numOfEmpl2} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__belongingDepartment2}>
						<TextField
							value={data.HeaderData1__belongingDepartment2}
							fullWidth
							onChange={(event) => setData({ ...data, HeaderData1__belongingDepartment2: event.target.value })}
							sx={{ width: "228px" }}
						/>
						<Lable text="??????; ????????????; ?????????46;" error={errors.HeaderData1__belongingDepartment2} />
					</Group>
					<Group title="??????" error={errors.HeaderData1__postCode2}>
						<Select value={data.HeaderData1__postCode2} config={postEnum} onChange={(newValue) => setData({ ...data, HeaderData1__postCode2: newValue })} textAlign="start" />
						<Lable text="??????" error={errors.HeaderData1__postCode2} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__yearsOfJoiningCompany2}>
						<YmPicker value={data.HeaderData1__yearsOfJoiningCompany2} onChange={(newValue) => setData({ ...data, HeaderData1__yearsOfJoiningCompany2: newValue })} />
						<Lable text="??????; ??????????????????; yyyy/mm;" error={errors.HeaderData1__yearsOfJoiningCompany2} />
					</Group>
					<Group title="????????????" error={errors.HeaderData1__listedDivision2}>
						<Select value={data.HeaderData1__listedDivision2} config={listedEnum} onChange={(newValue) => setData({ ...data, HeaderData1__listedDivision2: newValue })} textAlign="start" />
						<Lable text="??????" error={errors.HeaderData1__listedDivision2} />
					</Group>
					<Group title="???????????????" error={errors.HeaderData1__officeEstablishmentDate2}>
						<YmdPicker value={data.HeaderData1__officeEstablishmentDate2} onChange={(newValue) => setData({ ...data, HeaderData1__officeEstablishmentDate2: newValue })} />
						<Lable text="??????; ??????????????????; yyyy/mm/dd;" error={errors.HeaderData1__officeEstablishmentDate2} />
					</Group>
					<Group title="?????????" error={errors.HeaderData1__officeCapital2}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<TextField
								type="number"
								placeholder="0"
								value={data.HeaderData1__officeCapital2}
								fullWidth
								onChange={(event) => setData({ ...data, HeaderData1__officeCapital2: event.target.value })}
								sx={{ width: "228px" }}
							/>
							<Typography variant="rg16">???</Typography>
						</Stack>
						<Lable text="??????; ????????????; ?????????14;" error={errors.HeaderData1__officeCapital2} />
					</Group>

					<Group title="????????????" error={errors.HeaderData1__annualIncome2}>
						<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.lighter}` }}>
							<Group title="??????" error={errors.HeaderData1__annualIncome2} borderRadius="2.5px 2.5px 0px 0px">
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__annualIncome2}
										fullWidth
										onChange={(event) => setData({ ...data, HeaderData1__annualIncome2: event.target.value })}
										sx={{ width: "228px" }}
									/>
									<Typography variant="rg16">??????</Typography>
								</Stack>
								<Lable text="??????; ????????????; 0~99999;" error={errors.HeaderData1__annualIncome2} />
							</Group>

							<Group title="?????????" error={errors.HeaderData1__incomeSrceCode2}>
								<RadioGroup value={data.HeaderData1__incomeSrceCode2} config={incomeSrceEnum} onChange={(newValue) => setData({ ...data, HeaderData1__incomeSrceCode2: newValue })} />
								<Lable text="??????" error={errors.HeaderData1__incomeSrceCode2} />
							</Group>

							<Group title="??????????????????" error={errors.HeaderData1__finalIncomeTaxReturn2}>
								<RadioGroup value={data.HeaderData1__finalIncomeTaxReturn2} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__finalIncomeTaxReturn2: newValue })} />
								<Lable text="??????" error={errors.HeaderData1__finalIncomeTaxReturn2} />
							</Group>
						</Box>
					</Group>

					<Group title="???????????????" error={errors.HeaderData1__maternityMaternityLeave2}>
						<RadioGroup
							value={data.HeaderData1__maternityMaternityLeave2}
							config={maternityMaternityEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__maternityMaternityLeave2: newValue })}
						/>
						<Lable text="??????" error={errors.HeaderData1__maternityMaternityLeave2} />
					</Group>

					<Group title="????????????" error={errors.HeaderData1__loanUmu2}>
						<RadioGroup value={data.HeaderData1__loanUmu2} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__loanUmu2: newValue })} />
						<Lable text="??????" error={errors.HeaderData1__loanUmu2} />
						<Typography variant="b14" color={theme.palette.primary.main} ml="2px" mb="5px">
							??????????????????????????????????????????????????????????????????????????????
						</Typography>
						{data.HeaderData1__loanUmu2 === 1 && (
							<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.light}` }}>
								<Group title="??????????????????" error={errors.HeaderData1__loanOfficeName2} borderRadius="2.5px 2.5px 0px 0px">
									<TextField value={data.HeaderData1__loanOfficeName2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__loanOfficeName2: event.target.value })} sx={{ width: "228px" }} />
									<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__loanOfficeName2} />
								</Group>
							</Box>
						)}
					</Group>

					<Group title="????????????" error={errors.HeaderData1__preOfficeName2 | errors.HeaderData1__preOfficeLength2}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									?????????????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__preOfficeName2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__preOfficeName2: event.target.value })} />
								<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__preOfficeName2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									????????????????????????
								</Typography>
								<TextField type="text" value={data.HeaderData1__preOfficeLength2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__preOfficeLength2: event.target.value })} />
								<Lable text="??????; ????????????; ?????????2;" error={errors.HeaderData1__preOfficeLength2} />
							</Box>
						</Stack>
					</Group>
				</Box>
			</Container>
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate("/case/create/4")} handleNext={() => navigate("/case/create/6")} />
		</Root>
	);
}
