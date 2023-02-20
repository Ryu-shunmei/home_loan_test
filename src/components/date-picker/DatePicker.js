import { useEffect, useState, useMemo } from "react";
// @mui
import { useTheme } from "@mui/material/styles";
import { Stack, Select, MenuItem, Typography } from "@mui/material";

// ----------------------------------------------------------------------

export default function DatePicker({
  maxDate = null,
  minDate = null,
  value,
  onChange,
}) {
  const theme = useTheme();
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const baseYearList = getBaseYearList();
  const baseMonthList = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const baseDayList = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  useEffect(() => {
    if (Boolean(value)) {
      const [y, m, d] = value.split("/");
      setYear(y);
      setMonth(m);
      setDay(d);
    }
  }, [value]);
  const yearList = useMemo(() => {
    let y_list = [...baseYearList];
    if (maxDate !== null) {
      const y = maxDate.split("/")[0];
      y_list = y_list.filter((item) => item <= y);
    }
    if (minDate !== null) {
      const y = minDate.split("/")[0];
      y_list = y_list.filter((item) => item >= y);
    }
    return y_list;
  }, [baseYearList, maxDate, minDate]);

  const monthList = useMemo(() => {
    let m_list = [...baseMonthList];
    if (maxDate !== null) {
      const y = maxDate.split("/")[0];
      const m = maxDate.split("/")[1];
      if (year === y) {
        m_list.filter((item) => item <= m);
      }
    }
    if (minDate !== null) {
      const y = minDate.split("/")[0];
      const m = minDate.split("/")[1];
      m_list.filter((item) => item >= m);
    }
    return m_list;
  }, [baseMonthList, maxDate, minDate]);

  const dayList = useMemo(() => {
    let d_list = [...baseDayList];
    if (maxDate !== null) {
      const y = maxDate.split("/")[0];
      const m = maxDate.split("/")[1];
      const d = maxDate.split("/")[2];
      if (year === y && month === m) {
        d_list = d_list.filter((item) => item <= d);
      }
    }
    if (minDate !== null) {
      const y = minDate.split("/")[0];
      const m = minDate.split("/")[1];
      const d = minDate.split("/")[2];
      if (year === y && month === m) {
        d_list = d_list.filter((item) => item >= d);
      }
    }
    const temp_date = new Date(year, month, 0);
    return d_list.filter((item) => item <= temp_date.getDate());
  }, [year, month, baseDayList, maxDate, minDate]);

  useEffect(() => {
    if (year !== "" && month !== "" && day !== "") {
      onChange(`${year}/${month}/${day}`);
    }
  }, [year, month, day]);

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing="5px"
    >
      <Select
        value={year}
        displayEmpty
        MenuProps={{
          variant: "menu",
          PaperProps: {
            style: {
              maxHeight: 220,
              paddingY: 2,
              boxShadow: "0px 0px 15px rgba(60, 72, 196, 0.1)",
              border: `1px solid ${theme.palette.primary.lighter}`,
              borderColor: "#E4E7FF",
            },
          },
        }}
        sx={{
          width: "148px",
          "& .MuiSelect-select": {
            textAlign: "center",
            color: !Boolean(year)
              ? theme.palette.grey[200]
              : theme.palette.text.primary,
          },
        }}
        onChange={(e) => setYear(e.target.value)}
      >
        {yearList.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: "16px",
        }}
      >
        年
      </Typography>
      <Select
        value={month}
        displayEmpty
        MenuProps={{
          variant: "menu",
          PaperProps: {
            style: {
              maxHeight: 220,
              paddingY: 2,
              boxShadow: "0px 0px 15px rgba(60, 72, 196, 0.1)",
              border: `1px solid ${theme.palette.primary.lighter}`,
              borderColor: "#E4E7FF",
            },
          },
        }}
        sx={{
          width: "74px",
          "& .MuiSelect-select": {
            textAlign: "center",
            color: !Boolean(month)
              ? theme.palette.grey[200]
              : theme.palette.text.primary,
          },
        }}
        onChange={(e) => setMonth(e.target.value)}
      >
        {monthList.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: "16px",
        }}
      >
        月
      </Typography>
      <Select
        value={day}
        displayEmpty
        MenuProps={{
          variant: "menu",
          PaperProps: {
            style: {
              maxHeight: 220,
              paddingY: 2,
              boxShadow: "0px 0px 15px rgba(60, 72, 196, 0.1)",
              border: `1px solid ${theme.palette.primary.lighter}`,
              borderColor: "#E4E7FF",
            },
          },
        }}
        sx={{
          width: "74px",
          "& .MuiSelect-select": {
            textAlign: "center",
            color: !Boolean(day)
              ? theme.palette.grey[200]
              : theme.palette.text.primary,
          },
        }}
        onChange={(e) => setDay(e.target.value)}
      >
        {dayList.map((item) => (
          <MenuItem key={item} value={item} sx={{ textAlign: "center" }}>
            {item}
          </MenuItem>
        ))}
      </Select>
      <Typography
        sx={{
          fontWeight: 300,
          fontSize: "16px",
        }}
      >
        日
      </Typography>
    </Stack>
  );
}

function getBaseYearList(num = 100) {
  const today = new Date();
  let tempYearListBefor = [];
  let tempYearListAfter = [];
  for (let i = 1; i <= 100; i++) {
    tempYearListAfter.push(today.getFullYear() + i);
    tempYearListBefor.push(today.getFullYear() - i);
  }
  let temp = [
    ...tempYearListBefor,
    today.getFullYear(),
    ...tempYearListAfter,
  ].sort((a, b) => a - b);

  return temp;
}
