import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    if(type !== 'warning'){

      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  // var icon = (
  //   <span class="logo">
  //     <a href="/">
  //       <img src="D:\MyWork\Learning_React\React Learning\textutils\public\favicon-16x16.png" height="33" width="120" alt="text here" /></a>
  //   </span>
  // ); 

  return (
    <>

      <Navbar /*logo={icon}*/ title="TextUtils" abtText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter The Text To Analyse" mode={mode} />
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;
