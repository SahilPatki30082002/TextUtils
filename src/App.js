import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState('white');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const changeColorBg = (color) => {
    setBgColor(color);
    document.body.style.backgroundColor = `${bgColor}`;
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

    // setInterval(() => {
    //   document.title = "Haakuna";
    // }, 1500);
  
    // setInterval(() => {
    //   document.title = "Matata";
    // }, 2000);
  
  return (
    <>
      < Router >
        <Navbar title="TextUtils" mode={mode} toggle={toggleMode} toggleSwitchText={modeText} changeColorBg={changeColorBg} />
        <Alert alert={alert} />
        {/* <About/> */}
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} title="Enter your text" mode={mode} />
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
