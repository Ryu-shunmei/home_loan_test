// @mui
import { Box, Stack, Button, Toolbar, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// components
import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

export default function StepFooter({ handlePre, handleNext, hasErorr = true }) {
	const theme = useTheme();
	return (
		<Toolbar
			sx={{
				position: "fixed",
				top: "auto",
				bottom: 0,
				width: 1,
				bgcolor: theme.palette.common.white,
			}}
		>
			<Container maxWidth="sm">
				<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
					<Button onClick={handlePre} sx={{ height: "40px", borderRadius: "14px" }}>
						<Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
							<Box
								sx={{
									width: "20px",
									height: "20px",
									background: theme.palette.primary.lighter,

									border: `1px solid ${theme.palette.primary.main}`,
									borderRadius: "50%",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Iconify icon="carbon:chevron-left" height="20px" />
							</Box>
							<Typography
								sx={{
									fontWeight: "500",
									fontSize: "14px",
									color: theme.palette.primary.main,
								}}
							>
								もどる
							</Typography>
						</Stack>
					</Button>

					<Box sx={{ flexGrow: 1 }} />
					<Button
						variant="contained"
						color="primary"
						sx={{
							width: "240px",
							height: "40px",
							borderRadius: "14px",
						}}
						disabled={hasErorr}
						onClick={handleNext}
					>
						次へ
					</Button>
				</Stack>
			</Container>
		</Toolbar>
	);
}
