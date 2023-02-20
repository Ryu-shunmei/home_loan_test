import { Outlet } from "react-router-dom";
// @mui
import { Box } from "@mui/material";
//
import Main from "./Main";
import Header from "./Header";

// ----------------------------------------------------------------------

export default function Layout({ children, transparent = false }) {
	return (
		<>
			<Header transparent={transparent} />
			<Box sx={{ display: { lg: "flex" }, minHeight: { lg: 1 } }}>
				<Main>
					<Outlet />
				</Main>
			</Box>
		</>
	);
}
