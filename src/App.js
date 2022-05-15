import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {
//   BrowserRouter,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {

  const [finalMode, setFinalMode] = useState('light');

  // const [mode, setMode] = useState('light');
  // const [blueMode, setBlueMode] = useState('light');
  // const [greenMode, setGreenMode] = useState('light');
  // const [yellowMode, setYellowMode] = useState('light');
  // const [redMode, setRedMode] = useState('light');


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    if (type !== 'warning') {

      setTimeout(() => {
        setAlert(null);
      }, 1500);
    }

  }


  const removeBodyClass = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const allMode = (cls) => {
    removeBodyClass();
    console.log('dark mode clicked');
    document.body.classList.add('bg-'+ cls)
    if (finalMode === 'light') {
      setFinalMode('dark'); 
      document.body.style.backgroundColor = 'cls';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setFinalMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  // const toggleMode = () => {
  //   console.log('dark mode clicked');
  //   if (finalMode === 'light') {
  //     setFinalMode('dark');
  //     document.body.style.backgroundColor = '#212529';
  //     showAlert("Dark mode has been enabled", "success");
  //   } else {
  //     setFinalMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }


  // const blueToggleMode = () => {
  //   console.log('blue clicked');
  //   if (finalMode === 'light') {
  //     setFinalMode('#01045c');
  //     document.body.style.backgroundColor = '#01045c';
  //     showAlert("Blue mode has been enabled", "success");
  //   } else {
  //     setFinalMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }


  // const greenToggleMode = () => {
  //   if (finalMode === 'light') {
  //     setFinalMode('#004b50');
  //     document.body.style.backgroundColor = '#004b50';
  //     showAlert("Blue mode has been enabled", "success");
  //   } else {
  //     setFinalMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

  // const yellowToggleMode = () => {
  //   if (finalMode === 'light') {
  //     setFinalMode('#ff5700cf');
  //     document.body.style.backgroundColor = '#ff5700cf';
  //     showAlert("Blue mode has been enabled", "success");
  //   } else {
  //     setFinalMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }


  // const redToggleMode = () => {
  //   if (finalMode === 'light') {
  //     setFinalMode('#d73f3f');
  //     document.body.style.backgroundColor = '#d73f3f';
  //     showAlert("Blue mode has been enabled", "success");
  //   } else {
  //     setFinalMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // }

  // var icon = (
  //   <span class="logo">
  //     <a href="/">
  //       <img src="D:\MyWork\Learning_React\React Learning\textutils\public\favicon-16x16.png" height="33" width="120" alt="text here" /></a>
  //   </span>
  // ); 

  return (
    // <>
    //   <Navbar /*logo={icon}*/ title="TextUtils" abtText="About Us" finalMode={finalMode} toggleMode={toggleMode} blueToggleMode={blueToggleMode} greenToggleMode={greenToggleMode} yellowToggleMode={yellowToggleMode} redToggleMode={redToggleMode} />
    //   <Alert alert={alert} />
    //   <div className="container">

    //     <Router>
    //       <Routes>
    //         <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyse" finalMode={finalMode} />}/>
    //       </Routes>
    //       <Routes>
    //         <Route path='/about' element={<About/>}/>
    //       </Routes>
    //     </Router>
    //     {/* <TextForm showAlert={showAlert} heading="Enter The Text To Analyse" finalMode={finalMode} /> */}
    //     {/*  */}
    //   </div>


    // </>
    <>
      <BrowserRouter>
        <Navbar /*logo={icon}*/ title="TextUtils" abtText="About Us" finalMode={finalMode} allMode={allMode}/*toggleMode={toggleMode} blueToggleMode={blueToggleMode} greenToggleMode={greenToggleMode} yellowToggleMode={yellowToggleMode} redToggleMode={redToggleMode}*/ />

        <Alert alert={alert} />

        <Routes>
          <Route path="/" element={<div className="container"><TextForm showAlert={showAlert} heading="Enter The Text To Analyse" finalMode={finalMode} /></div>} />
          <Route path="/about" element={<div className="container"><About finalMode={finalMode}/></div>} />
        </Routes>

      </BrowserRouter> 


    </>

    // <>
    //   <BrowserRouter>
    //     <Navbar /*logo={icon}*/ title="TextUtils" abtText="About Us" finalMode={finalMode} toggleMode={toggleMode} blueToggleMode={blueToggleMode} greenToggleMode={greenToggleMode} yellowToggleMode={yellowToggleMode} redToggleMode={redToggleMode} />
    //     <Alert alert={alert} />

    //     <div className="container my-3" >
    //       <Routes>
    //         <Route path="/about">
    //           <About />
    //         </Route>
    //         <Route path="/">
    //           <TextForm showAlert={showAlert} heading="Enter The Text To Analyse" finalMode={finalMode} />
    //         </Route>
    //       </Routes>
    //     </div>

    //   </BrowserRouter>
    // </>

  );
}

export default App;
