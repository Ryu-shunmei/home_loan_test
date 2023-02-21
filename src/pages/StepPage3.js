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
					<WlcTitle text="あなたのご職業について教えてください。" />
					<Group title="職業" error={errors.HeaderData1__occupation1}>
						<Select value={data.HeaderData1__occupation1} config={occupationEnum} onChange={(newValue) => setData({ ...data, HeaderData1__occupation1: newValue })} textAlign="start" />
						<Lable text="必須" error={errors.HeaderData1__occupation1} />
					</Group>
					<Group title="業種" error={errors.HeaderData1__indsTypeMajorClCode1}>
						<Select
							value={data.HeaderData1__indsTypeMajorClCode1}
							config={indsTypeMajorClEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__indsTypeMajorClCode1: newValue })}
							textAlign="start"
						/>
						<Lable text="任意" error={errors.HeaderData1__indsTypeMajorClCode1} />
					</Group>
					<Group title="職種" error={errors.HeaderData1__indsBusinessContentsName1}>
						<Select
							value={data.HeaderData1__indsBusinessContentsName1}
							config={indsBusinessEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__indsBusinessContentsName1: newValue })}
							textAlign="start"
						/>
						<Lable text="任意" error={errors.HeaderData1__indsBusinessContentsName1} />
					</Group>
					<Group title="雇用形態" error={errors.HeaderData1__emplmtFormCode1}>
						<Select value={data.HeaderData1__emplmtFormCode1} config={emplmtFormEnum} onChange={(newValue) => setData({ ...data, HeaderData1__emplmtFormCode1: newValue })} textAlign="start" />
						<Lable text="必須" error={errors.HeaderData1__emplmtFormCode1} />
					</Group>
					<Group title="勤務先名" error={errors.HeaderData1__kanaOfficeName1 | errors.HeaderData1__kanjiOfficeName1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　勤務先名
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanaOfficeName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanaOfficeName1: event.target.value })} />
								<Lable text="必須; 半角文字; サイズ48;" error={errors.HeaderData1__kanaOfficeName1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　勤務先名
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanjiOfficeName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanjiOfficeName1: event.target.value })} />
								<Lable text="必須; 全角文字; サイズ48;" error={errors.HeaderData1__kanjiOfficeName1} />
							</Box>
						</Stack>
					</Group>
					<Group title="現住所" error={errors.HeaderData1__officePstcd1 | errors.HeaderData1__addtlKanaOfficeAddr1 | errors.HeaderData1__addtlKanjiOfficeAddrCode1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									郵便番号
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
								<Lable text="必須; 半角数字記号; サイズ8; ***-****;" error={errors.HeaderData1__officePstcd1} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　都道府県
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrPrefecture1} sx={{ width: "148px" }} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　市区郡
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrCityTownCunty1} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　町村字丁目
								</Typography>
								<TextField fullWidth value={data.HeaderData1__officeKanaAddrDtl1} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　補足住所
								</Typography>
								<TextField fullWidth value={data.HeaderData1__addtlKanaOfficeAddr1} onChange={(event) => setData({ ...data, HeaderData1__addtlKanaOfficeAddr1: event.target.value })} />
								<Lable text="必須; 半角文字; サイズ40;" error={errors.HeaderData1__addtlKanaOfficeAddr1} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　都道府県
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrPrefecture1} sx={{ width: "148px" }} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　市区郡
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrCityTownCunty1} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　町村字丁目
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiOfficeAddrDtl1} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　補足住所
								</Typography>
								<TextField fullWidth value={data.HeaderData1__addtlKanjiOfficeAddrCode1} onChange={(event) => setData({ ...data, HeaderData1__addtlKanjiOfficeAddrCode1: event.target.value })} />
								<Lable text="必須; 半角文字; サイズ40;" error={errors.HeaderData1__addtlKanjiOfficeAddrCode1} />
							</Box>
						</Stack>
					</Group>
					<Group title="電話番号" error={errors.HeaderData1__officePhoneNum1}>
						<TextField value={data.HeaderData1__officePhoneNum1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__officePhoneNum1: event.target.value })} sx={{ width: "228px" }} />
						<Lable text="必須; 半角数字記号; 03-9999-9999;" error={errors.HeaderData1__officePhoneNum1} />
					</Group>
					<Group title="本社所在地" error={errors.HeaderData1__headOfficeAddr1}>
						<TextField value={data.HeaderData1__headOfficeAddr1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__headOfficeAddr1: event.target.value })} sx={{ width: "228px" }} />
						<Lable text="必須; 全角文字; サイズ20;" error={errors.HeaderData1__headOfficeAddr1} />
					</Group>
					<Group title="従業員数" error={errors.HeaderData1__numOfEmpl1}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<TextField
								type="number"
								placeholder="0"
								value={data.HeaderData1__numOfEmpl1}
								fullWidth
								onChange={(event) => setData({ ...data, HeaderData1__numOfEmpl1: event.target.value })}
								sx={{ width: "110px" }}
							/>
							<Typography variant="rg16">名</Typography>
						</Stack>
						<Lable text="必須; 半角数字; サイズ7;" error={errors.HeaderData1__numOfEmpl1} />
					</Group>
					<Group title="所属部署" error={errors.HeaderData1__belongingDepartment1}>
						<TextField
							value={data.HeaderData1__belongingDepartment1}
							fullWidth
							onChange={(event) => setData({ ...data, HeaderData1__belongingDepartment1: event.target.value })}
							sx={{ width: "228px" }}
						/>
						<Lable text="任意; 全角文字; サイズ46;" error={errors.HeaderData1__belongingDepartment1} />
					</Group>
					<Group title="役職" error={errors.HeaderData1__postCode1}>
						<Select value={data.HeaderData1__postCode1} config={postEnum} onChange={(newValue) => setData({ ...data, HeaderData1__postCode1: newValue })} textAlign="start" />
						<Lable text="任意" error={errors.HeaderData1__postCode1} />
					</Group>
					<Group title="就職年月" error={errors.HeaderData1__yearsOfJoiningCompany1}>
						<YmPicker value={data.HeaderData1__yearsOfJoiningCompany1} onChange={(newValue) => setData({ ...data, HeaderData1__yearsOfJoiningCompany1: newValue })} />
						<Lable text="任意; 半角数字記号; yyyy/mm;" error={errors.HeaderData1__yearsOfJoiningCompany1} />
					</Group>
					<Group title="上場区分" error={errors.HeaderData1__listedDivision1}>
						<Select value={data.HeaderData1__listedDivision1} config={listedEnum} onChange={(newValue) => setData({ ...data, HeaderData1__listedDivision1: newValue })} textAlign="start" />
						<Lable text="任意" error={errors.HeaderData1__listedDivision1} />
					</Group>
					<Group title="設立年月日" error={errors.HeaderData1__officeEstablishmentDate1}>
						<YmdPicker value={data.HeaderData1__officeEstablishmentDate1} onChange={(newValue) => setData({ ...data, HeaderData1__officeEstablishmentDate1: newValue })} />
						<Lable text="任意; 半角数字記号; yyyy/mm/dd;" error={errors.HeaderData1__officeEstablishmentDate1} />
					</Group>
					<Group title="資本金" error={errors.HeaderData1__officeCapital1}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<TextField
								type="number"
								placeholder="0"
								value={data.HeaderData1__officeCapital1}
								fullWidth
								onChange={(event) => setData({ ...data, HeaderData1__officeCapital1: event.target.value })}
								sx={{ width: "228px" }}
							/>
							<Typography variant="rg16">円</Typography>
						</Stack>
						<Lable text="任意; 半角数字; サイズ14;" error={errors.HeaderData1__officeCapital1} />
					</Group>

					<Group title="年収関連" error={errors.HeaderData1__annualIncome1}>
						<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.lighter}` }}>
							<Group title="年収" error={errors.HeaderData1__annualIncome1} borderRadius="2.5px 2.5px 0px 0px">
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__annualIncome1}
										fullWidth
										onChange={(event) => setData({ ...data, HeaderData1__annualIncome1: event.target.value })}
										sx={{ width: "228px" }}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="任意; 半角数字; 0~99999;" error={errors.HeaderData1__annualIncome1} />
							</Group>

							<Group title="収入源" error={errors.HeaderData1__incomeSrceCode1}>
								<RadioGroup value={data.HeaderData1__incomeSrceCode1} config={incomeSrceEnum} onChange={(newValue) => setData({ ...data, HeaderData1__incomeSrceCode1: newValue })} />
								<Lable text="任意" error={errors.HeaderData1__incomeSrceCode1} />
							</Group>

							<Group title="確定申告有無" error={errors.HeaderData1__finalIncomeTaxReturn1}>
								<RadioGroup value={data.HeaderData1__finalIncomeTaxReturn1} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__finalIncomeTaxReturn1: newValue })} />
								<Lable text="任意" error={errors.HeaderData1__finalIncomeTaxReturn1} />
							</Group>
						</Box>
					</Group>

					<Group title="産休・育休" error={errors.HeaderData1__maternityMaternityLeave1}>
						<RadioGroup
							value={data.HeaderData1__maternityMaternityLeave1}
							config={maternityMaternityEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__maternityMaternityLeave1: newValue })}
						/>
						<Lable text="任意" error={errors.HeaderData1__maternityMaternityLeave1} />
					</Group>

					<Group title="出向有無" error={errors.HeaderData1__loanUmu1}>
						<RadioGroup value={data.HeaderData1__loanUmu1} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__loanUmu1: newValue })} />
						<Lable text="任意" error={errors.HeaderData1__loanUmu1} />
						<Typography variant="b14" color={theme.palette.primary.main} ml="2px" mb="5px">
							※上記資金使途が「借換」の場合は出向先会社名があり。
						</Typography>
						{data.HeaderData1__loanUmu1 === 1 && (
							<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.light}` }}>
								<Group title="出向先会社名" error={errors.HeaderData1__loanOfficeName1} borderRadius="2.5px 2.5px 0px 0px">
									<TextField value={data.HeaderData1__loanOfficeName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__loanOfficeName1: event.target.value })} sx={{ width: "228px" }} />
									<Lable text="任意; 全角文字; サイズ48;" error={errors.HeaderData1__loanOfficeName1} />
								</Group>
							</Box>
						)}
					</Group>

					<Group title="前勤務先" error={errors.HeaderData1__preOfficeName1 | errors.HeaderData1__preOfficeLength1}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									前勤務先会社名
								</Typography>
								<TextField type="text" value={data.HeaderData1__preOfficeName1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__preOfficeName1: event.target.value })} />
								<Lable text="必須; 全角文字; サイズ48;" error={errors.HeaderData1__preOfficeName1} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									前勤務先勤続年数
								</Typography>
								<TextField type="text" value={data.HeaderData1__preOfficeLength1} fullWidth onChange={(event) => setData({ ...data, HeaderData1__preOfficeLength1: event.target.value })} />
								<Lable text="必須; 半角数字; サイズ2;" error={errors.HeaderData1__preOfficeLength1} />
							</Box>
						</Stack>
					</Group>
				</Box>
			</Container>
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate("/case/create/2")} handleNext={() => navigate(link)} />
		</Root>
	);
}
