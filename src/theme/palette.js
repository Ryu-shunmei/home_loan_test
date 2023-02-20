import { useTheme, alpha } from "@mui/material/styles";
// ----------------------------------------------------------------------

const GREY = {
	50: "#FAFAFA",
	100: "#F2F2F2",
	150: "#E6E6E6",
	200: "#D0D0D0",
	250: "#9F9F9F",
};

const PRIMARY = {
	main: "#6B70F0",
	light: "#A9AFEA",
	lighter: "#E4E7FF",
};

const SECONDARY = {
	main: "#B8D3F3",
};

const INFO = {
	main: "#5FACFF",
};

const SUCCESS = {
	main: "#4EE5AF",
};

const WARNING = {
	main: "#FFD02C",
};

const ERROR = {
	main: "#E54E75",
};

const palette = {
	common: { black: "#000000", white: "#FFFFFF" },
	primary: PRIMARY,
	secondary: SECONDARY,
	info: INFO,
	success: SUCCESS,
	warning: WARNING,
	error: ERROR,
	grey: GREY,
	divider: "#BDBDBD",
	text: {
		primary: "#333333",
		secondary: "#637381",
		disabled: GREY[150],
		neutral: "#B4C2D0",
	},
	background: {
		default: "#FFFFFF",
		paper: "#FFFFFF",
		gray: "#FAFAFA",
		neutral: "#F2F9FF",
		gradation: "linear-gradient(180deg, #F9F1F7 0%, #B8D3F3 100%)",
	},
};

export default palette;
