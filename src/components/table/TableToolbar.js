import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Button, Toolbar, Tooltip, IconButton, Typography } from "@mui/material";
// components
import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

export default function TableToolbar({ numSelected }) {
	const theme = useTheme();
	const create = "/case/create/1";
	return (
		<Toolbar
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: (theme) => theme.palette.primary.main,
				}),
				color: theme.palette.common.white,
			}}
		>
			{numSelected > 0 ? (
				<Typography sx={{ flex: "1 1 100%" }} color="inherit" variant="subtitle1" component="div">
					{numSelected} 件を選択しました。
				</Typography>
			) : (
				<Typography sx={{ flex: "1 1 100%" }} variant="mainTitle" component="div" color={theme.palette.common.black}>
					テーストケース履歴
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton>
						<Iconify color={theme.palette.common.white} icon="eva:trash-2-outline" />
					</IconButton>
				</Tooltip>
			) : (
				<Button component={RouterLink} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} sx={{ width: "120px" }} to={create}>
					新規
				</Button>
			)}
		</Toolbar>
	);
}
