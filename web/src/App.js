import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router";
import Home from './pages/Home';
import Users from './pages/Users';
import Navigation from './components/common/Navigation';
import logo from './logo.svg';
import './assets/styles/App.css';

// import { useKeycloak } from "@react-keycloak/web";

function App() {  
  // const { keycloak, initialized } = useKeycloak();
  return (
    <>
      {/* {keycloak?.authenticated ? (
      <> */}
      <Router>
        <div className="App">
          <Navigation />

          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
          <Routes>
            <Route
              path="/"
              element={
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </Router>
      {/* </>
    ) : (
      <button onClick={() => keycloak.login()}>Login</button>
    )} */}
    </>
  );
}

export default App;
