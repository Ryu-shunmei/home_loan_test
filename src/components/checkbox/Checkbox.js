import { useState } from "react";
// @mui
import { Stack, Typography, Checkbox as MuiCheckbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// ----------------------------------------------------------------------

export default function Checkbox({ lable,checked, onChange }) {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing="4px"
    >
      <MuiCheckbox
        checked={checked}
        onChange={onChange}
        inputProps={{ "aria-label": "controlled" }}
      />
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "16px",
          color: theme.palette.primary.main,
        }}
      >
        {lable}
      </Typography>
    </Stack>
  );
}
