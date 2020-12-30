import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  darken,
} from '@material-ui/core/styles';

const CustomMuiTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#0f74d9',
      },
    },
});
  
export default CustomMuiTheme;