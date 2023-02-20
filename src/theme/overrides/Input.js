export default function Input(theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          "& svg": {
            color: "#6B70F0",
          },
          "&.Mui-disabled": {
            "& svg": {
              color: "#6B70F0",
            },
          },
        },
        input: {
          height: "12px",
          "&::placeholder": {
            opacity: 1,
            fontWeight: 300,
            fontSize: "16px",
            lineHeight: "100%",
            color: "#BDBDBD",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#BDBDBD",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          textAlign: "center",
          color: "#333333",
          height: "48px",
          backgroundColor: "#FFFFFFF",

          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 1,
            borderColor: "#E4E7FF",
            boxShadow: "inset 0px 4px 6px rgba(44, 54, 156, 0.1)",
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
              borderColor: "#6B70F0",
            },
          },
          "&.Mui-focused": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderWidth: 1.5,
              borderColor: "#E4E7FF",
            },
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#BABABA",
            },
          },
        },
      },
    },
  };
}
