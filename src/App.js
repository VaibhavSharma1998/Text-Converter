import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm  from './Components/TextForm';
import Alert from './Components/Alert'
import About from './Components/About'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App(){
const[mode,setMode] =useState('light');
const [alert,setAlert] = useState(null);
 
const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 2000);
   
}

const togglemode =()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor ='rgb(35, 39, 47)';
    showAlert('Dark mode is on',"Success")
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('Light mode is on',"Success")
  }

}
  return(
    <>
    <BrowserRouter>
    <Navbar title="Text Converter App" abouttext="AboutTextConverter" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route  path="/" element = {<TextForm  heading="Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all?" mode={mode} showAlert={showAlert}/>}>
          </Route>
    <Route  path="about" element={<About mode={mode} />}>
          </Route>
          
    </Routes>
    </div>
  </BrowserRouter>
        </>
  )
}
export default App;

