import * as Yup from "yup";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { useTheme, styled } from "@mui/material/styles";
import { Box, Stack, Container, Typography, TextField } from "@mui/material";
// hooks
import useLocalStorage from "src/hooks/useLocalStorage";
// components
import Group from "src/components/Group";
import Lable from "src/components/Lable";
import WlcTitle from "src/components/WlcTitle";
import YmdPicker from "src/components/YmdPicker";
import RadioGroup from "src/components/RadioGroup";
import Select from "src/components/Select";
import StepHeader from "src/components/StepHeader";
import StepFooter from "src/components/StepFooter";

// settings
import REGULARS from "src/settings/regulars";
import { umuEnum, purposeOfUseEnum, bonusMonthTypeEnum, repaymentMethodEnum, financeRefinanceEnum, purposeOfLoanTypeEnum, refinancingLoanKindEnum, relationshipEnum } from "src/settings/enums";
// ----------------------------------------------------------------------

const Root = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	background: theme.palette.background.gradation,
}));

// ----------------------------------------------------------------------

const initData = {
	HeaderData1__financeRefinance: "",
	HeaderData1__purposeOfUse: "",
	HeaderData1__purposeOfLoanType: "",
	HeaderData1__scheduleEffectDate: "",
	HeaderData1__amountHopeLimit: "",
	HeaderData1__loanPeriodYear: "",
	HeaderData1__loanPeriodMonth: "",
	HeaderData1__amountBonusRepayment: "",
	HeaderData1__bonusMonthType: "",
	HeaderData1__repaymentMethod: "",
	HeaderData1__IncomeAdditionType1: null,
	HeaderData1__pairLoanPresence: null,
	HeaderData1__tochiLeadingFinance: null,
	HeaderData1__refinancingLoanBal: "",
	HeaderData1__amountOfOriginalBuying: "",
	HeaderData1__refinancingLoanKind: "",
	HeaderData1__amountOfOriginalBorrowed: "",
	HeaderData1__periodOfOriginalBorrowed: "",
	HeaderData1__refinancingLoanCompanyName: "",
	HeaderData1__relationshipOfApplicant1: "",
};

// ----------------------------------------------------------------------

