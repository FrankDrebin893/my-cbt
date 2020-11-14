import React from 'react';
import logo from './logo.svg';
import { Navbar, NavMenu, NavMenuElement, StyledLink } from './components/styled/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from './theme';



function App() {
  return (
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
              </NavMenu>
            </Navbar>
          </header>
        </div>
        <div>
          Hi Cami
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
