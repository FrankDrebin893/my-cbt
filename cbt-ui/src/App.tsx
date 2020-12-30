import React from 'react';
import { NavBar } from './components/navigation/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider as MatUiThemeProvider } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import theme from './lib/theme/StyledComponentsTheme';
import { Auth0Provider } from "@auth0/auth0-react";
import { Exercises } from './containers/Exercises';
import { NotFoundPage } from './pages/NotFoundPage';
import { Home } from './containers/Home';
import { RationalResponseContainer } from './containers/RationalResponseContainer';
import { RationalResponseHomePage } from './pages/RationalResponseHomePage';
import store from './store';
import { Provider } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute';
import { UserProfilePage } from './pages/UserProfilePage';
import { GlobalStyle, AppBody } from './components/styled/SharedCss';
import CustomMuiTheme from './lib/theme/MuiTheme';

function App() {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
        redirectUri={window.location.origin}
      >
        <Router>
          <GlobalStyle />
          <MatUiThemeProvider theme={CustomMuiTheme}>
            <ThemeProvider theme={theme}>
              <div>
                <header>
                  <NavBar />
                  {/*<Navbar>
                    <NavMenu style={{ float: "left" }}>
                      <StyledLink to="/"><NavMenuElement displayHover>Home</NavMenuElement></StyledLink>
                      <StyledLink to="/exercises"><NavMenuElement displayHover>Exercises</NavMenuElement></StyledLink>
                      <StyledLink to="/statistics"><NavMenuElement displayHover>Statistics</NavMenuElement></StyledLink>
                      <StyledLink to="/profile"><NavMenuElement displayHover>Profile</NavMenuElement></StyledLink>
                    </NavMenu>
                    <NavMenu style={{ float: "right" }}>
                      <NavMenuElement><LoginButton /></NavMenuElement>
                    </NavMenu>
                  </Navbar>*/}
                </header>
              </div>
              <AppBody>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/exercises" component={Exercises} />
                  <ProtectedRoute exact path="/exercises/rational-response" component={RationalResponseHomePage} />
                  <ProtectedRoute exact path="/exercises/rational-response/new" component={RationalResponseContainer} />
                  <ProtectedRoute exact path="/exercises/rational-response/:id" component={RationalResponseContainer} />
                  <Route path="/statistics" component={() => <div>Statistics</div>} />
                  <Route path="/profile" component={UserProfilePage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </AppBody>
            </ThemeProvider>
          </MatUiThemeProvider>
        </Router>
      </Auth0Provider>
    </Provider>
  );
}

export default App;
