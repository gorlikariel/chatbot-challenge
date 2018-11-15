import { createMuiTheme } from '@material-ui/core/styles';
export const C1 = '#314354';
export const C2 = '#8ea9c3';
export const C3 = '#adc3d9';
export const C4 = '#e2edf9';
export const SO = '#00000066';
export const PG = 'linear-gradient(to right, #7c9dfb, #a388fa)';
export const PCH = '#a388fa';
export const PCL = '#ededff';
export const PWH = '#ffffff';
export const PWL = '#fafafa';
export const G2 = 'linear-gradient(to right, #66bbf7, #6696fb)';
export const G3 = 'linear-gradient(to right, #77b4e4, #4ce49e)';
export const BLK = 'black';
const fonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Helvetica Neue"',
  '"Segoe UI"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
  'Roboto'
].join(',');
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: fonts
  },
  overrides: {
    MuiTypography: {
      root: {
        userSelect: 'none'
      },
      h4: {
        fontWeight: 'normal',
        fontSize: '1.875rem',
        letterSpacing: '1px',
        fontFamily: fonts,
        color: C1,
        lineHeight: 1.13
      },
      h2: {
        fontSize: '16px',
        fontWeight: 500,
        fontFamily: fonts,
        letterSpacing: '0.0300rem'
      },
      h1: {
        fontSize: '23px',
        fontWeight: '600',
        letterSpacing: '1.6px',
        fontFamily: fonts,
        lineHeight: '2em'
      },
      h6: {
        fonSize: '24px',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 1.21,
        letterSpacing: '0.3px',
        fontFamily: fonts
      },
      subtitle1: {
        fontSize: '15px',
        fontWeight: 300,
        letterSpacing: '0.2px',
        fontFamily: fonts,
        lineHeight: '1.5em'
      },
      body1: {
        color: C1,
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '0.2px',
        fontFamily: fonts,
        lineHeight: '1.5em'
      },
      body2: {
        color: C1,
        fontSize: '13px',
        fontWeight: 'normal',
        letterSpacing: '0.2px',
        fontFamily: fonts,
        lineHeight: '1.5em'
      }
    }
  }
});
export default theme;
