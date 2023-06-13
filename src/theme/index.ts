import { createTheme } from '@mui/material/styles'

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    poster: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface TypographyVariants {
    poster: React.CSSProperties;
  }
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 583,
      md: 1000,
      lg: 1366,
      xl: 1600,
    }
  },
  typography: {
    h1: {
      fontFamily: 'PekingDuckDEMO',
      fontSize: '36px',
      fontWeight: 400
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: '24px',
      fontWeight: 600
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: '20px',
      fontWeight: 600
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 600
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: '16px',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: '12px',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 700,
    },
    poster: {
      fontFamily: 'Inter',
      fontSize: '18px',
      fontWeight: 700,
    }
  },
  palette: {
    primary: {
      main: '#566FFE'
    },
    secondary: {
      main: '#183B56'
    },
    neutral: {
      main: '#FF5050',
      contrastText: '#fff',
    },
  },
})