import { BrowserRouter } from "react-router-dom";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ja from "date-fns/locale/ja";
// ----------------------------------------------------------------------
export default function App() {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </LocalizationProvider>
    </BrowserRouter>
  );
}
