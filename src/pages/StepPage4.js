import * as Yup from "yup";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { Box, Stack, Container, Typography, TextField } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
// hooks
import useLocalStorage from "src/hooks/useLocalStorage";
// layout
import Layout from "src/layout";
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
	HeaderData1__kanaCstmrName2: "",
	HeaderData1__kanaCstmrFirstName2: "",
	HeaderData1__kanjiCstmrLastName2: "",
	HeaderData1__kanjiCstmrFirstName2: "",
	HeaderData1__gndrType2: "",
	HeaderData1__birthDate2: "",
	HeaderData1__pstlCode2: "",
	HeaderData1__kanaAddrPrefecture2: "",
	HeaderData1__kanaAddrCityTownCunty2: "",
	HeaderData1__kanaAddrDtl2: "",
	HeaderData1__kanaAddtlAddr2: "",
	HeaderData1__kanjiAddrPrefecture2: "",
	HeaderData1__kanjiAddrCityTownCunty2: "",
	HeaderData1__kanjiAddrDtl2: "",
	HeaderData1__kanjiAddtlAddr2: "",
	HeaderData1__homePhoneNum2: "",
	HeaderData1__cellularPhoneNum2: "",
	HeaderData1__mailAddress2: "",
	HeaderData1__urgentContactNum2: "",
	HeaderData1__nationality2: "",
};

// ----------------------------------------------------------------------

