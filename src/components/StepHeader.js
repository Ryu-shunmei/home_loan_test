import { useNavigate } from "react-router-dom";
// @mui
import { Box, Grid, Stack, Typography, IconButton } from "@mui/material";
import { alpha, useTheme, styled } from "@mui/material/styles";
// components
import Iconify from "src/components/iconify";
// settings
import { configAll, configBase } from "src/settings/stepHeaderConfig";
// hooks
import useLocalStorage from "src/hooks/useLocalStorage";
import { useEffect, useMemo, useState } from "react";
// ----------------------------------------------------------------------

export default function StepHeader({ step }) {
	const theme = useTheme();
	const navigate = useNavigate();
	const [step1, _] = useLocalStorage("stepData01", {
		HeaderData1__IncomeAdditionType1: null,
		HeaderData1__pairLoanPresence: null,
	});
	const [stepConfig, setStepConfig] = useState([]);
	useEffect(() => {
		if ((step1.HeaderData1__IncomeAdditionType1 === 1) | (step1.HeaderData1__pairLoanPresence === 1)) {
			setStepConfig(configAll);
		} else {
			setStepConfig(configBase);
		}
	}, [step1]);

	return (
		<Box
			sx={{
				width: 1,
				paddingX: 0,
				position: "fixed",
				marginTop: "60px",
				zIndex: theme.zIndex.appBar + 1,
				background: theme.palette.primary.lighter,
				borderTop: `1px solid ${theme.palette.primary.lighter}`,
			}}
		>
			<Grid container spacing="1px">
				{stepConfig.map((item, index) => (
					<Grid key={item.id} item xs={12 / stepConfig.length}>
						<Box
							sx={{
								display: "flex",
								width: "100%",
								height: "64px",
								alignItems: "center",
								pl: "5px",
								background: step < item.id ? theme.palette.common.white : step === item.id ? theme.palette.primary.main : theme.palette.primary.lighter,
								color: step < item.id ? theme.palette.primary.main : step === item.id ? theme.palette.common.white : theme.palette.primary.light,
								borderRight: step > item.id + 1 ? `1px solid ${theme.palette.common.white}` : "none",
							}}
						>
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Box>
									<Stack direction="column" justifyContent="center" alignItems="flex-start" spacing={1}>
										<Typography variant="b14">STEP0{index + 1}</Typography>

										<Stack direction="row" justifyContent="center" alignItems="center" spacing="3px">
											<Iconify icon={item.iconify} height="16px" width="16px" />
											<Typography
												sx={{
													fontWeight: 500,
													fontSize: "12px",
												}}
											>
												{item.lable}
											</Typography>
											<Box sx={{ flexGrow: 1 }} />
										</Stack>
									</Stack>
								</Box>
								<Box sx={{ flexGrow: 1 }} />
								{step > item.id && (
									<IconButton onClick={() => navigate(`/case/create/${item.id}`)}>
										<Iconify icon="carbon:edit" height="24px" width="24px" color={theme.palette.primary.main} />
									</IconButton>
								)}
							</Stack>
						</Box>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
