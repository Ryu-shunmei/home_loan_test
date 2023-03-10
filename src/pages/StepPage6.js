import * as Yup from "yup";
import { useEffect, useMemo, useState } from "react";
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
import Select from "src/components/Select";
import Sections from "src/components/Sections";
import YmPicker from "src/components/YmPicker";
import StepHeader from "src/components/StepHeader";
import StepFooter from "src/components/StepFooter";
// settings
import REGULARS from "src/settings/regulars";
import {
	gndrEnum,
	relationshipEnum,
	housingTypeEnum,
	buyingandSellingScheduleTypeEnum,
	collateralTypeEnum,
	jointOwnershipDivisionEnum,
	personOccupancyEnum,
	partnerUmuEnum,
	cohabitationUmuEnum,
} from "src/settings/enums";
// ----------------------------------------------------------------------

const Root = styled("div")(({ theme }) => ({
	minHeight: "100vh",
	background: theme.palette.background.gradation,
}));

// ----------------------------------------------------------------------

const initData = {
	HeaderData1__housingType: "",
	HeaderData1__residenceYears: "",
	HeaderData1__residenceMonths: "",
	HeaderData1__BuyingandSellingScheduleType: "",
	HeaderData1__numOfFamily: "",
	HeaderData1__partnerUmu: "",
	HeaderData1__personOccupancy: null,
	HeaderData1__collateralType: "",
	HeaderData1__postCode: "",
	HeaderData1__collateralAddr: "",
	HeaderData1__kanaCollateralAddr: "",
	HeaderData1__acquisitionTimeOfTheLand: "",
	HeaderData1__collateralLandArea: "",
	HeaderData1__collateralTotalFloorArea: "",
	HeaderData1__vendorName: "",
	HeaderData1__personInChargeOfVendor: "",
	HeaderData1__telephonNumOfVendor: "",
	HeaderData1__jointOwnershipDivision: "",
	HeaderData1__buildingRatioNumerator: "",
	HeaderData1__buildingRatioDenominator: "",
	HeaderData1__landRatioNumerator: "",
	HeaderData1__landRatioDenominator: "",
	HeaderData1__LandPrice1: "",
	HeaderData1__BuildingPrice1: "",
	HeaderData1__landAndBuildingPrice: "",

	DetailData2: [
		{
			relationshipOfFamily: "",
			cohabitationUmu: "",
			kanjiLastNameOfFamily: "",
			kanjiFirstNameOfFamily: "",
			kanaLastNameOfFamily: "",
			kanaFirstNameOfFamily: "",
			familyInfoBirthDate: "",
			familyInfogndrType: "",
		},
	],
};

const initDetailData = {
	relationshipOfFamily: "",
	cohabitationUmu: "",
	kanjiLastNameOfFamily: "",
	kanjiFirstNameOfFamily: "",
	kanaLastNameOfFamily: "",
	kanaFirstNameOfFamily: "",
	familyInfoBirthDate: "",
	familyInfogndrType: "",
};

// ----------------------------------------------------------------------

