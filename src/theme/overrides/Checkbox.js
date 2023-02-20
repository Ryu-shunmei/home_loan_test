import { Box } from "@mui/material";
import CheckboxIcon from "src/assets/checkbox_outline.svg";
import CheckboxCheckedIcon from "src/assets/checkbox_checked.svg";

// ----------------------------------------------------------------------

export default function Checkbox(theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        icon: <Box component="img" src={CheckboxIcon} height="20px" />,
        checkedIcon: (
          <Box component="img" src={CheckboxCheckedIcon} height="20px" />
        ),
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: theme.spacing(1),
          ...(ownerState.size === "small" && {
            "& svg": { width: 20, height: 20 },
          }),
          ...(ownerState.size === "medium" && {
            "& svg": { width: 20, height: 20 },
          }),
        }),
      },
    },
  };
}
