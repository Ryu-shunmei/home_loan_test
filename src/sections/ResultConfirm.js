// @mui
import { Box, Typography, Toolbar, Button, Dialog, DialogContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/base";
import CodeView from "react-code-view";
// ----------------------------------------------------------------------

export default function ResultConfirm({ open, body, handleTest, handleReset, handleEdit }) {
	const theme = useTheme();
	return (
		<Dialog fullWidth maxWidth="lg" open={open}>
			<Toolbar
				sx={{
					px: "10px",
					borderBottom: `1px solid ${theme.palette.primary.main}`,
				}}
			>
				<Typography variant="subTitle" sx={{ color: theme.palette.primary.main }}>{`テストケースボディプレビュー`}</Typography>
				<Box sx={{ flexGrow: 1 }} />
				<Button variant="contained" onClick={() => handleTest()}>
					テスト実行する
				</Button>
			</Toolbar>
			<DialogContent>
				<Box height="80vh" width="100%" background={theme.palette.background.gray}>
					<pre>{body}</pre>
				</Box>
			</DialogContent>
			<Toolbar
				sx={{
					px: "10px",
					borderTop: `1px solid ${theme.palette.primary.main}`,
				}}
			>
				<Box sx={{ flexGrow: 1 }} />
				<Button variant="outlined" onClick={() => handleReset()} sx={{ mr: 2 }}>
					破棄
				</Button>
				<Button variant="contained" onClick={() => handleEdit()}>
					修正
				</Button>
			</Toolbar>
		</Dialog>
	);
}