export default function () {
	const theme = useTheme();
	const navigate = useNavigate();
	const [data, setData] = useLocalStorage("stepData04", initData);

	const errors = {
		HeaderData1__kanaCstmrName2: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaCstmrName2),
		HeaderData1__kanaCstmrFirstName2: !Yup.string().required().max(48).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaCstmrFirstName2),
		HeaderData1__kanjiCstmrLastName2: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__kanjiCstmrLastName2),
		HeaderData1__kanjiCstmrFirstName2: !Yup.string().required().max(48).matches(REGULARS.em).isValidSync(data.HeaderData1__kanjiCstmrFirstName2),
		HeaderData1__gndrType2: !Yup.number().integer().required().isValidSync(data.HeaderData1__gndrType2),
		HeaderData1__birthDate2: !Yup.string().required().matches(REGULARS.ymd).isValidSync(data.HeaderData1__birthDate2),

		HeaderData1__pstlCode2: !Yup.string().required().max(8).matches(REGULARS.post_code).isValidSync(data.HeaderData1__pstlCode2),
		HeaderData1__kanaAddtlAddr2: !Yup.string().required().max(138).matches(REGULARS.half).isValidSync(data.HeaderData1__kanaAddtlAddr2),
		HeaderData1__kanjiAddtlAddr2: !Yup.string().required().max(99).matches(REGULARS.em).isValidSync(data.HeaderData1__kanjiAddtlAddr2),

		HeaderData1__cellularPhoneNum2: data.HeaderData1__homePhoneNum2 === "" ? !Yup.string().matches(REGULARS.mobile_phone).isValidSync(data.HeaderData1__cellularPhoneNum2) : false,
		HeaderData1__homePhoneNum2: data.HeaderData1__cellularPhoneNum2 === "" ? !Yup.string().matches(REGULARS.home_phone).isValidSync(data.HeaderData1__homePhoneNum2) : false,

		HeaderData1__urgentContactNum2:
			data.HeaderData1__urgentContactNum2 === ""
				? false
				: !Yup.string().matches(REGULARS.mobile_phone).isValidSync(data.HeaderData1__urgentContactNum2) | !Yup.string().matches(REGULARS.home_phone).isValidSync(data.HeaderData1__urgentContactNum2),

		HeaderData1__mailAddress2: !Yup.string().required().max(128).email().isValidSync(data.HeaderData1__mailAddress2),
		HeaderData1__nationality2: data.HeaderData1__nationality2 === "" ? false : !Yup.number().integer().isValidSync(data.HeaderData1__nationality2),
	};

	const hasErorr = useMemo(() => {
		const temp = Object.values(errors).filter((item) => item === true);
		console.log(temp);
		console.log(errors);
		return temp.length > 0;
	}, [data]);

	return (
		<Root>
			<StepHeader step={4} />
			<Container maxWidth="md">
				<Box sx={{ boxShadow: theme.effectStyle.outer, background: theme.palette.background.gray, paddingTop: "144px", paddingBottom: "120px", border: `1px solid ${theme.palette.primary.lighter}` }}>
					<WlcTitle text="連帯保証人について教えてください。" />
					<Group title="名前" error={errors.HeaderData1__kanaCstmrName2 | errors.HeaderData1__kanaCstmrFirstName2 | errors.HeaderData1__kanjiCstmrLastName2 | errors.HeaderData1__kanjiCstmrFirstName2}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　姓
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanjiCstmrLastName2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanjiCstmrLastName2: event.target.value })} />
								<Lable text="必須; 全角文字; サイズ48;" error={errors.HeaderData1__kanjiCstmrLastName2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　名
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanjiCstmrFirstName2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanjiCstmrFirstName2: event.target.value })} />
								<Lable text="必須; 全角文字; サイズ48;" error={errors.HeaderData1__kanjiCstmrFirstName2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　姓
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanaCstmrName2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanaCstmrName2: event.target.value })} />
								<Lable text="必須; 半角文字; サイズ48;" error={errors.HeaderData1__kanaCstmrName2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　名
								</Typography>
								<TextField type="text" value={data.HeaderData1__kanaCstmrFirstName2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__kanaCstmrFirstName2: event.target.value })} />
								<Lable text="必須; 半角文字; サイズ48;" error={errors.HeaderData1__kanaCstmrFirstName2} />
							</Box>
						</Stack>
					</Group>
					<Group title="性別" error={errors.HeaderData1__gndrType2}>
						<Choose value={data.HeaderData1__gndrType2} config={gndrEnum} onClick={(newValue) => setData({ ...data, HeaderData1__gndrType2: newValue })} />
						<Lable text="必須" error={errors.HeaderData1__gndrType2} />
					</Group>
					<Group title="生年月日" error={errors.HeaderData1__birthDate2}>
						<YmdPicker value={data.HeaderData1__birthDate2} onChange={(newValue) => setData({ ...data, HeaderData1__birthDate2: newValue })} />
						<Lable text="必須; 半角数字記号; yyyy/mm/dd;" error={errors.HeaderData1__birthDate2} />
					</Group>
					<Group title="国籍" error={errors.HeaderData1__nationality2}>
						<Choose value={data.HeaderData1__nationality2} config={nationalityEnum} onClick={(newValue) => setData({ ...data, HeaderData1__nationality2: newValue })} />
						<Lable text="必須" error={errors.HeaderData1__nationality2} />
					</Group>
					<Group title="現住所" error={errors.HeaderData1__pstlCode2 | errors.HeaderData1__kanaAddtlAddr2 | errors.HeaderData1__kanjiAddtlAddr2}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									郵便番号
								</Typography>
								<PstlCode
									value={data.HeaderData1__pstlCode2}
									fullWidth
									onChange={(newValue) => setData({ ...data, HeaderData1__pstlCode2: newValue })}
									setResults={(results) => {
										setData({
											...data,
											HeaderData1__kanaAddrPrefecture2: results.kana1,
											HeaderData1__kanaAddrCityTownCunty2: results.kana2,
											HeaderData1__kanaAddrDtl2: results.kana3,
											HeaderData1__kanjiAddrPrefecture2: results.address1,
											HeaderData1__kanjiAddrCityTownCunty2: results.address2,
											HeaderData1__kanjiAddrDtl2: results.address3,
										});
									}}
								/>
								<Lable text="必須; 半角数字記号; サイズ8; 999-9999;" error={errors.HeaderData1__pstlCode2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　都道府県
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiAddrPrefecture2} sx={{ width: "148px" }} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　市区郡
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiAddrCityTownCunty2} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　町村字丁目
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiAddrDtl2} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									漢字　補足住所
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanjiAddtlAddr2} onChange={(event) => setData({ ...data, HeaderData1__kanjiAddtlAddr2: event.target.value })} />
								<Lable text="必須; 全角文字; サイズ99;" error={errors.HeaderData1__kanjiAddtlAddr2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　都道府県
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanaAddrPrefecture2} sx={{ width: "148px" }} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　市区郡
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanaAddrCityTownCunty2} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　町村字丁目
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanaAddrDtl2} />
								<Lable text="郵便番号入力すると自動的に上記項目が表示されます。" />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									カナ　補足住所
								</Typography>
								<TextField fullWidth value={data.HeaderData1__kanaAddtlAddr2} onChange={(event) => setData({ ...data, HeaderData1__kanaAddtlAddr2: event.target.value })} />
								<Lable text="必須; 半角文字; サイズ138;" error={errors.HeaderData1__kanaAddtlAddr2} />
							</Box>
						</Stack>
					</Group>
					<Group title="電話番号" error={errors.HeaderData1__cellularPhoneNum2 | errors.HeaderData1__homePhoneNum2}>
						<Stack spacing="20px">
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									携帯電話（090-9999-9999）
								</Typography>
								<TextField
									value={data.HeaderData1__cellularPhoneNum2}
									fullWidth
									onChange={(event) => setData({ ...data, HeaderData1__cellularPhoneNum2: event.target.value })}
									sx={{ width: "228px" }}
								/>
								<Lable text="自宅電話番号/携帯電話番号 いずれか必須; 半角数字記号; サイズ13;" error={errors.HeaderData1__cellularPhoneNum2} />
							</Box>
							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									携帯電話（03-9999-9999）
								</Typography>
								<TextField value={data.HeaderData1__homePhoneNum2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__homePhoneNum2: event.target.value })} sx={{ width: "228px" }} />
								<Lable text="自宅電話番号/携帯電話番号 いずれか必須; 半角数字記号; サイズ12;" error={errors.HeaderData1__homePhoneNum2} />
							</Box>

							<Box width="100%">
								<Typography component={Box} variant="rg14" sx={{ mb: "5px", pl: "2px" }}>
									緊急連絡先
								</Typography>
								<TextField
									value={data.HeaderData1__urgentContactNum2}
									fullWidth
									onChange={(event) => setData({ ...data, HeaderData1__urgentContactNum2: event.target.value })}
									sx={{ width: "228px" }}
								/>
								<Lable text="任意; 半角数字記号; サイズ12 / 13;" error={errors.HeaderData1__urgentContactNum2} />
							</Box>
						</Stack>
					</Group>
					<Group title="メールアドレス" error={errors.HeaderData1__mailAddress2}>
						<TextField type="text" value={data.HeaderData1__mailAddress2} fullWidth onChange={(event) => setData({ ...data, HeaderData1__mailAddress2: event.target.value })} />
						<Lable text="必須; 半角数字記号; サイズ128;" error={errors.HeaderData1__mailAddress2} />
					</Group>
				</Box>
			</Container>
			<StepFooter hasErorr={hasErorr} handlePre={() => navigate("/case/create/3")} handleNext={() => navigate("/case/create/5")} />
		</Root>
	);
}
