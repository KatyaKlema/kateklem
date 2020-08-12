import React from 'react';
import logo from './logo.svg';
import Profile from "./components/profile/profile";
import "./app.scss";
import { Helmet } from 'react-helmet'
function App() {
  return (
    <div className="App">
        <link rel="shortcut icon" href="star.png" />
        <Helmet>
          <title>{"Kate Klem"}</title>
        </Helmet>
        <Profile/>
    </div>
  );
}

export default App;
