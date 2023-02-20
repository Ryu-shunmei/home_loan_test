import PropTypes from "prop-types";
// @mui
import { CssBaseline } from "@mui/material";
import { createTheme, StyledEngineProvider, ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
//
import palette from "./palette";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import componentsOverride from "./overrides";
// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
	children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
	const theme = createTheme({
		palette: palette,
		typography: typography,
		shape: { borderRadius: 4 },
		effectStyle: {
			shadow: "2px 3px 0px rgba(0, 0, 0, 0.25)",
			inner: "inset 0px 4px 6px rgba(44, 54, 156, 0.1)",
			outer: "0px 0px 15px rgba(60, 72, 196, 0.1)",
			outerMin: "0px 0px 15px rgba(60, 72, 196, 0.1)",
		},
	});

	theme.components = componentsOverride(theme);

	return (
		<StyledEngineProvider injectFirst>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles />
				{children}
			</MUIThemeProvider>
		</StyledEngineProvider>
	);
}
