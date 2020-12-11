import React from 'react';
import { Navbar, NavMenu, NavMenuElement, StyledLink } from './components/styled/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Auth0Provider } from "@auth0/auth0-react";
import { Exercises } from './containers/Exercises';
import { NotFoundPage } from './NotFound';
import { Home } from './containers/Home';
import { RationalResponseContainer } from './containers/RationalResponseContainer';
import { RationalResponseHome } from './containers/RationalResponseHome';
import store from './store';
import { Provider } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute';
import { LoginButton } from './components/LoginButton';
import { UserProfilePage } from './containers/UserProfilePage';
import { GlobalStyle, AppBody } from './components/styled/SharedCss';

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
          <ThemeProvider theme={theme}>
            <div>
              <header>
                <Navbar>
                  <NavMenu style={{ float: "left" }}>
                    <StyledLink to="/"><NavMenuElement displayHover>Home</NavMenuElement></StyledLink>
                    <StyledLink to="/exercises"><NavMenuElement displayHover>Exercises</NavMenuElement></StyledLink>
                    <StyledLink to="/statistics"><NavMenuElement displayHover>Statistics</NavMenuElement></StyledLink>
                    <StyledLink to="/profile"><NavMenuElement displayHover>Profile</NavMenuElement></StyledLink>
                  </NavMenu>
                  <NavMenu style={{ float: "right" }}>
                    <NavMenuElement><LoginButton /></NavMenuElement>
                  </NavMenu>
                </Navbar>
              </header>
            </div>
            <AppBody>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/exercises" component={Exercises} />
                <ProtectedRoute exact path="/exercises/rational-response" component={RationalResponseHome} />
                <ProtectedRoute exact path="/exercises/rational-response/new" component={RationalResponseContainer} />
                <ProtectedRoute exact path="/exercises/rational-response/:id" component={RationalResponseContainer} />
                <Route path="/statistics" component={() => <div>Statistics</div>} />
                <Route path="/profile" component={UserProfilePage} />
                <Route component={NotFoundPage} />
              </Switch>
            </AppBody>
          </ThemeProvider>
        </Router>
      </Auth0Provider>
    </Provider>
  );
}

export default App;
