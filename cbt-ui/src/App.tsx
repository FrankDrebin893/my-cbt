import React from 'react';
import logo from './logo.svg';
import { Navbar, NavMenu, NavMenuElement } from './components/styled/Navbar';


function App() {
  return (
    <div>
      <header>
        <Navbar>
          <NavMenu>
            <NavMenuElement>Home</NavMenuElement>
            <NavMenuElement>Exercises</NavMenuElement>
            <NavMenuElement>Statistics</NavMenuElement>
            <NavMenuElement>Profile</NavMenuElement>
          </NavMenu>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
