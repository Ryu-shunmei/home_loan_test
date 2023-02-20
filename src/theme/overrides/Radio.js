// mui
import { Box } from "@mui/material";
//
import RadioIcon from "src/assets/radio_outline.svg";
import RadioCheckedIcon from "src/assets/radio_checked.svg";

// ----------------------------------------------------------------------

export default function Radio(theme) {
  return {
    MuiRadio: {
      defaultProps: {
        icon: <Box component="img" src={RadioIcon} height="24px" />,
        checkedIcon: <Box component="img" src={RadioCheckedIcon} height="24px" />,
      },

      styleOverrides: {
        root: ({ ownerState }) => ({
          padding: theme.spacing(1),
          ...(ownerState.size === 'small' && {
            '& svg': { width: 24, height: 24 },
          }),
          ...(ownerState.size === 'medium' && {
            '& svg': { width: 24, height: 24 },
          }),
        }),
      },
    },
  };
}
