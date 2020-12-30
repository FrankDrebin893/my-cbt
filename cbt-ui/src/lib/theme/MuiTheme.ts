import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  darken,
} from '@material-ui/core/styles';

const CustomMuiTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#6772e5',
      },
    },
});
  
export default CustomMuiTheme;