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
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { RationalResponseContainer } from './containers/RationalResponseContainer';
import { RationalResponseHomePage } from './pages/RationalResponseHomePage';
import store from './store';
import { Provider } from 'react-redux';
import ProtectedRoute from './components/ProtectedRoute';
import { UserProfilePage } from './pages/UserProfilePage';
import { GlobalStyle, AppBody } from './components/styled/SharedCss';
import CustomMuiTheme from './lib/theme/MuiTheme';
import { Container } from './components/styled/Layout';
import JournalHomePage from './pages/JournalHomePage';

function App() {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
        redirectUri={window.location.origin}
        audience={process.env.REACT_APP_BACKEND_BASE_URI}
      >
        <Router>
          <GlobalStyle />
          <MatUiThemeProvider theme={CustomMuiTheme}>
            <ThemeProvider theme={theme}>
              <AppBody>
                <div>
                  <header>
                    <NavBar />
                  </header>
                </div>
                <Container style={{paddingTop: '15px'}}>
                  <Switch>
                    <Route exact path="/" component={HomePage} />
                    <ProtectedRoute exact path="/exercises/rational-response" component={RationalResponseHomePage} />
                    <ProtectedRoute exact path="/exercises/rational-response/new" component={RationalResponseContainer} />
                    <ProtectedRoute exact path="/exercises/rational-response/:id" component={RationalResponseContainer} />
                    <ProtectedRoute exact path="/journal" component={JournalHomePage} />
                    <Route path="/statistics" component={() => <div>Statistics</div>} />
                    <Route path="/profile" component={UserProfilePage} />
                    <Route component={NotFoundPage} />
                  </Switch>
                </Container>
              </AppBody>
            </ThemeProvider>
          </MatUiThemeProvider>
        </Router>
      </Auth0Provider>
    </Provider>
  );
}

export default App;
