import React from 'react';
import { Navbar, NavMenu, NavMenuElement, StyledLink } from './components/styled/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

function App() {
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };

  const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
      return <div>Loading ...</div>;
    }
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
        <ThemeProvider theme={theme}>
          <div>
            <header>
              <Navbar>
                <NavMenu>
                  <StyledLink to="/"><NavMenuElement>Home</NavMenuElement></StyledLink>
                  <StyledLink to="/exercises"><NavMenuElement>Exercises</NavMenuElement></StyledLink>
                  <StyledLink to="/statistics"><NavMenuElement>Statistics</NavMenuElement></StyledLink>
                  <StyledLink to="/profile"><NavMenuElement>Profile</NavMenuElement></StyledLink>
                  <LoginButton />
                </NavMenu>
              </Navbar>
            </header>
          </div>
          <div>
            <Switch>
              <Route path="/exercises">
                Exercises
            </Route>
              <Route path="/statistics">
                Statistics
            </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                Home
            </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </Auth0Provider>
  );
}

export default App;