export default function () {
	const theme = useTheme();
	const navigate = useNavigate();
	const [data, setData] = useLocalStorage("stepData06", initData);

	const errors = {
		HeaderData1__residenceYears: !Yup.number().integer().min(0).max(99).required().isValidSync(data.HeaderData1__residenceYears),
		HeaderData1__residenceMonths: !Yup.number().integer().min(0).max(11).required().isValidSync(data.HeaderData1__residenceMonths),
		HeaderData1__housingType: !Yup.number().integer().required().isValidSync(data.HeaderData1__housingType),
		HeaderData1__BuyingandSellingScheduleType: data.HeaderData1__housingType === 1 ? !Yup.number().integer().required().isValidSync(data.HeaderData1__BuyingandSellingScheduleType) : false,

		HeaderData1__collateralType: !Yup.number().integer().required().isValidSync(data.HeaderData1__collateralType),
		HeaderData1__postCode: data.HeaderData1__postCode === "" ? false : !Yup.string().required().matches(REGULARS.post_code).isValidSync(data.HeaderData1__postCode),
		HeaderData1__collateralAddr: !Yup.string().required().max(40).matches(REGULARS.em).isValidSync(data.HeaderData1__collateralAddr),
		HeaderData1__kanaCollateralAddr: data.HeaderData1__kanaCollateralAddr === "" ? false : !Yup.string().required().max(40).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaCollateralAddr),

		HeaderData1__acquisitionTimeOfTheLand:
			data.HeaderData1__acquisitionTimeOfTheLand === "" ? false : !Yup.string().required().matches(REGULARS.ym).isValidSync(data.HeaderData1__acquisitionTimeOfTheLand),
		HeaderData1__collateralLandArea: data.HeaderData1__collateralLandArea === "" ? false : !Yup.number().required().min(0).max(9999999.999).isValidSync(data.HeaderData1__collateralLandArea),
		HeaderData1__collateralTotalFloorArea:
			data.HeaderData1__collateralTotalFloorArea === "" ? false : !Yup.number().required().min(0).max(9999999.999).isValidSync(data.HeaderData1__collateralTotalFloorArea),

		HeaderData1__vendorName: data.HeaderData1__vendorName === "" ? false : !Yup.string().required().max(40).matches(REGULARS.em).isValidSync(data.HeaderData1__vendorName),
		HeaderData1__telephonNumOfVendor: data.HeaderData1__telephonNumOfVendor === "" ? false : !Yup.string().required().matches(REGULARS.mobile_phone).isValidSync(data.HeaderData1__telephonNumOfVendor),
		HeaderData1__personInChargeOfVendor:
			data.HeaderData1__personInChargeOfVendor === "" ? false : !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__personInChargeOfVendor),
		HeaderData1__jointOwnershipDivision: data.HeaderData1__jointOwnershipDivision === "" ? false : !Yup.number().integer().required().isValidSync(data.HeaderData1__jointOwnershipDivision),

		HeaderData1__buildingRatioNumerator:
			data.HeaderData1__buildingRatioNumerator === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__buildingRatioNumerator),
		HeaderData1__buildingRatioDenominator:
			data.HeaderData1__buildingRatioDenominator === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__buildingRatioDenominator),
		HeaderData1__landRatioNumerator: data.HeaderData1__landRatioNumerator === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__landRatioNumerator),
		HeaderData1__landRatioDenominator: data.HeaderData1__landRatioDenominator === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__landRatioDenominator),

		HeaderData1__LandPrice1: data.HeaderData1__LandPrice1 === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__LandPrice1),
		HeaderData1__BuildingPrice1: data.HeaderData1__BuildingPrice1 === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__BuildingPrice1),
		HeaderData1__landAndBuildingPrice: data.HeaderData1__landAndBuildingPrice === "" ? false : !Yup.number().integer().required().min(0).max(99999).isValidSync(data.HeaderData1__landAndBuildingPrice),

		HeaderData1__personOccupancy: Boolean(data.HeaderData1__personOccupancy) ? !Yup.number().integer().required().isValidSync(data.HeaderData1__personOccupancy) : false,
		HeaderData1__partnerUmu: !Yup.number().integer().required().isValidSync(data.HeaderData1__partnerUmu),
		HeaderData1__numOfFamily: !Yup.number().integer().min(0).max(6).required().isValidSync(data.HeaderData1__numOfFamily),
	};

	const detailErrors = (index) => {
		return {
			relationshipOfFamily: !Yup.number().integer().required().isValidSync(data.DetailData2[index].relationshipOfFamily),
			cohabitationUmu: data.DetailData2[index].cohabitationUmu === "" ? false : !Yup.number().integer().required().isValidSync(data.DetailData2[index].cohabitationUmu),
			kanaLastNameOfFamily: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.DetailData2[index].kanaLastNameOfFamily),
			kanaFirstNameOfFamily: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.DetailData2[index].kanaFirstNameOfFamily),
			kanjiLastNameOfFamily: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.DetailData2[index].kanjiLastNameOfFamily),
			kanjiFirstNameOfFamily: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.DetailData2[index].kanjiFirstNameOfFamily),
			familyInfogndrType: data.DetailData2[index].familyInfogndrType === "" ? false : !Yup.number().integer().required().isValidSync(data.DetailData2[index].familyInfogndrType),
			familyInfoBirthDate: data.DetailData2[index].familyInfoBirthDate === "" ? false : !Yup.string().required().matches(REGULARS.ymd).isValidSync(data.DetailData2[index].familyInfoBirthDate),
		};
	};

	const [step1, _] = useLocalStorage("stepData01", {
		HeaderData1__IncomeAdditionType1: null,
		HeaderData1__pairLoanPresence: null,
	});
	const [link, setLink] = useState("");
	useEffect(() => {
		console.log(step1.HeaderData1__IncomeAdditionType1);
		console.log(step1.HeaderData1__pairLoanPresence);
		if (step1.HeaderData1__IncomeAdditionType1 === 1 || step1.HeaderData1__pairLoanPresence === 1) {
			setLink("/case/create/5");
		} else {
			setLink("/case/create/3");
		}
	}, [step1]);

	const handleAdd = () => {
		let temp = JSON.parse(JSON.stringify(data));
		temp.DetailData2.push(initDetailData);
		setData(temp);
	};

	const handleDel = (index) => {
		let temp = JSON.parse(JSON.stringify(data));
		let d_temp = temp.DetailData2.filter((_, item_index) => item_index !== index);
		setData({
			...temp,
			DetailData2: d_temp,
		});
	};

	const hasErorr = useMemo(() => {
		let num = 0;
		const temp = Object.values(errors).filter((item) => item === true);
		data.DetailData2.forEach((element, index) => {
			let d_temp = Object.values(detailErrors(index)).filter((item) => item === true);
			num += d_temp.length;
		});
		num += temp.length;

		return num > 0;
	}, [data]);

	return (
		<Root>
			<StepHeader step={6} />
			<Container maxWidth="md">
				<Box sx={{ boxShadow: theme.effectStyle.outer, background: theme.palette.background.gray, paddingTop: "144px", paddingBottom: "120px", border: `1px solid ${theme.palette.primary.lighter}` }}>
					<WlcTitle text="???????????????????????????????????????????????????????????????????????????" />
					<Group title="????????????">
						<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.lighter}` }}>
							<Group title="????????????" error={errors.HeaderData1__residenceYears | errors.HeaderData1__residenceMonths} borderRadius="2.5px 2.5px 0px 0px">
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
												value={data.HeaderData1__residenceYears}
												fullWidth
												sx={{ width: "52px" }}
												onChange={(event) => setData({ ...data, HeaderData1__residenceYears: event.target.value })}
											/>
											<Typography variant="rg16">??????</Typography>
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
												value={data.HeaderData1__residenceMonths}
												fullWidth
												sx={{ width: "52px", textAlign: "center", ml: "20px" }}
												onChange={(event) => setData({ ...data, HeaderData1__residenceMonths: event.target.value })}
											/>
											<Typography variant="rg16">??????</Typography>
										</Stack>
									</Box>
								</Stack>
								<Box>
									<Stack direction="row" justifyContent="flex-start" alignItems="center" spacing="15px">
										<Lable text="??? ??????; ????????????; 0~99;" error={errors.HeaderData1__residenceYears} />
										<Lable text="??? ??????; ????????????; 0~11;" error={errors.HeaderData1__residenceMonths} />
									</Stack>
								</Box>
							</Group>
							<Group title="???????????????" error={errors.HeaderData1__housingType}>
								<Select value={data.HeaderData1__housingType} config={housingTypeEnum} onChange={(newValue) => setData({ ...data, HeaderData1__housingType: newValue })} textAlign="start" />
								<Lable text="??????" error={errors.HeaderData1__housingType} />
								{data.HeaderData1__housingType === 1 && (
									<Box>
										<Typography variant="b14" color={theme.palette.primary.main} ml="2px" mb="5px">
											????????????????????????????????????????????????????????????????????????????????????????????????
										</Typography>
										<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.light}` }}>
											<Group title="??????????????????" error={errors.HeaderData1__BuyingandSellingScheduleType} borderRadius="2.5px 2.5px 0px 0px">
												<Choose
													value={data.HeaderData1__BuyingandSellingScheduleType}
													config={buyingandSellingScheduleTypeEnum}
													onClick={(newValue) => setData({ ...data, HeaderData1__BuyingandSellingScheduleType: newValue })}
												/>
												<Lable text="??????" error={errors.HeaderData1__BuyingandSellingScheduleType} />
											</Group>
										</Box>
									</Box>
								)}
							</Group>
						</Box>
					</Group>
					<Group title="????????????">
						<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.lighter}` }}>
							<Group title="??????????????????" error={errors.HeaderData1__collateralType} borderRadius="2.5px 2.5px 0px 0px">
								<Select value={data.HeaderData1__collateralType} config={collateralTypeEnum} onChange={(newValue) => setData({ ...data, HeaderData1__collateralType: newValue })} textAlign="start" />
								<Lable text="??????" error={errors.HeaderData1__collateralType} />
							</Group>
							<Group title="????????????" error={errors.HeaderData1__postCode}>
								<TextField value={data.HeaderData1__postCode} fullWidth onChange={(event) => setData({ ...data, HeaderData1__postCode: event.target.value })} sx={{ width: "110px" }} />
								<Lable text="??????; ??????????????????; ?????????8; ??? 999-9999;" error={errors.HeaderData1__postCode} />
							</Group>
							<Group title="??????" error={errors.HeaderData1__collateralAddr | errors.HeaderData1__kanaCollateralAddr}>
								<Stack spacing="20px">
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											???????????????
										</Typography>
										<TextField type="text" value={data.HeaderData1__collateralAddr} fullWidth onChange={(event) => setData({ ...data, HeaderData1__collateralAddr: event.target.value })} />
										<Lable text="??????; ????????????; ?????????40;" error={errors.HeaderData1__collateralAddr} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											???????????????
										</Typography>
										<TextField type="text" value={data.HeaderData1__kanaCollateralAddr} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanaCollateralAddr: event.target.value })} />
										<Lable text="??????; ????????????; ?????????40;" error={errors.HeaderData1__kanaCollateralAddr} />
									</Box>
								</Stack>
							</Group>
							<Group title="??????????????????" error={errors.HeaderData1__acquisitionTimeOfTheLand}>
								<YmPicker value={data.HeaderData1__acquisitionTimeOfTheLand} onChange={(newValue) => setData({ ...data, HeaderData1__acquisitionTimeOfTheLand: newValue })} />
								<Lable text="??????" error={errors.HeaderData1__acquisitionTimeOfTheLand} />
							</Group>
							<Group title="??????" error={errors.HeaderData1__collateralLandArea | errors.HeaderData1__collateralTotalFloorArea}>
								<Stack spacing="20px">
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????
										</Typography>
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__collateralLandArea}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__collateralLandArea: event.target.value })}
											/>
											<Typography variant="rg16">???</Typography>
										</Stack>
										<Lable text="??????; ??????????????????; 0~9999999.999 ???1234567.890;" error={errors.HeaderData1__collateralLandArea} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????
										</Typography>
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__collateralTotalFloorArea}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__collateralTotalFloorArea: event.target.value })}
											/>
											<Typography variant="rg16">???</Typography>
										</Stack>
										<Lable text="??????; ??????????????????; 0~9999999.999 ???1234567.890;" error={errors.HeaderData1__collateralTotalFloorArea} />
									</Box>
								</Stack>
							</Group>
							<Group title="????????????" error={errors.HeaderData1__vendorName | errors.HeaderData1__telephonNumOfVendor | errors.HeaderData1__personInChargeOfVendor}>
								<Stack spacing="20px">
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????
										</Typography>
										<TextField type="text" value={data.HeaderData1__vendorName} fullWidth onChange={(event) => setData({ ...data, HeaderData1__vendorName: event.target.value })} />
										<Lable text="??????; ????????????; ?????????40;" error={errors.HeaderData1__vendorName} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????_????????????
										</Typography>
										<TextField
											value={data.HeaderData1__telephonNumOfVendor}
											fullWidth
											onChange={(event) => setData({ ...data, HeaderData1__telephonNumOfVendor: event.target.value })}
											sx={{ width: "228px" }}
										/>
										<Lable text="??????; ??????????????????; ?????????13;" error={errors.HeaderData1__telephonNumOfVendor} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????_?????????
										</Typography>
										<TextField
											type="text"
											value={data.HeaderData1__personInChargeOfVendor}
											fullWidth
											onChange={(event) => setData({ ...data, HeaderData1__personInChargeOfVendor: event.target.value })}
										/>
										<Lable text="??????; ????????????; ?????????48;" error={errors.HeaderData1__personInChargeOfVendor} />
									</Box>
								</Stack>
							</Group>
							<Group
								title="????????????"
								error={
									errors.HeaderData1__jointOwnershipDivision |
									errors.HeaderData1__buildingRatioNumerator |
									errors.HeaderData1__buildingRatioDenominator |
									errors.HeaderData1__landRatioNumerator |
									errors.HeaderData1__landRatioDenominator
								}
							>
								<Stack spacing="20px">
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????
										</Typography>
										<Select
											value={data.HeaderData1__jointOwnershipDivision}
											config={jointOwnershipDivisionEnum}
											onChange={(event) => setData({ ...data, HeaderData1__jointOwnershipDivision: event.target.value })}
										/>
										<Lable text="??????" error={errors.HeaderData1__jointOwnershipDivision} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											??????????????????
										</Typography>
										<TextField
											fullWidth
											type="number"
											value={data.HeaderData1__buildingRatioNumerator}
											onChange={(event) => setData({ ...data, HeaderData1__buildingRatioNumerator: event.target.value })}
											sx={{ width: "128px" }}
										/>
										<Lable text="??????; ????????????; ?????????5;" error={errors.HeaderData1__buildingRatioNumerator} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											??????????????????
										</Typography>
										<TextField
											fullWidth
											type="number"
											value={data.HeaderData1__buildingRatioDenominator}
											onChange={(event) => setData({ ...data, HeaderData1__buildingRatioDenominator: event.target.value })}
											sx={{ width: "128px" }}
										/>
										<Lable text="??????; ????????????; ?????????5;" error={errors.HeaderData1__buildingRatioDenominator} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											??????????????????
										</Typography>
										<TextField
											fullWidth
											type="number"
											value={data.HeaderData1__landRatioNumerator}
											onChange={(event) => setData({ ...data, HeaderData1__landRatioNumerator: event.target.value })}
											sx={{ width: "128px" }}
										/>
										<Lable text="??????; ????????????; ?????????5;" error={errors.HeaderData1__landRatioNumerator} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											??????????????????
										</Typography>
										<TextField
											fullWidth
											type="number"
											value={data.HeaderData1__landRatioDenominator}
											onChange={(event) => setData({ ...data, HeaderData1__landRatioDenominator: event.target.value })}
											sx={{ width: "128px" }}
										/>
										<Lable text="??????; ????????????; ?????????5;" error={errors.HeaderData1__landRatioDenominator} />
									</Box>
								</Stack>
							</Group>
							<Group title="????????????" error={errors.HeaderData1__LandPrice1 | errors.HeaderData1__BuildingPrice1 | errors.HeaderData1__landAndBuildingPrice}>
								<Stack spacing="20px">
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????
										</Typography>
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__LandPrice1}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__LandPrice1: event.target.value })}
											/>
											<Typography variant="rg16">??????</Typography>
										</Stack>
										<Lable text="??????; ????????????; 0~99999;" error={errors.HeaderData1__LandPrice1} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????
										</Typography>
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__BuildingPrice1}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__BuildingPrice1: event.target.value })}
											/>
											<Typography variant="rg16">??????</Typography>
										</Stack>
										<Lable text="??????; ????????????; 0~99999;" error={errors.HeaderData1__BuildingPrice1} />
									</Box>
									<Box width="100%">
										<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
											????????????
										</Typography>
										<Stack direction="row" alignItems="center" spacing={1}>
											<TextField
												type="number"
												placeholder="0"
												value={data.HeaderData1__landAndBuildingPrice}
												fullWidth
												sx={{ width: "156px" }}
												onChange={(event) => setData({ ...data, HeaderData1__landAndBuildingPrice: event.target.value })}
											/>
											<Typography variant="rg16">??????</Typography>
										</Stack>
										<Lable text="??????; ????????????; 0~99999;" error={errors.HeaderData1__landAndBuildingPrice} />
									</Box>
								</Stack>
							</Group>
						</Box>
					</Group>
					<Group title="????????????">
						<Box sx={{ borderRadius: "4px", boxShadow: theme.effectStyle.outerMin, border: `1px solid ${theme.palette.primary.lighter}` }}>
							<Group title="??????????????????????????????" error={errors.HeaderData1__personOccupancy}>
								<Choose value={data.HeaderData1__personOccupancy} config={personOccupancyEnum} onClick={(newValue) => setData({ ...data, HeaderData1__personOccupancy: newValue })} />
								<Lable text="??????" error={errors.HeaderData1__personOccupancy} />
							</Group>
							<Group title="???????????????" error={errors.HeaderData1__partnerUmu}>
								<Choose value={data.HeaderData1__partnerUmu} config={partnerUmuEnum} onClick={(newValue) => setData({ ...data, HeaderData1__partnerUmu: newValue })} />
								<Lable text="??????" error={errors.HeaderData1__partnerUmu} />
							</Group>
							<Group title="????????????" error={errors.HeaderData1__numOfFamily}>
								<Box width="100%">
									<Stack direction="row" alignItems="center" spacing={1}>
										<TextField
											type="number"
											value={data.HeaderData1__numOfFamily}
											fullWidth
											sx={{ width: "156px" }}
											onChange={(event) => setData({ ...data, HeaderData1__numOfFamily: event.target.value })}
										/>
										<Typography variant="rg16">???</Typography>
									</Stack>
									<Lable text="??????; ????????????; 0~6???;" error={errors.HeaderData1__numOfFamily} />
								</Box>
								{data.HeaderData1__numOfFamily && (
									<Box width="100%" mt="20px">
										<Stack spacing="20px">
											{data.DetailData2.map((item, index) => (
												<Sections key={index} title={`??????????????????????????? ${index + 1}`} handleDelete={() => handleDel(index)}>
													<Group title="??????" error={detailErrors(index).relationshipOfFamily}>
														<Select
															value={item.relationshipOfFamily}
															config={relationshipEnum}
															onChange={(newValue) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData2));
																temp[index].relationshipOfFamily = newValue;
																setData({ ...data, DetailData2: temp });
															}}
														/>
														<Lable text="??????" error={detailErrors(index).relationshipOfFamily} />
													</Group>
													<Group title="?????????????????????????????????" error={detailErrors(index).cohabitationUmu}>
														<Choose
															value={item.cohabitationUmu}
															config={cohabitationUmuEnum}
															onClick={(newValue) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData2));
																temp[index].cohabitationUmu = newValue;
																setData({ ...data, DetailData2: temp });
															}}
														/>
														<Lable text="??????" error={detailErrors(index).cohabitationUmu} />
													</Group>
													<Group
														title="??????"
														error={
															detailErrors(index).kanaLastNameOfFamily |
															detailErrors(index).kanaFirstNameOfFamily |
															detailErrors(index).kanjiLastNameOfFamily |
															detailErrors(index).kanjiFirstNameOfFamily
														}
													>
														<Stack spacing="20px">
															<Box width="100%">
																<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
																	????????????
																</Typography>
																<TextField
																	type="text"
																	value={item.kanaLastNameOfFamily}
																	fullWidth
																	onChange={(event) => {
																		const temp = JSON.parse(JSON.stringify(data.DetailData2));
																		temp[index].kanaLastNameOfFamily = event.target.value;
																		setData({ ...data, DetailData2: temp });
																	}}
																/>
																<Lable text="??????; ????????????; ?????????48;" error={detailErrors(index).kanaLastNameOfFamily} />
															</Box>
															<Box width="100%">
																<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
																	????????????
																</Typography>
																<TextField
																	type="text"
																	value={item.kanaFirstNameOfFamily}
																	fullWidth
																	onChange={(event) => {
																		const temp = JSON.parse(JSON.stringify(data.DetailData2));
																		temp[index].kanaFirstNameOfFamily = event.target.value;
																		setData({ ...data, DetailData2: temp });
																	}}
																/>
																<Lable text="??????; ????????????; ?????????48;" error={detailErrors(index).kanaFirstNameOfFamily} />
															</Box>
															<Box width="100%">
																<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
																	????????????
																</Typography>
																<TextField
																	type="text"
																	value={item.kanjiLastNameOfFamily}
																	fullWidth
																	onChange={(event) => {
																		const temp = JSON.parse(JSON.stringify(data.DetailData2));
																		temp[index].kanjiLastNameOfFamily = event.target.value;
																		setData({ ...data, DetailData2: temp });
																	}}
																/>
																<Lable text="??????; ????????????; ?????????48;" error={detailErrors(index).kanjiLastNameOfFamily} />
															</Box>
															<Box width="100%">
																<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
																	????????????
																</Typography>
																<TextField
																	type="text"
																	value={item.kanjiFirstNameOfFamily}
																	fullWidth
																	onChange={(event) => {
																		const temp = JSON.parse(JSON.stringify(data.DetailData2));
																		temp[index].kanjiFirstNameOfFamily = event.target.value;
																		setData({ ...data, DetailData2: temp });
																	}}
																/>
																<Lable text="??????; ????????????; ?????????48;" error={detailErrors(index).kanjiFirstNameOfFamily} />
															</Box>
														</Stack>
													</Group>
													<Group title="??????" error={detailErrors(index).familyInfogndrType}>
														<Choose
															value={item.familyInfogndrType}
															config={gndrEnum}
															onClick={(newValue) => {
																console.log(newValue);
																const temp = JSON.parse(JSON.stringify(data.DetailData2));
																temp[index].familyInfogndrType = newValue;
																setData({ ...data, DetailData2: temp });
															}}
														/>
														<Lable text="??????" error={detailErrors(index).familyInfogndrType} />
													</Group>
													<Group title="????????????" error={detailErrors(index).familyInfoBirthDate}>
														<YmdPicker
															value={item.familyInfoBirthDate}
															onChange={(newValue) => {
																const temp = JSON.parse(JSON.stringify(data.DetailData2));
																temp[index].familyInfoBirthDate = newValue;
																setData({ ...data, DetailData2: temp });
															}}
														/>
														<Lable text="??????; ??????????????????; yyyy/mm/dd;" error={detailErrors(index).familyInfoBirthDate} />
													</Group>
												</Sections>
											))}
										</Stack>
									</Box>
								)}
								<Button variant="contained" fullWidth size="small" color="primary" sx={{ my: "20px" }} onClick={() => handleAdd()}>
									??????????????????????????? ???
								</Button>
							</Group>
						</Box>
					</Group>
				</Box>
			</Container>
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate(link)} handleNext={() => navigate("/case/create/7")} />
		</Root>
	);
}
