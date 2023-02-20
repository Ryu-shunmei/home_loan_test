// @mui
import { useTheme, alpha } from "@mui/material/styles";
import { Box, AppBar, Toolbar } from "@mui/material";
//
import MilizeLogo from "src/assets/milize_logo.svg";
import Menu from "src/assets/menu.svg";
// ----------------------------------------------------------------------

export default function Header({ transparent }) {
	const theme = useTheme();
	return (
		<AppBar
			sx={{
				boxShadow: "none",
				zIndex: theme.zIndex.appBar + 1,
				backdropFilter: `blur(6px)`,
				backgroundColor: alpha(theme.palette.common.white, transparent ? 0 : 1),
				transition: theme.transitions.create(["height"], { duration: theme.transitions.duration.shorter }),
				height: 60,
			}}
		>
			<Toolbar sx={{ height: 1, px: 20 }}>
				<Box component="img" src={MilizeLogo} height="20px" />

				<Box sx={{ flexGrow: 1 }} />

				<Box component="img" src={Menu} height="18px" />
			</Toolbar>
		</AppBar>
	);
}
