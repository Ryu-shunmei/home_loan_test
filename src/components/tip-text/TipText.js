// @mui
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function TipText({ text, isError, ...other }) {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontWeight: 500,
        fontSize: "12px",
        color: isError ? theme.palette.error.main : theme.palette.grey[200],
        ...other,
      }}
    >
      ※{text}
    </Typography>
  );
}
