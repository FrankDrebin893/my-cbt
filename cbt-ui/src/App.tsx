import React from 'react';
import { Button, GlobalStyle, Navbar, NavMenu, NavMenuElement, StyledLink } from './components/styled/Lib';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import { RationalResponseExercise } from './containers/RationalResponseExercise';
import { Exercises } from './containers/Exercises';
import { NotFoundPage } from './NotFound';
import { Home } from './containers/Home';
import { AppBody } from './components/Body';
import { RationalResponseContainer } from './containers/RationalResponseContainer';
import { RationalResponseHome } from './containers/RationalResponseHome';
import * as axios from 'axios';

function App() {
  const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
    if (isAuthenticated)
      return <span>Logged in <Button onClick={() => logout()}>Log Out</Button></span>;

    return <Button onClick={() => loginWithRedirect({audience: 'https://localhost:44363'})}>Log In</Button>;
  };

  const Profile = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    (async () => {
      try {
        const token = await getAccessTokenSilently({audience: 'https://localhost:44363'});
        console.log("Token", token);

        axios.default.get('https://localhost:44363/api/RationalResponse/Hello', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }).then(r => console.log(r));

      } catch (e) {
        console.log(e);
      }
    })();

    if (isLoading) {
      return <div>Loading ...</div>;
    }
    console.log(user);
    if (isAuthenticated) {
      return (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>

      );
    }
    else {
      return <div>Not logged in.</div>
    }
  };

  return (
    <Auth0Provider
      domain="dev-x1jd55np.eu.auth0.com"
      clientId="yvzMwGvGoXHT5lPa6sDpjy63YJ9XdJPe"
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
              <Route exact path="/exercises/rational-response" component={RationalResponseHome} />
              <Route exact path="/exercises/rational-response/new" component={RationalResponseContainer} />
              <Route exact path="/exercises/rational-response/:id" component={RationalResponseContainer} />
              <Route path="/statistics" component={() => <div>Statistics</div>} />
              <Route path="/profile" component={Profile} />
              <Route component={NotFoundPage} />
            </Switch>
          </AppBody>
        </ThemeProvider>
      </Router>
    </Auth0Provider>
  );
}

export default App;
