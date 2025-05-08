import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    h6: {
      fontWeight: 400,
    },
  },
});

// declare module '@mui/material/styles' {
//   interface TypographyVariants {
//     body3: React.CSSProperties;
//   }

//   // allow configuration using `createTheme`
//   interface TypographyVariantsOptions {
//     body3?: React.CSSProperties;
//   }
// }

// // Update the Typography's variant prop options
// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     body3: true;
//   }
// }