export default function () {
	const theme = useTheme();
	const navigate = useNavigate();
	const [data, setData] = useLocalStorage("stepData01", initData);

	const errors = {
		HeaderData1__financeRefinance: !Yup.number().integer().required().isValidSync(data.HeaderData1__financeRefinance),
		HeaderData1__purposeOfUse: !Yup.number().integer().required().isValidSync(data.HeaderData1__purposeOfUse),
		HeaderData1__purposeOfLoanType: !Yup.string().max(4).required().isValidSync(data.HeaderData1__purposeOfLoanType),
		HeaderData1__scheduleEffectDate: !Yup.string().required().matches(REGULARS.ymd).isValidSync(data.HeaderData1__scheduleEffectDate),
		HeaderData1__amountHopeLimit: !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__amountHopeLimit),
		HeaderData1__amountBonusRepayment: Boolean(data.HeaderData1__amountBonusRepayment)
			? !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__amountBonusRepayment)
			: false,
		HeaderData1__bonusMonthType: Boolean(data.HeaderData1__bonusMonthType) ? !Yup.number().integer().isValidSync(data.HeaderData1__bonusMonthType) : false,
		HeaderData1__loanPeriodYear: !Yup.number().integer().required().min(1).max(50).isValidSync(data.HeaderData1__loanPeriodYear),
		HeaderData1__loanPeriodMonth: Boolean(data.HeaderData1__loanPeriodMonth) ? !Yup.number().integer().min(0).max(11).isValidSync(data.HeaderData1__loanPeriodMonth) : false,
		HeaderData1__repaymentMethod: !Yup.number().integer().required().isValidSync(data.HeaderData1__repaymentMethod),
		HeaderData1__pairLoanPresence: data.HeaderData1__pairLoanPresence === "" ? false : !Yup.number().integer().required().isValidSync(data.HeaderData1__pairLoanPresence),
		HeaderData1__IncomeAdditionType1: Boolean(data.HeaderData1__IncomeAdditionType1) ? !Yup.string().required().isValidSync(data.HeaderData1__IncomeAdditionType1) : false,
		HeaderData1__relationshipOfApplicant1: Boolean(data.HeaderData1__IncomeAdditionType1) ? !Yup.number().integer().required().isValidSync(data.HeaderData1__relationshipOfApplicant1) : false,
		HeaderData1__tochiLeadingFinance: Boolean(data.HeaderData1__tochiLeadingFinance) ? !Yup.number().integer().required().isValidSync(data.HeaderData1__tochiLeadingFinance) : false,
		HeaderData1__amountOfOriginalBuying:
			data.HeaderData1__purposeOfLoanType !== "4700" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__amountOfOriginalBuying),
		HeaderData1__amountOfOriginalBorrowed:
			data.HeaderData1__purposeOfLoanType !== "4700" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__amountOfOriginalBorrowed),
		HeaderData1__periodOfOriginalBorrowed:
			data.HeaderData1__purposeOfLoanType !== "4700" ? false : !Yup.string().required().matches(REGULARS.ymd).isValidSync(data.HeaderData1__periodOfOriginalBorrowed),
		HeaderData1__refinancingLoanKind: data.HeaderData1__refinancingLoanKind === "" ? false : !Yup.number().integer().required().isValidSync(data.HeaderData1__refinancingLoanKind),
		HeaderData1__refinancingLoanCompanyName:
			data.HeaderData1__refinancingLoanCompanyName === "" ? false : !Yup.string().max(40).matches(REGULARS.em).isValidSync(data.HeaderData1__refinancingLoanCompanyName),
		HeaderData1__refinancingLoanBal: data.HeaderData1__refinancingLoanBal === "" ? false : !Yup.number().integer().min(0).max(99999).isValidSync(data.HeaderData1__refinancingLoanBal),
	};

	const hasErorr = useMemo(() => {
		const temp = Object.values(errors).filter((item) => item === true);
		console.log(temp);
		console.log(errors);
		return temp.length > 0;
	}, [data]);

	return (
		<Root>
			<StepHeader step={1} />
			<Container maxWidth="md">
				<Box sx={{ boxShadow: theme.effectStyle.outer, background: theme.palette.background.gray, paddingTop: "144px", paddingBottom: "120px", border: `1px solid ${theme.palette.primary.lighter}` }}>
					<WlcTitle text="まずは、お借入のご希望をお聞かせください。" />
					<Group title="借入/借換区分" error={errors.HeaderData1__financeRefinance}>
						<RadioGroup value={data.HeaderData1__financeRefinance} config={financeRefinanceEnum} onChange={(newValue) => setData({ ...data, HeaderData1__financeRefinance: newValue })} />
						<Lable text="必須" error={errors.HeaderData1__financeRefinance} />
					</Group>
					<Group title="使用目的" error={errors.HeaderData1__purposeOfUse}>
						<RadioGroup value={data.HeaderData1__purposeOfUse} config={purposeOfUseEnum} onChange={(newValue) => setData({ ...data, HeaderData1__purposeOfUse: newValue })} />
						<Lable text="必須" error={errors.HeaderData1__purposeOfUse} />
					</Group>
					<Group title="資金使途" error={errors.HeaderData1__purposeOfLoanType}>
						<Select
							value={data.HeaderData1__purposeOfLoanType}
							config={purposeOfLoanTypeEnum}
							onChange={(newValue) => setData({ ...data, HeaderData1__purposeOfLoanType: newValue })}
							textAlign="start"
						/>
						<Lable text="必須" error={errors.HeaderData1__purposeOfLoanType} />

						{data.HeaderData1__purposeOfLoanType === "4700" && (
							<Box width="100%" mb="20px">
								<Typography variant="b14" color={theme.palette.primary.main} ml="2px" mb="5px">
									※上記資金使途が「借換」の場合は借換情報があり。
								</Typography>
								<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.light}` }}>
									<Group title="当初ご購入金額" error={errors.HeaderData1__amountOfOriginalBuying} borderRadius="2.5px 2.5px 0px 0px">
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__amountOfOriginalBuying}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__amountOfOriginalBuying: event.target.value })}
											/>
											<Typography variant="rg16">万円</Typography>
										</Stack>
										<Lable text="必須; 半角数字; 0~99999;" error={errors.HeaderData1__amountOfOriginalBuying} />
									</Group>
									<Group title="当初お借入金額" error={errors.HeaderData1__amountOfOriginalBorrowed}>
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__amountOfOriginalBorrowed}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__amountOfOriginalBorrowed: event.target.value })}
											/>
											<Typography variant="rg16">万円</Typography>
										</Stack>
										<Lable text="必須; 半角数字; 0~99999;" error={errors.HeaderData1__amountOfOriginalBorrowed} />
									</Group>
									<Group title="当初お借入時期" error={errors.HeaderData1__periodOfOriginalBorrowed}>
										<YmdPicker value={data.HeaderData1__periodOfOriginalBorrowed} onChange={(newValue) => setData({ ...data, HeaderData1__periodOfOriginalBorrowed: newValue })} />
										<Lable text="必須; 半角数字記号; yyyy/mm/dd;" error={errors.HeaderData1__periodOfOriginalBorrowed} />
									</Group>

									<Group title="当初お借入先" error={errors.HeaderData1__refinancingLoanKind}>
										<Select
											value={data.HeaderData1__refinancingLoanKind}
											config={refinancingLoanKindEnum}
											onChange={(newValue) => setData({ ...data, HeaderData1__refinancingLoanKind: newValue })}
											textAlign="start"
											width="156px"
										/>
										<Lable text="任意" error={errors.HeaderData1__refinancingLoanKind} />
									</Group>
									<Group title="当初お借入先名" error={errors.HeaderData1__refinancingLoanCompanyName}>
										<TextField
											type="text"
											value={data.HeaderData1__refinancingLoanCompanyName}
											fullWidth
											onChange={(event) => setData({ ...data, HeaderData1__refinancingLoanCompanyName: event.target.value })}
										/>
										<Lable text="必須; 全角文字; 40サイズ;" error={errors.HeaderData1__refinancingLoanCompanyName} />
									</Group>
									<Group title="必要資金/現在のお借入残高" error={errors.HeaderData1__refinancingLoanBal} borderRadius="2.5px 2.5px 0px 0px">
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__refinancingLoanBal}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__refinancingLoanBal: event.target.value })}
											/>
											<Typography variant="rg16">万円</Typography>
										</Stack>
										<Lable text="任意; 半角数字; 0~99999;" error={errors.HeaderData1__refinancingLoanBal} />
									</Group>
								</Box>
							</Box>
						)}
					</Group>
					<Group title="お借入内容">
						<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.lighter}` }}>
							<Group title="融資実行予定日" error={errors.HeaderData1__scheduleEffectDate} borderRadius="2.5px 2.5px 0px 0px">
								<YmdPicker value={data.HeaderData1__scheduleEffectDate} onChange={(newValue) => setData({ ...data, HeaderData1__scheduleEffectDate: newValue })} />
								<Lable text="必須; 半角数字記号; yyyy/mm/dd;" error={errors.HeaderData1__scheduleEffectDate} />
							</Group>
							<Group title="借入希望額" error={errors.HeaderData1__amountHopeLimit}>
								<Stack direction="row" alignItems="center" spacing={1}>
									<TextField
										type="number"
										placeholder="0"
										value={data.HeaderData1__amountHopeLimit}
										fullWidth
										sx={{ width: "156px" }}
										onChange={(event) => setData({ ...data, HeaderData1__amountHopeLimit: event.target.value })}
									/>
									<Typography variant="rg16">万円</Typography>
								</Stack>
								<Lable text="必須; 半角数字; 0~99999;" error={errors.HeaderData1__amountHopeLimit} />
							</Group>
							<Group title="ボーナス返済">
								<Stack spacing="20px">
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											ボーナス返済分
										</Typography>
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__amountBonusRepayment}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__amountBonusRepayment: event.target.value })}
											/>
											<Typography variant="rg16">万円</Typography>
										</Stack>
										<Lable text="任意; 半角数字; 0~99999;" error={errors.HeaderData1__amountBonusRepayment} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											ボーナス返済月
										</Typography>
										<Select
											value={data.HeaderData1__bonusMonthType}
											config={bonusMonthTypeEnum}
											onChange={(newValue) => setData({ ...data, HeaderData1__bonusMonthType: newValue })}
											textAlign="start"
											width="156px"
										/>
										<Lable text="任意" error={errors.HeaderData1__bonusMonthType} />
									</Box>
								</Stack>
							</Group>
							<Group title="借入期間" error={errors.HeaderData1__loanPeriodYear}>
								<Stack direction="row" justifyContent="flex-start" alignItems="center">
									<Box>
										<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="5px">
											<TextField
												type="number"
												placeholder="0"
												InputProps={{
													inputProps: {
														style: { textAlign: "center" },
													},
												}}
												value={data.HeaderData1__loanPeriodYear}
												fullWidth
												sx={{ width: "52px" }}
												onChange={(event) => setData({ ...data, HeaderData1__loanPeriodYear: event.target.value })}
											/>
											<Typography variant="rg16">ヶ年</Typography>
										</Stack>
									</Box>
									<Box>
										<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="5px">
											<TextField
												type="number"
												placeholder="0"
												InputProps={{
													inputProps: {
														style: { textAlign: "center" },
													},
												}}
												value={data.HeaderData1__loanPeriodMonth}
												fullWidth
												sx={{ width: "52px", textAlign: "center", ml: "20px" }}
												onChange={(event) => setData({ ...data, HeaderData1__loanPeriodMonth: event.target.value })}
											/>
											<Typography variant="rg16">ヶ日</Typography>
										</Stack>
									</Box>
								</Stack>
								<Box>
									<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="15px">
										<Lable text="年 必須; 半角数字; 0~50;" error={errors.HeaderData1__loanPeriodYear} />
										<Lable text="日 任意; 半角数字; 0~11;" error={errors.HeaderData1__loanPeriodMonth} />
									</Stack>
								</Box>
							</Group>
							<Group title="返済方法" error={errors.HeaderData1__repaymentMethod}>
								<RadioGroup value={data.HeaderData1__repaymentMethod} config={repaymentMethodEnum} onChange={(newValue) => setData({ ...data, HeaderData1__repaymentMethod: newValue })} />
								<Lable text="必須" error={errors.HeaderData1__repaymentMethod} />
							</Group>
							<Group title="ペアローン有無" error={errors.HeaderData1__pairLoanPresence}>
								<RadioGroup
									value={data.HeaderData1__pairLoanPresence}
									config={umuEnum}
									onChange={(newValue) => {
										if (newValue === 1) {
											setData({ ...data, HeaderData1__pairLoanPresence: newValue, HeaderData1__IncomeAdditionType1: null });
										} else {
											setData({ ...data, HeaderData1__pairLoanPresence: newValue });
										}
									}}
								/>
								<Lable text="必須" error={errors.HeaderData1__pairLoanPresence} />
							</Group>
							{data.HeaderData1__pairLoanPresence === "" && (
								<Group title="収入合算有無" error={errors.HeaderData1__IncomeAdditionType1}>
									<RadioGroup value={data.HeaderData1__IncomeAdditionType1} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__IncomeAdditionType1: newValue })} />
									<Lable text="必須" error={errors.HeaderData1__IncomeAdditionType1} />

									{data.HeaderData1__IncomeAdditionType1 === 1 && (
										<Box width="100%" mt="20px">
											<Typography variant="b14" color={theme.palette.primary.main} ml="2px" mb="5px">
												※上記収入合算有無が「あり」の場合は収入合算者続柄があり。
											</Typography>
											<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.light}` }}>
												<Group title="収入合算者続柄" error={errors.HeaderData1__relationshipOfApplicant1} borderRadius="2.5px 2.5px 0px 0px">
													<Select
														value={data.HeaderData1__relationshipOfApplicant1}
														config={relationshipEnum}
														onChange={(newValue) => setData({ ...data, HeaderData1__relationshipOfApplicant1: newValue })}
														textAlign="start"
														width="156px"
													/>
													<Lable text="必須" error={errors.HeaderData1__relationshipOfApplicant1} />
												</Group>
											</Box>
										</Box>
									)}
								</Group>
							)}
						</Box>
					</Group>

					<Group title="土地先行融資利用有無" error={errors.HeaderData1__tochiLeadingFinance}>
						<RadioGroup value={data.HeaderData1__tochiLeadingFinance} config={umuEnum} onChange={(newValue) => setData({ ...data, HeaderData1__tochiLeadingFinance: newValue })} />
						<Lable text="任意" error={errors.HeaderData1__tochiLeadingFinance} />
					</Group>
				</Box>
			</Container>
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate("/")} handleNext={() => navigate("/case/create/2")} />
		</Root>
	);
}
