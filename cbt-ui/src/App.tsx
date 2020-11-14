import React from 'react';
import logo from './logo.svg';
import { Navbar, NavMenu, NavMenuElement, StyledLink } from './components/styled/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <Router>
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
    </Router>
  );
}

export default App;
